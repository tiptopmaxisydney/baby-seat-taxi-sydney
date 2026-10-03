// Official sources linked wherever child-restraint rules are summarised. Keep summaries short
// and defer to these pages - the rules change and differ between taxis and booked hire vehicles.
export const nswChildRestraintUrl =
  "https://www.nsw.gov.au/driving-boating-and-transport/roads-safety-and-rules/safe-driving/child-seats";
export const pointToPointChildRestraintUrl = "https://www.pointtopoint.nsw.gov.au/child-restraints";
export const transportNswChildSeatsUrl = "https://www.transport.nsw.gov.au/roadsafety/parents/child-car-seats";

// Shown (with lastReviewed) near the top of every page that summarises the rules - see
// components/OfficialSources.tsx. Re-check the rules against these and bump the date on review.
export const lastReviewed = "October 2026";
export const officialSources = [
  { label: "NSW Government – Child car seats", href: nswChildRestraintUrl },
  { label: "NSW Point to Point Transport Commissioner – Child restraints in taxi, hire and rideshare vehicles", href: pointToPointChildRestraintUrl },
  { label: "Transport for NSW – Child car seats", href: transportNswChildSeatsUrl },
];

// We arrange baby capsules and child seats only. Booster seats are mentioned on the site only where
// the NSW rules themselves name them, always alongside this note.
export const noBoosterNote =
  "We arrange baby capsules and child seats. We do not provide booster seats - if your child uses a booster seat, please bring your own approved booster.";

// Summary of the NSW taxi rules (checked against pointToPointChildRestraintUrl and
// nswChildRestraintUrl, October 2026). Taxi rules differ from hire/rideshare and private vehicles.
export const nswTaxiRules = [
  { age: "Up to 6 months", rule: "Must be secured in a suitable approved rear-facing child restraint." },
  {
    age: "6 to 12 months",
    rule: "Must be secured in a suitable approved rear-facing child restraint, or a forward-facing child restraint with an inbuilt harness. A rear-facing restraint is strongly recommended.",
  },
  {
    age: "1 to 7 years",
    rule: "May travel wearing a properly fastened and adjusted seatbelt, although a suitable approved child restraint is strongly recommended.",
  },
];

// Applies to every taxi trip - the taxi driver's obligation for babies, plus front-seat rules.
export const nswTaxiNotes = [
  "A taxi driver must not start a trip if a passenger is under 1 year old and neither the driver nor the adult passenger has a suitable approved child restraint.",
  "Children under 4 years must not sit in the front seat of a taxi, hire or rideshare vehicle.",
];

// Hire and rideshare (booked hire) vehicles follow the private-vehicle rules, not the taxi rules.
export const nswRideshareRule =
  "The rules for hire and rideshare vehicles are the same rules that apply in a private vehicle - so children under 7 must use an approved child restraint suitable for their age and size. The taxi rules above do not apply to them.";

// Summary of the NSW Government private-vehicle rules (checked against nswChildRestraintUrl, Oct 2026).
export const nswPrivateVehicleRules = [
  { age: "Up to 6 months", rule: "Must use a rear-facing child restraint." },
  {
    age: "6 months to 4 years",
    rule: "Must use either a rear-facing child restraint or a forward-facing child restraint with an inbuilt harness.",
  },
  {
    age: "4 to 7 years",
    rule: "Must use a forward-facing child restraint with an inbuilt harness or an approved booster seat.",
  },
  {
    age: "7 years and over",
    rule: "If too small for a seatbelt, should use an approved booster seat or anchored safety harness. The suggested minimum height for a seatbelt is 145cm.",
  },
];

// Restraint categories deliberately carry no fixed age bands - the right restraint depends on
// age AND size, so every page asks parents for both instead of publishing ranges.
export const restraintOptions = [
  {
    title: "Baby / Infant Restraint",
    description: "Rear-facing options for babies who need an appropriate rear-facing restraint, including newborns leaving hospital.",
  },
  {
    title: "Toddler / Child Restraint",
    description: "Child restraints arranged according to your child's age and size, including forward-facing restraints with an inbuilt harness.",
  },
  {
    title: "Several Children",
    description: "Request a restraint for each child, subject to vehicle configuration and availability - give us every child's age and approximate size.",
  },
];

export const restraintBookingNote =
  "When booking, tell us each child's age and approximate size so we can arrange an appropriate restraint for the journey. You don't need to guess which restraint to request.";

