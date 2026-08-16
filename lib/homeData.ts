export const whyChooseUs = [
  {
    title: "Safety-First Family Transport",
    description:
      "Parents trust us because safety comes first. Every child restraint is professionally fitted and checked by trained drivers before your journey begins, so you can travel with confidence.",
  },
  {
    title: "Baby Capsules & Child Seats Available",
    description:
      "Suitable for newborns, infants, toddlers and young children. Rear-facing baby capsules are available for newborns and young infants, with forward-facing child seats and booster seats available on request.",
  },
  {
    title: "Sydney Airport & Hospital Specialists",
    description:
      "Reliable transfers to and from Sydney's Domestic and International Airports, plus safe pickup and drop-off for newborns and families leaving Sydney hospitals.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Booking Confirmation",
    items: [
      "Pickup location",
      "Destination",
      "Preferred pickup time",
      "Child's age and weight",
      "Number of children travelling",
      "Baby capsule, child seat or booster required",
    ],
  },
  {
    step: "02",
    title: "Seat & Vehicle Allocation",
    intro: "We assign a suitable vehicle and child restraint based on:",
    items: ["Child's age and size", "Number of children", "Luggage and pram requirements", "Journey distance", "Pickup location"],
  },
  {
    step: "03",
    title: "Safe Fitting & Boarding",
    intro: "When the driver arrives they will:",
    items: [
      "Fit and check the correct baby capsule or child seat",
      "Position the vehicle safely for loading",
      "Assist with prams and luggage",
      "Secure the child restraint before departure",
      "Confirm your child is seated safely before setting off",
    ],
  },
  {
    step: "04",
    title: "Comfortable Family Travel",
    intro: "During your journey our drivers aim to provide:",
    items: [
      "Smooth, unhurried driving",
      "Direct routes where practical",
      "Assistance when arriving at your destination",
      "Respectful and professional customer service",
    ],
  },
];

export type FleetType = { title: string; icon: "capsule" | "seat" | "booster" | "multi"; description: string };

export const fleetTypes: FleetType[] = [
  {
    title: "Baby Capsule (Newborn – 12 Months)",
    icon: "capsule",
    description:
      "Rear-facing baby capsules professionally installed for newborns and young infants, ideal for hospital discharge and everyday travel.",
  },
  {
    title: "Convertible Child Seat (6 Months – 4 Years)",
    icon: "seat",
    description:
      "Forward-facing child seats fitted and checked by trained drivers, suitable for toddlers and young children under NSW road rules.",
  },
  {
    title: "Booster Seat (4 – 7 Years)",
    icon: "booster",
    description:
      "Booster seats available for older children who have outgrown a full harness restraint but still need an approved seat.",
  },
  {
    title: "Multiple Child Seats",
    icon: "multi",
    description:
      "Travelling with more than one child? Let us know each child's age when booking and we will arrange the right combination of seats.",
  },
];

export const serviceAreas = [
  {
    title: "Baby Seat Taxi Parramatta",
    description: "Safe family transport across Parramatta and the wider Western Sydney business and hospital precinct, with regular runs to Westmead Hospital.",
  },
  {
    title: "Baby Seat Taxi Blacktown",
    description: "Reliable baby seat taxi coverage for Blacktown families, connecting to Blacktown Hospital and surrounding suburbs.",
  },
  {
    title: "Baby Seat Taxi Liverpool",
    description: "Family-friendly transport throughout Liverpool and South West Sydney, supporting families attending Liverpool Hospital and local specialists.",
  },
  {
    title: "Baby Seat Taxi Penrith",
    description: "Baby capsule and child seat transport across Penrith and the Blue Mountains foothills, built for longer-distance family trips.",
  },
  {
    title: "Baby Seat Taxi Campbelltown",
    description: "Dependable baby seat taxi service for Campbelltown and Macarthur families, including transport to Campbelltown Hospital.",
  },
  {
    title: "Baby Seat Taxi Chatswood",
    description: "Premium family transport across Chatswood and the North Shore, ideal for hospital appointments and family outings.",
  },
  {
    title: "Baby Seat Taxi Bondi",
    description: "Comfortable baby seat taxi rides across Bondi and the Eastern Suburbs, from beachside outings to hospital visits.",
  },
  {
    title: "Baby Seat Taxi Sydney CBD",
    description: "Fast, professional baby seat taxi transport through the Sydney CBD, built around family schedules and traffic conditions.",
  },
];

export const fleetIncludes = [
  "Professionally fitted baby capsules and child seats",
  "Rear-facing baby capsules available for newborns and young infants",
  "Forward-facing child seats available upon request",
  "Booster seats for older children",
  "Airport transfer vehicles with luggage and pram capacity",
  "Hospital and medical transport vehicles",
  "Coverage across Sydney CBD, Western Sydney, Inner West, Eastern Suburbs and North Shore",
];

export const childSafetyInfoPoints = [
  "Your child's approximate age",
  "Your child's approximate weight",
  "Whether a rear-facing baby capsule is needed",
  "Whether a forward-facing child seat is needed",
  "Whether a booster seat is needed",
  "Number of children travelling",
  "Any specific seat brand or model preference",
  "Pram or additional luggage requirements",
];

export const bookingSteps = [
  "Contact us online or by phone.",
  "Tell us your pickup and destination.",
  "Let us know your child's age and the seat type needed.",
  "Receive your fare quote and booking confirmation.",
  "We assign a vehicle with the correct baby capsule or child seat.",
  "Your driver arrives at the scheduled time and fits the seat.",
  "Travel safely to your destination.",
];

