import { LuggageIcon } from "@/booking-widget/components/icons/LuggageIcon";
import { PeoplesIcon } from "@/booking-widget/components/icons/PeoplesIcon";
import { SuitCaseIcon } from "@/booking-widget/components/icons/SuitCaseIcon";
import ChildSeatIcon from "@/booking-widget/components/icons/ChildSeatIcon";
import WheelChairIcon from "@/booking-widget/components/icons/WheelChairIcon";
import BabyCapsule from "@/booking-widget/components/icons/BabyCapsule";
import { IVehicleDetails } from "@/booking-widget/interfaces/createBooking";
import { Card, Image } from "antd";
import { babySeatFare } from "@/booking-widget/utils/babySeatTransfer";
import { getVehicleEquipmentEligibility } from "@/booking-widget/utils/vehicleEquipmentMatrix";

interface VehicleCardProps extends IVehicleDetails {
  showPricing: boolean;
  onButtonClick: any
  loading?: any,
  showPricingState?: any
  showBabyseatOption?: boolean
  selected?: boolean
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle_name,
  vehicle_id,
  passenger,
  luggage,
  handbags,
  child_seat_charges,
  child_capsule_charges,
  wheel_chair_charges,
  max_babyseat,
  max_babycapsule,
  max_wheelchair,
  is_wheelchair_vehicle,
  is_baby_seat_transfer,
  tax_percentage,
  showPricing,
  base_fee,
  surcharge_amount,
  tax,
  gov_levy,
  airport_toll,
  one_way_amount,
  return_trip_amount,
  onButtonClick,
  loading,
  showBabyseatOption = false,
  selected = false,
}) => {
  const equipmentEligibility = getVehicleEquipmentEligibility({ vehicle_name, is_wheelchair_vehicle });
  // Baby Seat Transfer shows the cheapest possible fare (one seat) as "From $X"; the exact
  // fixed fare is shown once seat type and quantity are chosen.
  const babySeatFromFare = is_baby_seat_transfer
    ? babySeatFare(
        { base_fee, gov_levy, airport_toll, surcharge_amount, tax_percentage, child_seat_charges, child_capsule_charges },
        1,
        0,
        return_trip_amount != null ? 2 : 1
      )
    : 0;
  return (
  <Card
    className={[
      "vehicle_card w-full !rounded-2xl transition-colors",
      selected ? "!border-2 !border-[#1d3649]" : "!border !border-slate-200 hover:!border-[#1d3649]/40",
    ].join(" ")}
    styles={{ body: { padding: 16 } }}
  >
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 vehicle_card_inner">
      <div className="flex flex-col items-center gap-2 flex-shrink-0 w-full sm:w-28">
        <Image
          src={is_baby_seat_transfer ? "/images/booking/baby-seat-taxi.webp" : process.env.NEXT_PUBLIC_DEV_BUCKET_ROOT + vehicle_id.image}
          alt={is_baby_seat_transfer ? "Baby Seat Transfer" : process.env.NEXT_PUBLIC_DEV_BUCKET_ROOT + vehicle_id.image}
          width="100%"
          height={90}
          className="rounded-xl object-contain"
          preview={false}
        />
        <h3 className="text-sm font-semibold text-[#1d3649] text-center">{vehicle_name}</h3>
      </div>

      <div className="hidden sm:block w-px bg-slate-100 self-stretch" />

      <div className="flex-1 flex flex-col justify-center gap-1.5 text-sm text-slate-600 w-full [&_svg]:w-4 [&_svg]:h-4 [&_svg]:flex-shrink-0">
        {is_baby_seat_transfer ? (
          <>
            <div className="flex items-center gap-2">
              <ChildSeatIcon />
              <span>Baby &amp; child seat equipped</span>
            </div>
            <div className="flex items-center gap-2">
              <PeoplesIcon />
              <span>Up to {Math.max(1, Number(passenger) - 1)} passengers</span>
            </div>
            <div className="flex items-center gap-2">
              <SuitCaseIcon />
              <span>Choose seat type &amp; quantity (1–2)</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <PeoplesIcon />
              <span>{passenger} passengers</span>
            </div>
            <div className="flex items-center gap-2">
              <SuitCaseIcon />
              <span>{luggage} large suitcases</span>
            </div>
            <div className="flex items-center gap-2">
              <LuggageIcon />
              <span>{handbags} hand luggage</span>
            </div>
          </>
        )}
        {showBabyseatOption && !is_baby_seat_transfer &&
          <>
            {equipmentEligibility.allowsBabyseat && child_seat_charges != null && Number(max_babyseat ?? 2) > 0 &&
              <div className="flex items-center gap-2">
                <ChildSeatIcon />
                <span>{max_babyseat ?? 2} Babyseat</span>
              </div>
            }
            {equipmentEligibility.allowsBabycapsule && child_capsule_charges != null && Number(max_babycapsule ?? 2) > 0 &&
              <div className="flex items-center gap-2">
                <BabyCapsule />
                <span>{max_babycapsule ?? 2} Babycapsule</span>
              </div>
            }
            {equipmentEligibility.allowsWheelchair && wheel_chair_charges != null && Number(max_wheelchair ?? 2) > 0 &&
              <div className="flex items-center gap-2">
                <WheelChairIcon />
                <span>{max_wheelchair ?? 2} WheelChair</span>
              </div>
            }
          </>
        }
      </div>

      {(loading || showPricing) && (
        <div className="hidden sm:block w-px bg-slate-100 self-stretch" />
      )}

      {loading ? (
        <div className="flex items-center justify-center flex-shrink-0 w-full sm:w-auto">
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        showPricing && (
          <div className="flex flex-col items-center sm:items-end justify-center gap-1 flex-shrink-0 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 text-center sm:text-right">
            <div className="text-xs font-medium text-slate-400 tracking-wide">AUD</div>
            {is_baby_seat_transfer ? (
              <div className="text-2xl font-bold text-[#1d3649]">
                <span className="text-sm font-medium text-slate-500">From </span>${babySeatFromFare.toFixed(2)}
              </div>
            ) : return_trip_amount != null ? (
              <>
                <div className="text-2xl font-bold text-[#1d3649]">
                  ${(base_fee + surcharge_amount + tax + gov_levy + airport_toll).toFixed(2)}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  <div>One Way: ${Number(one_way_amount ?? 0).toFixed(2)}</div>
                  <div>Return Trip: ${Number(return_trip_amount).toFixed(2)}</div>
                </div>
              </>
            ) : (
              <div className="text-2xl font-bold text-[#1d3649]">
                ${(base_fee + surcharge_amount + tax + gov_levy + airport_toll).toFixed(2)}
              </div>
            )}
            <button
              type="button"
              onClick={onButtonClick}
              className="mt-1 rounded-full px-6 py-2 text-sm font-semibold bg-[#f78d1e] text-white transition-colors hover:bg-[#ff3802] w-full sm:w-auto"
            >
              Select
            </button>
          </div>
        )
      )}
    </div>
  </Card>
  );
};

export default VehicleCard;
