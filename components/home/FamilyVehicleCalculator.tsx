"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ChildAge = "under6m" | "6to12m" | "1to4y" | "4to7y" | "7plus";
type ChildSize = "unsure" | "small" | "average" | "large";
type Child = { age: ChildAge; size: ChildSize };
type Pram = "none" | "single" | "double";

const ageOptions: { value: ChildAge; label: string }[] = [
  { value: "under6m", label: "Under 6 months" },
  { value: "6to12m", label: "6-12 months" },
  { value: "1to4y", label: "1-4 years" },
  { value: "4to7y", label: "4-7 years" },
  { value: "7plus", label: "7+ years" },
];

// Size matters as much as age for choosing a restraint, so the booking team gets both.
const sizeOptions: { value: ChildSize; label: string }[] = [
  { value: "unsure", label: "Not sure" },
  { value: "small", label: "Small for their age" },
  { value: "average", label: "Average for their age" },
  { value: "large", label: "Large / tall for their age" },
];

const ageLabel = (age: ChildAge) => ageOptions.find((o) => o.value === age)!.label;
const sizeLabel = (size: ChildSize) => sizeOptions.find((o) => o.value === size)!.label;

// Mirrors the NSW private-vehicle guidance by age; the booking team confirms the actual
// restraint from the child's age and size, so this only says what to request. We arrange baby
// capsules and child seats only - never suggest a booster seat as something we provide.
const restraintFor: Record<ChildAge, string> = {
  under6m: "Rear-facing baby restraint",
  "6to12m": "Rear-facing restraint, or forward-facing with inbuilt harness",
  "1to4y": "Child restraint (rear-facing or forward-facing with inbuilt harness)",
  "4to7y": "Child seat with an inbuilt harness (we don't provide booster seats)",
  "7plus": "Seatbelt - or bring your own booster seat if your child still uses one",
};

// Deliberately conservative thresholds - fitted restraints reduce usable seats and real
// capacity depends on the vehicle, so the result is a starting point the team confirms.
function recommendVehicle(people: number, restraints: number, luggagePoints: number) {
  if (people <= 3 && restraints <= 1 && luggagePoints <= 3) return "Sedan";
  if (people <= 4 && restraints <= 2 && luggagePoints <= 5) return "SUV / Wagon";
  if (people <= 6 && luggagePoints <= 7) return "7-seat vehicle";
  return "Minibus";
}

function Stepper({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void }) {
  return (
    <div className="wt-calc-field">
      <span>{label}</span>
      <div className="wt-calc-stepper">
        <button type="button" aria-label={`Fewer ${label.toLowerCase()}`} onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min}>
          −
        </button>
        <output aria-live="polite">{value}</output>
        <button type="button" aria-label={`More ${label.toLowerCase()}`} onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max}>
          +
        </button>
      </div>
    </div>
  );
}

export default function FamilyVehicleCalculator() {
  const router = useRouter();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState<Child[]>([{ age: "6to12m", size: "unsure" }]);
  const [suitcases, setSuitcases] = useState(2);
  const [carryOns, setCarryOns] = useState(1);
  const [pram, setPram] = useState<Pram>("single");
  const [flightNumber, setFlightNumber] = useState("");

  const setChildCount = (count: number) =>
    setChildren((prev) =>
      count > prev.length
        ? [...prev, ...Array.from({ length: count - prev.length }, (): Child => ({ age: "1to4y", size: "unsure" }))]
        : prev.slice(0, count)
    );
  const updateChild = (index: number, patch: Partial<Child>) =>
    setChildren((prev) => prev.map((c, j) => (j === index ? { ...c, ...patch } : c)));

  const restraintsNeeded = children.filter((c) => c.age !== "7plus").length;
  const luggagePoints = suitcases + carryOns * 0.5 + (pram === "single" ? 1 : pram === "double" ? 2 : 0);
  const vehicle = recommendVehicle(adults + children.length, restraintsNeeded, luggagePoints);

  // Hands the family details to the quote form (see BookingForm.tsx), which pre-fills them into
  // the driver instructions so the booking team can recommend the vehicle and restraints.
  function sendToQuote() {
    const lines = [
      `Adults: ${adults}`,
      ...children.map((c, i) => `Child ${i + 1}: ${ageLabel(c.age)}, ${sizeLabel(c.size).toLowerCase()}`),
      `Large suitcases: ${suitcases}, carry-on bags: ${carryOns}`,
      `Pram: ${pram === "none" ? "none" : pram === "single" ? "single pram" : "double pram"}`,
      ...(flightNumber.trim() ? [`Flight number: ${flightNumber.trim()}`] : []),
    ];
    const params = new URLSearchParams({
      family: lines.join("\n"),
      passengers: String(adults + children.length),
      seats: String(restraintsNeeded),
    });
    router.push(`/get-quote?${params.toString()}#wcb-booking-form`);
  }

  return (
    <div className="wt-calc">
      <div className="wt-calc-inputs">
        <Stepper label="Adults" value={adults} min={1} max={10} onChange={setAdults} />
        <Stepper label="Children" value={children.length} min={0} max={6} onChange={setChildCount} />
        {children.map((child, i) => (
          <div className="wt-calc-child" key={i}>
            <label className="wt-calc-field">
              <span>Child {i + 1} age</span>
              <select value={child.age} onChange={(e) => updateChild(i, { age: e.target.value as ChildAge })}>
                {ageOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="wt-calc-field">
              <span>Child {i + 1} approximate size</span>
              <select value={child.size} onChange={(e) => updateChild(i, { size: e.target.value as ChildSize })}>
                {sizeOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ))}
        <Stepper label="Large suitcases" value={suitcases} min={0} max={12} onChange={setSuitcases} />
        <Stepper label="Carry-on bags" value={carryOns} min={0} max={12} onChange={setCarryOns} />
        <label className="wt-calc-field">
          <span>Pram / stroller</span>
          <select value={pram} onChange={(e) => setPram(e.target.value as Pram)}>
            <option value="none">No pram</option>
            <option value="single">Single pram</option>
            <option value="double">Double pram</option>
          </select>
        </label>
        <label className="wt-calc-field">
          <span>Flight number (if airport transfer)</span>
          <input type="text" value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} placeholder="e.g. QF1" maxLength={12} />
        </label>
      </div>

      <div className="wt-calc-result" aria-live="polite">
        <p className="wt-calc-label">Suggested vehicle</p>
        <p className="wt-calc-vehicle">{vehicle}</p>
        <p className="wt-calc-label">Likely child restraints (confirmed by our team)</p>
        {children.length === 0 ? (
          <p>No child restraints needed.</p>
        ) : (
          <ul>
            {children.map((child, i) => (
              <li key={i}>
                Child {i + 1}: {restraintFor[child.age]}
              </li>
            ))}
          </ul>
        )}
        <p className="wt-calc-note">
          A guide only - child restraints change the number of usable seats. Send us these details and our team will
          confirm the right vehicle and child restraints for your family.
        </p>
        <button type="button" className="wt-btn wt-btn-primary" onClick={sendToQuote}>
          Get Vehicle &amp; Child-Seat Recommendation
        </button>
      </div>
    </div>
  );
}