export const familyBenefits = [
  {
    title: "Child restraints requested at booking",
    description: "Tell us the age of each child when booking so their restraint requirements are recorded against your trip.",
  },
  {
    title: "Multiple children accommodated",
    description: "Families travelling with two or more children can request multiple restraints, subject to vehicle configuration and availability.",
  },
  {
    title: "Prams and luggage considered",
    description: "Tell us how many suitcases, carry-ons and prams you're travelling with so we can arrange an appropriately sized vehicle.",
  },
  {
    title: "Sydney Airport transfers",
    description: "Pre-book Sydney Airport arrivals and departures with your flight number recorded against the booking.",
  },
  {
    title: "24/7 bookings",
    description: "Suitable for early departures, late arrivals and overnight flights.",
  },
  {
    title: "Sydney-wide coverage",
    description: "CBD, Eastern Suburbs, Inner West, North Shore, Western Sydney, South West and surrounding areas.",
  },
];

export const bookingChecklist = [
  "Number of children, and each child's age and approximate size",
  "Number of adults",
  "Suitcases and carry-on bags",
  "Pram or stroller (single or double)",
  "Flight number for airport pickups",
];

export const bookingSteps = [
  { title: "Enter your journey", description: "Pickup, drop-off, date and time - plus your flight number for airport pickups." },
  { title: "Tell us about each child", description: "Add the age and approximate size of every child travelling." },
  { title: "Add passengers, luggage and prams", description: "So we can arrange a vehicle with room for your whole family." },
  { title: "Receive your confirmation", description: "Your vehicle arrives prepared for the requirements recorded on your booking." },
];

// Guidance only - no seat counts are published because fitted child restraints change the usable
// seating positions. Confirm exact configurations with operations before adding numbers here.
export const familyVehicles = [
  { title: "Sedan", description: "Best for two adults, one child and light luggage." },
  { title: "SUV / Wagon", description: "Best for a family with a child restraint plus a larger pram or more luggage." },
  { title: "7-seat vehicle", description: "Best for larger families or bookings needing multiple child restraints." },
  { title: "Minibus", description: "Best for family groups, multiple children, large amounts of luggage and airport transfers." },
];

export const officialGuidance = [
  {
    title: "NSW child car seat rules",
    description: "NSW Government guidance on child restraints in private vehicles and taxis, by age.",
    href: nswChildRestraintUrl,
  },
  {
    title: "Child restraints in taxis and hire vehicles",
    description: "Point to Point Transport Commissioner guidance on children in taxis, booked hire vehicles and rideshare.",
    href: pointToPointChildRestraintUrl,
  },
  {
    title: "Transport for NSW child car seats",
    description: "Transport for NSW road safety guidance for parents on choosing and using child car seats.",
    href: transportNswChildSeatsUrl,
  },
];

export const serviceAreas = [
  {
    title: "Baby Seat Taxi Parramatta",
    href: "/baby-seat-taxi-parramatta/",
    description: "Family transport across Parramatta and the wider Western Sydney area, including trips to and from Westmead Hospital.",
  },
  {
    title: "Baby Seat Taxi Blacktown",
    href: "/baby-seat-taxi-blacktown/",
    description: "Pre-booked family transport for Blacktown, Blacktown Hospital and surrounding suburbs.",
  },
  {
    title: "Baby Seat Taxi Liverpool",
    href: "/baby-seat-taxi-liverpool/",
    description: "Family transport throughout Liverpool and South West Sydney, including Liverpool Hospital.",
  },
  {
    title: "Baby Seat Taxi Penrith",
    href: "/baby-seat-taxi-penrith/",
    description: "Family transport across Penrith and the Blue Mountains foothills, including longer-distance trips.",
  },
  {
    title: "Baby Seat Taxi Campbelltown",
    href: "/baby-seat-taxi-campbelltown/",
    description: "Family transport for Campbelltown and Macarthur, including Campbelltown Hospital.",
  },
  {
    title: "Baby Seat Taxi Chatswood",
    href: "/baby-seat-taxi-chatswood/",
    description: "Family transport across Chatswood and the North Shore for hospital appointments and family outings.",
  },
  {
    title: "Baby Seat Taxi Bondi",
    href: "/baby-seat-taxi-bondi/",
    description: "Family transport across Bondi and the Eastern Suburbs, from beach outings to hospital visits.",
  },
  {
    title: "Baby Seat Taxi Sydney CBD",
    href: "/baby-seat-taxi-sydney-cbd/",
    description: "Family transport to and from the Sydney CBD, hotels, Darling Harbour and Circular Quay.",
  },
];

export const popularDestinations = [
  "Taronga Zoo",
  "SEA LIFE Sydney Aquarium",
  "Darling Harbour",
  "Circular Quay",
  "Sydney Olympic Park",
  "Cruise terminals",
  "Sydney CBD hotels",
  "Major shopping centres",
];

export const hospitalsServed = [
  "Royal Prince Alfred Hospital",
  "Westmead Hospital",
  "Liverpool Hospital",
  "St George Hospital",
  "Royal Hospital for Women",
  "Sydney Children's Hospital",
];