export const driverAssistance = [
  "Fitting and checking baby capsules and child seats before departure",
  "Helping parents load prams, capsules and luggage",
  "Assisting with car seat transfers between vehicles where needed",
  "Airport pickup assistance",
  "Hospital collection and drop-off for newborns and families",
  "Providing a calm, safe environment for infants and young children",
  "Extra support for parents travelling solo with multiple children",
];

export const familiesWeAssist = [
  "New parents and newborns",
  "Families travelling together",
  "Hospital patients and maternity discharges",
  "Grandparents and carers minding children",
  "Cruise terminal passengers",
  "Sydney Airport travellers",
  "Tourists needing a baby capsule or booster seat",
  "Event organisers and school groups",
  "Corporate clients relocating with families",
  "Community and support organisations",
];

export const popularDestinations = [
  "Taronga Zoo",
  "SEA LIFE Sydney Aquarium",
  "Darling Harbour",
  "Circular Quay",
  "Sydney Olympic Park",
  "Sydney CBD",
  "Sydney Airport",
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
  "Sydney Domestic Airport Transfers",
  "Sydney International Airport Transfers",
  "Flight monitoring",
  "Fixed pricing",
  "Assistance with luggage and prams",
];

export const safetyFeatures = [
  "Baby capsules available for newborns and infants",
  "Child seats available for toddlers and young children",
  "Child restraints fitted and checked before every trip",
  "Suitable for airport transfers, hospital transfers and family travel",
  "Clean, comfortable and family-friendly vehicles",
  "Advance booking available to guarantee the correct child seat",
];

export type Faq = { question: string; answer: string };

export const faqColumns: Faq[][] = [
  [
    {
      question: "Do you provide baby seats in taxis across Sydney?",
      answer: "Yes, we provide baby capsules and child seats for family travel throughout Sydney.",
    },
    {
      question: "Can I pre-book a taxi with a baby seat?",
      answer: "Yes, we recommend booking in advance to ensure the correct child restraint is available.",
    },
    {
      question: "What types of child seats do you offer?",
      answer: "We offer baby capsules, forward-facing child seats and booster seats depending on your child's age and size.",
    },
    {
      question: "Is your baby seat taxi service available 24/7?",
      answer: "Yes, our service operates 24 hours a day, 7 days a week across Sydney.",
    },
    {
      question: "Why choose Baby Seat Taxi Sydney?",
      answer: "We specialise in family transport with safe child restraints, professional drivers and reliable service.",
    },
  ],
  [
    {
      question: "Do you provide airport transfers with baby seats?",
      answer:
        "Yes. We specialise in Sydney Airport transfers with baby seats, making travel easier for families arriving or departing with young children.",
    },
    {
      question: "How far in advance should I book a baby seat taxi?",
      answer:
        "We recommend booking as early as possible to guarantee the correct child restraint. However, we also accommodate many same-day and last-minute bookings.",
    },
    {
      question: "Are your baby seats professionally installed?",
      answer:
        "Yes. All child restraints are installed and checked by trained drivers before your journey to ensure safety and compliance.",
    },
    {
      question: "Can I book a baby seat taxi for hospital appointments?",
      answer:
        "Absolutely. We provide safe family transport to hospitals, medical centres and specialist appointments throughout Sydney.",
    },
    {
      question: "Can I book a return trip?",
      answer:
        "Yes. Many customers book both pickup and return journeys, especially for airport transfers, medical appointments and family outings.",
    },
  ],
];

export const footerServices = [
  { label: "Baby Capsule Taxi Sydney", href: "/baby-capsule-taxi-sydney/" },
  { label: "Child Seat Taxi Sydney", href: "/child-seat-taxi-sydney/" },
  { label: "Booster Seat Taxi Sydney", href: "/booster-seat-taxi-sydney/" },
  { label: "Baby Car Seat Taxi Sydney", href: "/baby-car-seat-taxi-sydney/" },
  { label: "Sydney Airport Transfers", href: "/sydney-airport-transfers-with-baby-seats/" },
  { label: "Taxi With Baby Seat Sydney", href: "/taxi-with-baby-seat-sydney/" },
];

export const footerLinks = [
  { label: "About Us", href: "/baby-seat-taxi-company-in-sydney/" },
  { label: "Blog", href: "/baby-seat-taxi-sydney-blog/" },
  { label: "FAQ's", href: "/faqs/" },
  { label: "Contact Us", href: "/baby-seat-taxi-sydney-contact-details/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
];

export const footerLocations = [
  { label: "Baby Seat Taxi Parramatta", href: "/baby-seat-taxi-parramatta/" },
  { label: "Baby Seat Taxi Blacktown", href: "/baby-seat-taxi-blacktown/" },
  { label: "Baby Seat Taxi Liverpool", href: "/baby-seat-taxi-liverpool/" },
  { label: "Baby Seat Taxi Penrith", href: "/baby-seat-taxi-penrith/" },
  { label: "Baby Seat Taxi Campbelltown", href: "/baby-seat-taxi-campbelltown/" },
  { label: "Baby Seat Taxi Chatswood", href: "/baby-seat-taxi-chatswood/" },
  { label: "Baby Seat Taxi Bondi", href: "/baby-seat-taxi-bondi/" },
];
