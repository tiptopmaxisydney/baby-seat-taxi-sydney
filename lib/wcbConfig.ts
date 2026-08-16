import { siteConfig } from "@/lib/siteConfig";

/**
 * Submits quote requests straight to the TipTop Ride dispatch backend
 * (booking.controller.ts `POST /booking/web/quote`, no auth), the same
 * endpoint used by the wheelchair-taxi-sydney sibling site. It creates a
 * real `quote_booking` record and returns a priced fare breakdown.
 *
 * vehicleId/vehicleName come from GET /vehicle/active/vehicles. The value
 * below is a PLACEHOLDER — it has not been confirmed against the live
 * TipTop Ride vehicle list, unlike the wheelchair site's
 * "6a6de6c29989d8e2d2edff47" (Wheelchair Vehicle), which was verified.
 * Replace vehicleId with the correct baby-seat/family vehicle id before
 * this form goes live, or quote requests will be tagged with the wrong
 * vehicle. bookingTransferType intentionally avoids "airport_transfer":
 * the backend's pricing step reads `arrival_date` instead of
 * `scheduled_date` for that type, and this form only collects one date field.
 */
export const wcbConfig = {
  apiUrl: "https://nexus1.tiptopride.com.au:3000/booking/web/quote",
  googleApiKey: siteConfig.googleMapsApiKey,
  vehicleId: "REPLACE_WITH_BABY_SEAT_VEHICLE_ID",
  vehicleName: "Baby Seat Vehicle",
  bookingTransferType: "baby_seat_transfer",
  paymentMethod: "invoice",
  countryCode: "+61",
  places: {
    country: "au",
    center: { lat: -33.8688, lng: 151.2093 },
    pickupRadiusKm: 50,
    dropoffRadiusKm: 165,
    strict: true,
    requireSelection: true,
  },
  messages: {
    sending: "Getting your quote…",
    success: "Thank you. Your quote request has been received and our team will confirm your booking shortly.",
    error: "We could not submit your request. Please try again or call us directly.",
    address:
      "Please choose the pickup and dropoff addresses from the suggestions so we can confirm they are inside our service area.",
    required: "Please complete the highlighted fields before continuing.",
    email: "Please enter a valid email address so we can send your quote.",
    phone: "Please enter a valid contact phone number.",
  },
} as const;