export const airportServices = [
  "Sydney Domestic and International Airport transfers",
  "Flight number recorded against your booking",
  "Multiple child restraints on request",
  "Vehicle sized for your luggage and pram",
  "Arrival and return transfers bookable together",
];

export type Faq = { question: string; answer: string };

export const faqColumns: Faq[][] = [
  [
    {
      question: "Do taxis need baby seats in NSW?",
      answer:
        "Children under 12 months must travel in a suitable approved child restraint in a NSW taxi - rear-facing up to 6 months, and rear-facing or forward-facing with an inbuilt harness from 6 to 12 months. Children over 12 months may legally use a properly fastened and adjusted seatbelt in a taxi, although a child restraint is strongly recommended. Hire and rideshare vehicles follow the private-vehicle rules instead - see our NSW taxi baby seat laws guide for the official sources.",
    },
    {
      question: "Can a newborn travel in a Sydney taxi?",
      answer:
        "Yes, in a rear-facing restraint. Tell us your baby's age when booking so a suitable rear-facing restraint can be arranged - this is common for hospital-to-home transfers.",
    },
    {
      question: "Can I book two or three child seats?",
      answer:
        "Yes. Request a restraint for each child when booking. Multiple restraints are subject to vehicle configuration and availability, so the more detail you give us about your children, adults and luggage, the better we can match the vehicle.",
    },
    {
      question: "Can I use my own car seat?",
      answer: "Yes. You're welcome to use your own approved child restraint if you prefer.",
    },
    {
      question: "Can you carry a pram or double stroller?",
      answer:
        "Yes - tell us about your pram when booking. A larger or double pram, combined with luggage and multiple restraints, may need a larger vehicle.",
    },
    {
      question: "Is your service available 24/7?",
      answer: "Yes, pre-booked transfers are available 24 hours a day, 7 days a week across Sydney.",
    },
  ],
  [
    {
      question: "Can you pick us up from Sydney Airport?",
      answer:
        "Yes. We provide Sydney Domestic and International Airport transfers. Add your flight number when booking so the booking is associated with the correct arrival.",
    },
    {
      question: "Can I book both airport legs together?",
      answer: "Yes. Many families book the arrival and return transfer at the same time.",
    },
    {
      question: "Can overseas visitors book before arriving in Australia?",
      answer: "Yes. You can book online before you travel, including the child restraints you need for your arrival.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "As early as possible, especially if you need more than one restraint or a larger vehicle. We also accommodate many same-day bookings, subject to availability.",
    },
    {
      question: "Can I book a newborn hospital discharge?",
      answer:
        "Yes. We provide hospital-to-home transfers from Sydney hospitals. Tell us your baby's age and how many adults are travelling when you book.",
    },
    {
      question: "What should I tell you when booking?",
      answer:
        "Each child's age and approximate size, the number of adults, suitcases and carry-on bags, any pram or stroller, and your flight number for airport pickups.",
    },
  ],
];

// Verbatim from the live footer's "Services" column.
export const footerServices = [
  { label: "Baby Capsule Taxi Sydney", href: "/baby-capsule-taxi-sydney/" },
  { label: "Child Seat Taxi Sydney", href: "/child-seat-taxi-sydney/" },
  { label: "Sydney Airport Transfers", href: "/sydney-airport-transfers-with-baby-seats/" },
  { label: "Taxi With Baby Seat Sydney", href: "/taxi-with-baby-seat-sydney/" },
  { label: "NSW Taxi Baby Seat Laws", href: "/nsw-taxi-baby-seat-laws/" },
];

// Verbatim from the live footer's "Useful Links" column.
export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/baby-seat-taxi-company-in-sydney/" },
  { label: "Blog", href: "/baby-seat-taxi-sydney-blog/" },
  { label: "FAQ's", href: "/faqs/" },
  { label: "Contact Us", href: "/baby-seat-taxi-sydney-contact-details/" },
];

// Verbatim from the live footer's "Location" column (6 of the 7 location
// pages — the live footer omits Chatswood even though it's a real page).
export const footerLocations = [
  { label: "Baby Seat Taxi Parramatta", href: "/baby-seat-taxi-parramatta/" },
  { label: "Baby Seat Taxi Blacktown", href: "/baby-seat-taxi-blacktown/" },
  { label: "Baby Seat Taxi Liverpool", href: "/baby-seat-taxi-liverpool/" },
  { label: "Baby Seat Taxi Penrith", href: "/baby-seat-taxi-penrith/" },
  { label: "Baby Seat Taxi Campbelltown", href: "/baby-seat-taxi-campbelltown/" },
  { label: "Baby Seat Taxi Bondi", href: "/baby-seat-taxi-bondi/" },
];
