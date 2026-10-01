"use client";

import { useState } from "react";
import Link from "next/link";

type ChildAge = "under6m" | "6to12m" | "1to4y" | "4to7y" | "7plus";
type Pram = "none" | "single" | "double";

const ageOptions: { value: ChildAge; label: string }[] = [
  { value: "under6m", label: "Under 6 months" },
  { value: "6to12m", label: "6-12 months" },
  { value: "1to4y", label: "1-4 years" },
  { value: "4to7y", label: "4-7 years" },
  { value: "7plus", label: "7+ years" },
];

// Mirrors the NSW private-vehicle guidance by age; the booking team confirms the actual
// restraint from the child's age and size, so this only says what to request.
const restraintFor: Record<ChildAge, string> = {
  under6m: "Rear-facing baby restraint",
  "6to12m": "Rear-facing restraint, or forward-facing with inbuilt harness",
  "1to4y": "Child restraint (rear-facing or forward-facing with inbuilt harness)",
  "4to7y": "Forward-facing restraint with harness, or booster seat",
  "7plus": "Booster seat if under about 145cm, otherwise seatbelt",
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
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState<ChildAge[]>(["6to12m"]);
  const [suitcases, setSuitcases] = useState(2);
  const [carryOns, setCarryOns] = useState(1);
  const [pram, setPram] = useState<Pram>("single");

  const setChildCount = (count: number) =>
    setChildren((prev) => (count > prev.length ? [...prev, ...Array(count - prev.length).fill("1to4y")] : prev.slice(0, count)));

  const restraintsNeeded = children.filter((c) => c !== "7plus").length;
  const luggagePoints = suitcases + carryOns * 0.5 + (pram === "single" ? 1 : pram === "double" ? 2 : 0);
  const vehicle = recommendVehicle(adults + children.length, restraintsNeeded, luggagePoints);

  return (
    <div className="wt-calc">
      <div className="wt-calc-inputs">
        <Stepper label="Adults" value={adults} min={1} max={10} onChange={setAdults} />
        <Stepper label="Children" value={children.length} min={0} max={6} onChange={setChildCount} />
        {children.map((age, i) => (
          <label className="wt-calc-field" key={i}>
            <span>Child {i + 1} age</span>
            <select value={age} onChange={(e) => setChildren((prev) => prev.map((c, j) => (j === i ? (e.target.value as ChildAge) : c)))}>
              {ageOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
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
      </div>

      <div className="wt-calc-result" aria-live="polite">
        <p className="wt-calc-label">Suggested vehicle</p>
        <p className="wt-calc-vehicle">{vehicle}</p>
        <p className="wt-calc-label">Child restraints to request</p>
        {children.length === 0 ? (
          <p>No child restraints needed.</p>
        ) : (
          <ul>
            {children.map((age, i) => (
              <li key={i}>
                Child {i + 1}: {restraintFor[age]}
              </li>
            ))}
          </ul>
        )}
        <p className="wt-calc-note">
          A guide only - child restraints change the number of usable seats. Enter these details when booking and we&apos;ll
          confirm the right vehicle and restraints for your family.
        </p>
        <Link href="/get-quote/" className="wt-btn wt-btn-primary">
          Get an Exact Quote
        </Link>
      </div>
    </div>
  );
}
