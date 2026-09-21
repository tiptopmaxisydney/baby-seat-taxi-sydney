// "Baby Seat Transfer" service card. The quote endpoint returns it as its own entry
// (is_baby_seat_transfer) priced like the Sedan; the customer picks 1-2 seats, each with a
// type and the child's age. Any seat-equipped vehicle may be sent, so the passenger cap is
// based on the Sedan (the smallest vehicle that might turn up): capacity minus seats fitted.
// Mirrors tipopride-backend/src/booking/baby-seat-transfer.ts — keep the two in sync.
export type BabySeatType = "baby_seat" | "child_seat" | "baby_capsule";

export interface BabySeatItem {
  seat_type: BabySeatType;
  child_age: number | null;
}

export const BABY_SEAT_TRANSFER_MAX_SEATS = 2;

export const BABY_SEAT_TYPES: { value: BabySeatType; label: string; hint: string; min: number; max: number }[] = [
  { value: "baby_seat", label: "Baby Seat", hint: "0 to 4 years", min: 0, max: 4 },
  { value: "child_seat", label: "Child Seat", hint: "4 to 8 years", min: 4, max: 8 },
  { value: "baby_capsule", label: "Baby Capsule", hint: "0 to 12 months", min: 0, max: 0 },
];

export const getBabySeatType = (value: BabySeatType) => BABY_SEAT_TYPES.find((t) => t.value === value);

export const babySeatAgeOptions = (value: BabySeatType) => {
  const type = getBabySeatType(value);
  if (!type) return [];
  if (value === "baby_capsule") return [{ value: 0, label: "Under 12 months" }];
  const options: { value: number; label: string }[] = [];
  for (let age = type.min; age <= type.max; age++) {
    options.push({ value: age, label: age === 0 ? "Under 1 year" : `${age} year${age > 1 ? "s" : ""}` });
  }
  return options;
};

export const isBabySeatItemsValid = (items: BabySeatItem[]) =>
  items.length >= 1 &&
  items.length <= BABY_SEAT_TRANSFER_MAX_SEATS &&
  items.every((item) => {
    const type = getBabySeatType(item.seat_type);
    return !!type && item.child_age != null && item.child_age >= type.min && item.child_age <= type.max;
  });

export const countBabySeats = (items: BabySeatItem[]) => ({
  seats: items.filter((i) => i.seat_type !== "baby_capsule").length,
  capsules: items.filter((i) => i.seat_type === "baby_capsule").length,
});

export const babySeatMaxPassengers = (sedanCapacity: number | undefined, seatCount: number) =>
  Math.max(1, (Number(sedanCapacity) || 4) - seatCount);

// Final fare for the selected seats — the same arithmetic Step5ConfirmBook uses for its
// Total (seats are fitted per leg, so a return trip bills them twice).
export const babySeatFare = (
  vehicle: {
    base_fee?: any;
    gov_levy?: any;
    airport_toll?: any;
    surcharge_amount?: any;
    tax_percentage?: any;
    child_seat_charges?: number | null;
    child_capsule_charges?: number | null;
  },
  seats: number,
  capsules: number,
  legs = 1
) => {
  const equipment =
    (seats * (Number(vehicle.child_seat_charges) || 0) + capsules * (Number(vehicle.child_capsule_charges) || 0)) * legs;
  const baseFee = Number(vehicle.base_fee) || 0;
  const airportToll = Number(vehicle.airport_toll) || 0;
  const gst = (baseFee + equipment + airportToll) * ((Number(vehicle.tax_percentage) || 0) / 100);
  return baseFee + (Number(vehicle.gov_levy) || 0) + airportToll + (Number(vehicle.surcharge_amount) || 0) + gst + equipment;
};
