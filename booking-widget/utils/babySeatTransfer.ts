// "Baby Seat Transfer" service card. The quote endpoint returns it as its own entry
// (is_baby_seat_transfer) priced like the Sedan; the customer picks 1-2 seats, each just a
// type (age is a fixed representative value per type, not customer-entered — see
// babySeatDefaultAge). Any seat-equipped vehicle may be sent, so the passenger cap is based
// on the Sedan (the smallest vehicle that might turn up): capacity minus seats fitted.
// Mirrors tipopride-backend/src/booking/baby-seat-transfer.ts — keep the two in sync.
export type BabySeatType = "baby_seat" | "child_seat" | "baby_capsule";

export interface BabySeatItem {
  seat_type: BabySeatType;
  child_age: number | null;
}

export const BABY_SEAT_TRANSFER_MAX_SEATS = 2;

// Child Seat (4-8 years) removed from the customer-facing choices — Baby Seat and Baby
// Capsule only. The "child_seat" type/backend range are left in place (see
// tipopride-backend/src/booking/baby-seat-transfer.ts) in case something else still uses it.
export const BABY_SEAT_TYPES: { value: BabySeatType; label: string; hint: string; min: number; max: number }[] = [
  { value: "baby_seat", label: "Baby Seat", hint: "1-3 Years", min: 1, max: 3 },
  { value: "baby_capsule", label: "Baby Capsule", hint: "0-11 months", min: 0, max: 0 },
];

export const getBabySeatType = (value: BabySeatType) => BABY_SEAT_TYPES.find((t) => t.value === value);

// No per-seat age input in the UI — the seat type's own age band is shown on the dropdown
// option, so this just picks one representative age within that band to send the backend
// (which still validates it's in range).
export const babySeatDefaultAge = (value: BabySeatType): number => {
  const type = getBabySeatType(value);
  if (!type || value === "baby_capsule") return 0;
  return Math.round((type.min + type.max) / 2);
};

export const isBabySeatItemsValid = (items: BabySeatItem[]) =>
  items.length >= 1 &&
  items.length <= BABY_SEAT_TRANSFER_MAX_SEATS &&
  items.every((item) => !!getBabySeatType(item.seat_type));

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
