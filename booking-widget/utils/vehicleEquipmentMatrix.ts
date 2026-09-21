// Hardcoded fleet-equipment safety net, applied alongside the admin-configured
// max_babyseat/max_babycapsule/max_wheelchair fields on each vehicle — Sedan and SUV
// don't carry wheelchairs, Sedan and the Wheelchair Taxi don't carry baby seats/capsules,
// Minibus carries everything. Matched by vehicle_name (case-insensitive substring) since
// there's no dedicated "vehicle type" enum field; unrecognized names are left unrestricted
// so this never hides equipment for a vehicle type it doesn't know about. Keep this in
// sync with the admin panel's per-vehicle max_* fields rather than as a replacement for them.
export interface VehicleEquipmentEligibility {
  allowsBabyseat: boolean;
  allowsBabycapsule: boolean;
  allowsWheelchair: boolean;
}

export function getVehicleEquipmentEligibility(vehicleInfo?: {
  vehicle_name?: string;
  is_wheelchair_vehicle?: boolean;
}): VehicleEquipmentEligibility {
  const name = (vehicleInfo?.vehicle_name || "").toLowerCase();
  const isSedan = name.includes("sedan");
  const isSUV = name.includes("suv");
  const isWheelchairVehicle = !!vehicleInfo?.is_wheelchair_vehicle || name.includes("wheelchair");

  return {
    allowsBabyseat: !(isSedan || isWheelchairVehicle),
    allowsBabycapsule: !(isSedan || isWheelchairVehicle),
    allowsWheelchair: !(isSedan || isSUV),
  };
}
