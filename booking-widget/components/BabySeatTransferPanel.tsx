"use client";

import { Select } from "antd";
import { IVehicleDetails } from "@/booking-widget/interfaces/createBooking";
import {
  BABY_SEAT_TRANSFER_MAX_SEATS,
  BABY_SEAT_TYPES,
  BabySeatItem,
  BabySeatType,
  babySeatAgeOptions,
  babySeatFare,
  countBabySeats,
} from "@/booking-widget/utils/babySeatTransfer";

interface BabySeatTransferPanelProps {
  vehicleInfo: IVehicleDetails;
  items: BabySeatItem[];
  isReturnTrip: boolean;
  onChange: (items: BabySeatItem[]) => void;
}

const BabySeatTransferPanel: React.FC<BabySeatTransferPanelProps> = ({ vehicleInfo, items, isReturnTrip, onChange }) => {
  const { seats, capsules } = countBabySeats(items);
  const fare = babySeatFare(vehicleInfo, seats, capsules, isReturnTrip ? 2 : 1);

  const setQuantity = (quantity: number) => {
    const next = items.slice(0, quantity);
    while (next.length < quantity) next.push({ seat_type: "baby_seat", child_age: null });
    onChange(next);
  };

  const updateItem = (index: number, patch: Partial<BabySeatItem>) =>
    onChange(items.map((item, i) => (i === index ? { ...item, ...patch } : item)));

  // Changing the seat type resets the age, since each type only accepts its own age band.
  const changeSeatType = (index: number, seat_type: BabySeatType) =>
    updateItem(index, { seat_type, child_age: seat_type === "baby_capsule" ? 0 : null });

  return (
    <div className="rounded-xl border border-[#1d3649]/20 bg-[#1d3649]/[0.02] p-4 mb-4">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div>
          <div className="text-sm font-semibold text-[#1d3649]">Baby Seat Transfer</div>
          <div className="text-xs text-gray-500">Our team sends a suitable vehicle fitted with your seats.</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-600">Seats</span>
          {Array.from({ length: BABY_SEAT_TRANSFER_MAX_SEATS }, (_, i) => i + 1).map((quantity) => (
            <button
              key={quantity}
              type="button"
              onClick={() => setQuantity(quantity)}
              className={[
                "w-9 h-9 rounded-full border text-sm font-semibold transition-colors",
                items.length === quantity
                  ? "border-[#1d3649] bg-[#1d3649] text-white"
                  : "border-slate-300 text-[#1d3649] hover:border-[#1d3649]",
              ].join(" ")}
            >
              {quantity}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        {items.map((item, index) => {
          const ageOptions = babySeatAgeOptions(item.seat_type);
          return (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <div className="text-xs text-slate-500 mb-1">Seat {index + 1} type</div>
                <Select
                  size="large"
                  className="w-100"
                  value={item.seat_type}
                  onChange={(value: any) => changeSeatType(index, value as BabySeatType)}
                  options={BABY_SEAT_TYPES.map((type) => ({ value: type.value, label: `${type.label} (${type.hint})` }))}
                />
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Child age (required)</div>
                <Select
                  size="large"
                  className="w-100"
                  placeholder="Select child age"
                  value={item.child_age ?? undefined}
                  onChange={(value: any) => updateItem(index, { child_age: Number(value) })}
                  options={ageOptions}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-200">
        <div className="text-xs text-gray-500">
          {[
            seats > 0 && `${seats} × $${(Number(vehicleInfo.child_seat_charges) || 0).toFixed(2)} seat`,
            capsules > 0 && `${capsules} × $${(Number(vehicleInfo.child_capsule_charges) || 0).toFixed(2)} capsule`,
          ]
            .filter(Boolean)
            .join(" + ")}
          {isReturnTrip ? ", fitted each way" : ""}
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-500">Final fixed fare</div>
          <div className="text-xl font-bold text-[#1d3649]">AUD ${fare.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default BabySeatTransferPanel;
