import type { Faq } from "./homeData";

export type ServiceImage = { src: string; alt: string; width: number; height: number };

export type ServicePage = {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroDescription: string;
  image: ServiceImage;
  imageFirst?: boolean;
  intro: string[];
  introItemsIntro?: string;
  introItems?: string[];
  features: { title: string; description: string }[];
  faq: Faq[];
};

const IMG = {
  capsule: { src: "/images/baby-capsule-taxi-sydney.png", width: 700, height: 467 },
  childSeat: { src: "/images/child-seat-taxi-sydney.png", width: 700, height: 467 },
  airport: { src: "/images/sydney-airport-transfers-with-baby-seats.png", width: 800, height: 533 },
  hospital: { src: "/images/hospital-transfers-with-baby-seats.png", width: 800, height: 533 },
  family: { src: "/images/family-transport-across-sydney.png", width: 800, height: 533 },
  safety: { src: "/images/child-safety-information.png", width: 740, height: 603 },
} as const;

export const servicePages: ServicePage[] = [
  // Services
  {
    slug: "baby-capsule-taxi-sydney",
    navLabel: "Baby Capsule Taxi",
    metaTitle: "Baby Capsule Taxi Sydney | Baby Seat Taxi Sydney",
    metaDescription:
      "Book a baby capsule taxi in Sydney for newborns and young infants. Professionally installed rear-facing capsules for hospital discharge, airport transfers and everyday travel.",
    eyebrow: "Baby Capsule Taxi",
    h1: "Baby Capsule Taxi Sydney",
    heroDescription:
      "Rear-facing baby capsules professionally installed for newborns and young infants, ideal for hospital discharge, airport transfers and everyday family travel.",
    image: { ...IMG.capsule, alt: "Baby capsule taxi Sydney for newborns and infants" },
    intro: [
      "Baby Seat Taxi Sydney provides dedicated baby capsule taxis for newborns and infants up to approximately 12 months of age. Every capsule is professionally installed by our drivers and used in a rear-facing position in accordance with Australian child restraint standards.",
      "Whether you are leaving hospital with your newborn, heading to the airport or travelling to an everyday appointment, our team confirms your capsule requirements before your trip so the correct restraint is ready when your driver arrives.",
    ],
    introItemsIntro: "A baby capsule taxi is ideal for:",
    introItems: [
      "Hospital discharge transport for newborns",
      "Airport transfers with a new baby",
      "Everyday family travel",
      "Visits to family and friends",
      "Medical and specialist appointments",
    ],
    features: [
      {
        title: "Rear-Facing Capsules",
        description: "Every capsule is fitted rear-facing in line with Australian child restraint standards, suitable for newborns and young infants.",
      },
      {
        title: "Checked Before Every Trip",
        description: "Our drivers check the capsule fitting before departure so you can travel with confidence from the moment you get in.",
      },
      {
        title: "Hospital-Ready Bookings",
        description: "We understand hospital discharge can be time-sensitive. Let us know your expected discharge window and we will do our best to accommodate it.",
      },
    ],
    faq: [
      {
        question: "What age is a baby capsule suitable for?",
        answer: "Baby capsules are generally suitable for newborns up to approximately 12 months, depending on the child's size. Let us know your baby's age and weight when booking.",
      },
      {
        question: "Is the capsule installed before I arrive?",
        answer: "Our driver fits and checks the capsule at pickup to ensure it is correctly secured for your specific vehicle and trip.",
      },
      {
        question: "Can I bring my own baby capsule?",
        answer: "In most cases we provide the capsule as part of the service. If you have a specific requirement, mention it when booking and our team will confirm what is possible.",
      },
    ],
  },
  {
    slug: "child-seat-taxi-sydney",
    navLabel: "Child Seat Taxi",
    metaTitle: "Child Seat Taxi Sydney | Baby Seat Taxi Sydney",
    metaDescription:
      "Book a child seat taxi in Sydney for toddlers and young children aged 6 months to 4 years. Professionally fitted forward-facing child seats available across Sydney.",
    eyebrow: "Child Seat Taxi",
    h1: "Child Seat Taxi Sydney",
    heroDescription:
      "Forward-facing child seats professionally fitted for toddlers and young children, suitable under NSW road rules for children aged approximately 6 months to 4 years.",
    image: { ...IMG.childSeat, alt: "Child seat taxi Sydney for toddlers and young children" },
    intro: [
      "Children under four years of age require an approved child restraint suitable for their age and size. Our child seat taxis provide safe, secure and comfortable transport for toddlers and young children travelling anywhere across Sydney.",
      "Our drivers are trained to fit and check forward-facing child seats before every trip, so parents can travel with confidence whether it's a quick local trip or a longer family journey.",
    ],
    introItemsIntro: "Our child seat taxis provide:",
    introItems: [
      "Safe and secure travel for toddlers and young children",
      "Professionally fitted restraints",
      "Comfortable family transport throughout Sydney",
      "Availability for single trips or return journeys",
    ],
    features: [
      {
        title: "Forward-Facing Child Seats",
        description: "Suitable for toddlers and young children who have outgrown a rear-facing capsule, fitted and checked before departure.",
      },
      {
        title: "Comfortable for Longer Trips",
        description: "Our vehicles are set up to keep young children comfortable on longer trips, including airport and interstate-adjacent journeys.",
      },
      {
        title: "Flexible Booking",
        description: "Book a single child seat or multiple seats for siblings travelling together, subject to vehicle availability.",
      },
    ],
    faq: [
      {
        question: "What age range is a child seat suitable for?",
        answer: "Our child seats generally suit children aged approximately 6 months to 4 years, depending on size. Let us know your child's age and weight when booking.",
      },
      {
        question: "Can I book seats for more than one child?",
        answer: "Yes. Let us know how many children are travelling and their ages so we can arrange the right combination of seats.",
      },
      {
        question: "Do you also provide booster seats?",
        answer: "Yes, booster seats are available for older children who have outgrown a full harness restraint. Mention this when booking.",
      },
    ],
  },
  {
    slug: "sydney-airport-transfers-with-baby-seats",
    navLabel: "Airport Transfers",
    metaTitle: "Sydney Airport Transfers with Baby Seats | Baby Seat Taxi Sydney",
    metaDescription:
      "Sydney Airport transfers with baby capsules and child seats. Domestic and International terminal transfers with flight monitoring and fixed pricing.",
    eyebrow: "Airport Transfers",
    h1: "Sydney Airport Transfers with Baby Seats",
    heroDescription:
      "Travelling with children can be stressful. Our airport transfer service makes family travel easier by providing the correct child restraint before pickup.",
    image: { ...IMG.airport, alt: "Sydney Airport transfers with baby seats" },
    intro: [
      "Airport travel can be challenging with a baby or young child in tow. Our Sydney Airport transfer service helps families travel between Sydney's Domestic and International terminals, homes, hotels and hospitals with the correct baby capsule or child seat already arranged.",
      "When booking an airport baby seat taxi, please provide your pickup location, flight details, number of passengers, seat type and amount of luggage so we can arrange the most suitable vehicle for your journey.",
    ],
    introItemsIntro: "Services include:",
    introItems: [
      "Sydney Domestic Airport transfers",
      "Sydney International Airport transfers",
      "Flight monitoring",
      "Fixed pricing",
      "Assistance with luggage and prams",
    ],
    features: [
      {
        title: "Flight Monitoring",
        description: "We monitor your flight so your driver adjusts pickup timing for early or delayed arrivals.",
      },
      {
        title: "Pram & Luggage Assistance",
        description: "Our drivers help load prams, capsules and luggage so you are not managing everything alone.",
      },
      {
        title: "Fixed, Transparent Pricing",
        description: "Know your fare before you travel, with no surprises on arrival.",
      },
    ],
    faq: [
      {
        question: "Do you transfer to both Sydney terminals?",
        answer: "Yes, we provide transfers to and from both the Domestic and International terminals at Sydney Airport.",
      },
      {
        question: "What if my flight is delayed?",
        answer: "We monitor flight status and adjust your pickup time accordingly, at no extra charge for reasonable delays.",
      },
      {
        question: "Can you bring a baby capsule to the airport for arrivals?",
        answer: "Yes. Let us know your baby's age and the seat type required when booking so it is ready for your arrival.",
      },
    ],
  },
  {
    slug: "taxi-with-baby-seat-sydney",
    navLabel: "Taxi With Baby Seat Sydney",
    metaTitle: "Taxi With Baby Seat Sydney | Baby Seat Taxi Sydney",
    metaDescription:
      "Book a taxi with a baby seat in Sydney for everyday family travel, medical appointments and outings. Baby capsules, child seats and booster seats available.",
    eyebrow: "Family Transport",
    h1: "Taxi With Baby Seat Sydney",
    heroDescription:
      "Reliable, family-friendly taxi transport with baby capsules, child seats and booster seats available for everyday travel across Sydney.",
    image: { ...IMG.family, alt: "Taxi with baby seat Sydney for family travel" },
    intro: [
      "Whether you're travelling to a medical appointment, family gathering, shopping centre, school event or one of Sydney's popular attractions, Baby Seat Taxi Sydney provides safe, reliable and family-friendly transport with the correct child restraint on request.",
      "We understand that travelling with children requires extra care and planning, which is why our service is designed to make family journeys as comfortable and stress-free as possible.",
    ],
    introItemsIntro: "Popular family destinations we service include:",
    introItems: ["Taronga Zoo", "SEA LIFE Sydney Aquarium", "Darling Harbour", "Circular Quay", "Sydney Olympic Park", "Sydney CBD", "Major shopping centres"],
    features: [
      {
        title: "Any Age, Any Occasion",
        description: "From newborn capsules to booster seats for older children, we cater for family trips of all kinds.",
      },
      {
        title: "Pre-Booked or Last-Minute",
        description: "Book ahead to guarantee your seat type, or contact us for same-day availability where possible.",
      },
      {
        title: "Clean, Comfortable Vehicles",
        description: "Our vehicles are clean, comfortable and family-friendly, with room for prams and extra luggage.",
      },
    ],
    faq: [
      {
        question: "Can I book a taxi with a baby seat for a one-off outing?",
        answer: "Yes, we cater for one-off family outings as well as regular or recurring bookings.",
      },
      {
        question: "Do you cover suburbs outside the Sydney CBD?",
        answer: "Yes, we service Sydney CBD, Western Sydney, Inner West, Eastern Suburbs, North Shore and surrounding areas.",
      },
      {
        question: "How do I choose the right seat type?",
        answer: "Let our booking team know your child's age and weight and we will recommend and prepare the most suitable restraint.",
      },
    ],
  },
  {
    slug: "baby-seat-taxi-western-sydney-airport",
    navLabel: "Baby Seat Taxi Western Sydney Airport",
    metaTitle: "Baby Seat Taxi Western Sydney Airport | Baby Seat Taxi Sydney",
    metaDescription:
      "Family transport with baby capsules and child seats to and from Western Sydney Airport. Book ahead for a smooth, safe transfer with the correct child restraint.",
    eyebrow: "Airport Transfers",
    h1: "Baby Seat Taxi Western Sydney Airport",
    heroDescription:
      "Safe, family-friendly transfers to and from Western Sydney Airport with baby capsules and child seats available on request.",
    image: { ...IMG.airport, alt: "Baby seat taxi transfers to Western Sydney Airport" },
    intro: [
      "As Western Sydney Airport comes online, families across Western Sydney will need reliable, accessible transport options with the correct child restraints. Baby Seat Taxi Sydney provides family transfers to and from the Western Sydney Airport precinct, alongside our existing Sydney Airport services.",
      "Let us know your flight details, pickup address and child's age when booking so we can prepare the correct capsule, child seat or booster seat for your journey.",
    ],
    introItemsIntro: "Our Western Sydney Airport transfers include:",
    introItems: [
      "Pickup and drop-off across Western Sydney suburbs",
      "Baby capsules for newborns and infants",
      "Child seats and booster seats for older children",
      "Assistance with luggage and prams",
    ],
    features: [
      {
        title: "Local Western Sydney Coverage",
        description: "We service Parramatta, Blacktown, Penrith, Liverpool, Campbelltown and surrounding Western Sydney suburbs.",
      },
      {
        title: "Correct Seat, Every Trip",
        description: "Tell us your child's age and we will confirm the right capsule, child seat or booster seat in advance.",
      },
      {
        title: "Advance Booking Recommended",
        description: "Book ahead for airport transfers to guarantee vehicle and seat availability at your preferred time.",
      },
    ],
    faq: [
      {
        question: "Do you service Western Sydney Airport?",
        answer: "Yes, we provide family transport to and from the Western Sydney Airport precinct alongside our Sydney Airport transfer services.",
      },
      {
        question: "How early should I book an airport transfer?",
        answer: "We recommend booking as early as possible, particularly to guarantee the correct baby capsule or child seat for your flight time.",
      },
      {
        question: "Can you collect us from home in Western Sydney?",
        answer: "Yes, we provide door-to-door pickup across Western Sydney suburbs including Parramatta, Blacktown, Penrith, Liverpool and Campbelltown.",
      },
    ],
  },
  {
    slug: "booster-seat-taxi-sydney",
    navLabel: "Booster Seat Taxi",
    metaTitle: "Booster Seat Taxi Sydney | Baby Seat Taxi Sydney",
    metaDescription:
      "Book a booster seat taxi in Sydney for older children aged approximately 4 to 7 years. Approved booster seats fitted and checked for every trip.",
    eyebrow: "Booster Seat Taxi",
    h1: "Booster Seat Taxi Sydney",
    heroDescription:
      "Approved booster seats for older children who have outgrown a full harness restraint but still need an approved child restraint under NSW law.",
    image: { ...IMG.childSeat, alt: "Booster seat taxi Sydney for older children" },
    intro: [
      "Children generally need to travel in a booster seat once they have outgrown a forward-facing child seat with an inbuilt harness, until they are tall enough to use a normal adult seatbelt safely, usually around 7 years of age. Baby Seat Taxi Sydney provides approved booster seats fitted and checked by our drivers for every trip.",
      "Booster seat bookings are common for school pickups, family outings, medical appointments and airport transfers where an older child still legally requires a restraint.",
    ],
    introItemsIntro: "Our booster seat taxi service is ideal for:",
    introItems: [
      "School and after-school activity transport",
      "Family outings and weekend trips",
      "Medical and specialist appointments",
      "Airport transfers with older children",
      "Families with multiple children needing mixed seat types",
    ],
    features: [
      {
        title: "Approved Booster Seats",
        description: "Our booster seats meet Australian child restraint standards for older children who no longer need a full harness.",
      },
      {
        title: "Mixed Age Groups Welcome",
        description: "Travelling with siblings of different ages? We can arrange a combination of capsules, child seats and booster seats in one booking.",
      },
      {
        title: "Checked Before Every Trip",
        description: "Drivers confirm the booster seat is correctly positioned and the seatbelt is properly routed before you set off.",
      },
    ],
    faq: [
      {
        question: "At what age can a child use a booster seat?",
        answer: "Generally once a child has outgrown a forward-facing child seat with a harness, until they are tall enough for an adult seatbelt, usually around 4 to 7 years. Let us know your child's age and size when booking.",
      },
      {
        question: "Can I book a booster seat alongside a baby capsule for another child?",
        answer: "Yes, we can arrange mixed seat types in the one booking for families with children of different ages.",
      },
      {
        question: "Is a booster seat suitable for a school pickup?",
        answer: "Yes, booster seats are a popular choice for school and after-school activity transport for older children.",
      },
    ],
  },
  {
    slug: "baby-car-seat-taxi-sydney",
    navLabel: "Baby Car Seat Taxi",
    metaTitle: "Baby Car Seat Taxi Sydney | Baby Seat Taxi Sydney",
    metaDescription:
      "Baby car seat taxi service in Sydney covering capsules, child seats and booster seats for every age. Professionally fitted restraints for safe family travel.",
    eyebrow: "Baby Car Seat Taxi",
    h1: "Baby Car Seat Taxi Sydney",
    heroDescription:
      "One service for every stage — baby capsules, forward-facing child seats and booster seats, professionally fitted for safe family travel across Sydney.",
    image: { ...IMG.capsule, alt: "Baby car seat taxi Sydney covering capsules, child seats and booster seats" },
    intro: [
      "Whatever stage your child is at, Baby Seat Taxi Sydney can arrange the correct car seat for your trip. From rear-facing capsules for newborns through to booster seats for school-aged children, our drivers fit and check the right restraint before every journey.",
      "Simply let us know your child's age and weight when booking, and our team will confirm the most suitable baby car seat for your vehicle and trip.",
    ],
    introItemsIntro: "Our baby car seat taxi service covers:",
    introItems: [
      "Rear-facing baby capsules for newborns and infants",
      "Forward-facing child seats for toddlers and young children",
      "Booster seats for older children",
      "Multiple seats for families with more than one child",
    ],
    features: [
      {
        title: "One Booking, Any Age",
        description: "Whether your child needs a capsule, child seat or booster, our team arranges the correct restraint in a single booking.",
      },
      {
        title: "Professionally Fitted",
        description: "Every seat is fitted and checked by a trained driver before your trip begins.",
      },
      {
        title: "Sydney-Wide Coverage",
        description: "Available across Sydney CBD, Western Sydney, Inner West, Eastern Suburbs, North Shore and surrounding suburbs.",
      },
    ],
    faq: [
      {
        question: "What is the difference between this and your other baby seat pages?",
        answer: "This page covers our full range of child restraints in one place. You can also view dedicated pages for baby capsules, child seats and booster seats if you already know what you need.",
      },
      {
        question: "Can you fit a baby car seat into any vehicle?",
        answer: "Our drivers confirm the correct seat and vehicle combination when you book, based on your child's restraint type and any other passengers or luggage.",
      },
      {
        question: "Do you provide baby car seats for one-off trips?",
        answer: "Yes, we cater for one-off trips as well as regular or recurring bookings.",
      },
    ],
  },
  {
    slug: "baby-seat-taxi-sydney-airport",
    navLabel: "Sydney Airport Baby Seat Taxi",
    metaTitle: "Baby Seat Taxi Sydney Airport | Baby Seat Taxi Sydney",
    metaDescription:
      "Baby seat taxi transfers to and from Sydney (Kingsford Smith) Airport, with baby capsules and child seats available across all terminals.",
    eyebrow: "Sydney Airport",
    h1: "Baby Seat Taxi Sydney Airport",
    heroDescription:
      "Baby capsule and child seat transfers to and from Sydney (Kingsford Smith) Airport, covering the Domestic and International terminals.",
    image: { ...IMG.airport, alt: "Baby seat taxi transfers to Sydney Kingsford Smith Airport" },
    intro: [
      "Sydney (Kingsford Smith) Airport is one of the busiest travel hubs in Australia, and navigating it with a baby or young child adds an extra layer of planning. Baby Seat Taxi Sydney provides transfers to and from all Sydney Airport terminals, with the correct baby capsule or child seat ready before pickup.",
      "We recommend booking in advance for airport transfers, particularly for early morning or late-night flights, to guarantee the correct seat type is available for your family.",
    ],
    introItemsIntro: "Our Sydney Airport service includes:",
    introItems: [
      "Transfers to and from the Domestic terminals",
      "Transfers to and from the International terminal",
      "Flight monitoring for arrivals",
      "Assistance with luggage, prams and car seats",
    ],
    features: [
      {
        title: "All Terminals Covered",
        description: "We service Sydney Airport's Domestic and International terminals for both drop-off and pickup.",
      },
      {
        title: "Flight-Aware Pickups",
        description: "We monitor arriving flights so your driver adjusts pickup timing for early or delayed landings.",
      },
      {
        title: "Ready Before You Land",
        description: "Your baby capsule or child seat is fitted and checked before your driver arrives, so there's no waiting around with a tired child.",
      },
    ],
    faq: [
      {
        question: "Do you cover both Sydney Airport terminals?",
        answer: "Yes, we provide transfers to and from both the Domestic and International terminals at Sydney Airport.",
      },
      {
        question: "How is this different from your Western Sydney Airport service?",
        answer: "This page covers Sydney (Kingsford Smith) Airport in Mascot. We also provide separate transfers to Western Sydney Airport once it is operational — let us know which airport you need when booking.",
      },
      {
        question: "Can you meet us at arrivals with a baby capsule?",
        answer: "Yes, let us know your flight details and your child's age when booking so the correct capsule or child seat is ready for pickup.",
      },
    ],
  },
  // Locations
  {
    slug: "baby-seat-taxi-parramatta",
    navLabel: "Baby Seat Taxi Parramatta",
    metaTitle: "Baby Seat Taxi Parramatta | Baby Seat Taxi Sydney",
    metaDescription:
      "Baby capsule and child seat taxi service in Parramatta. Safe family transport to Westmead Hospital, local appointments and Sydney Airport.",
    eyebrow: "Parramatta",
    h1: "Baby Seat Taxi Parramatta",
    heroDescription: "Safe family transport across Parramatta and the wider Western Sydney business and hospital precinct, with regular runs to Westmead Hospital.",
    image: { ...IMG.hospital, alt: "Baby seat taxi service in Parramatta" },
    intro: [
      "Baby Seat Taxi Sydney provides baby capsule and child seat transport across Parramatta and the surrounding Western Sydney precinct. From hospital transfers to everyday family trips, our drivers arrive with the correct child restraint ready to go.",
      "Parramatta families regularly travel to Westmead Hospital, local shopping centres and Sydney Airport, and our team can accommodate both pre-booked and same-day requests where available.",
    ],
    introItemsIntro: "Common Parramatta trips we assist with:",
    introItems: ["Westmead Hospital transfers", "Local medical appointments", "Parramatta CBD and shopping centre trips", "Sydney Airport transfers"],
    features: [
      { title: "Local Knowledge", description: "Our drivers know the Parramatta area well, including hospital drop-off points and peak traffic times." },
      { title: "Hospital-Ready Transport", description: "Regular runs to Westmead Hospital make us a convenient choice for maternity and paediatric visits." },
      { title: "Flexible Scheduling", description: "Book ahead for appointments or contact us for shorter-notice requests where possible." },
    ],
    faq: [
      { question: "Do you service Westmead Hospital?", answer: "Yes, we provide regular transfers to and from Westmead Hospital for families across Parramatta." },
      { question: "Can I book a baby capsule taxi in Parramatta?", answer: "Yes, baby capsules, child seats and booster seats are all available for Parramatta bookings." },
      { question: "Do you cover Sydney Airport transfers from Parramatta?", answer: "Yes, we provide airport transfers from Parramatta to both Sydney Airport terminals." },
    ],
  },
  {
    slug: "baby-seat-taxi-blacktown",
    navLabel: "Baby Seat Taxi Blacktown",
    metaTitle: "Baby Seat Taxi Blacktown | Baby Seat Taxi Sydney",
    metaDescription:
      "Reliable baby seat taxi coverage for Blacktown families, connecting to Blacktown Hospital and surrounding suburbs.",
    eyebrow: "Blacktown",
    h1: "Baby Seat Taxi Blacktown",
    heroDescription: "Reliable baby seat taxi coverage for Blacktown families, connecting to Blacktown Hospital and surrounding suburbs.",
    image: { ...IMG.capsule, alt: "Baby seat taxi service in Blacktown" },
    intro: [
      "Families across Blacktown can rely on Baby Seat Taxi Sydney for safe, professionally fitted baby capsules and child seats. We support trips to Blacktown Hospital, local appointments and everyday family travel.",
      "Whether you need a rear-facing capsule for a newborn or a booster seat for an older child, our booking team will confirm the right vehicle before your trip.",
    ],
    introItemsIntro: "Common Blacktown trips we assist with:",
    introItems: ["Blacktown Hospital transfers", "School and childcare pickups", "Local family outings", "Sydney Airport transfers"],
    features: [
      { title: "Blacktown Hospital Transfers", description: "We regularly assist families travelling to and from Blacktown Hospital." },
      { title: "Family-Friendly Vehicles", description: "Our vehicles are clean, comfortable and set up for prams and extra luggage." },
      { title: "Advance or Same-Day Booking", description: "Plan ahead for appointments or reach out for shorter-notice availability." },
    ],
    faq: [
      { question: "Do you service Blacktown Hospital?", answer: "Yes, we provide transfers to and from Blacktown Hospital for local families." },
      { question: "Can I book a booster seat in Blacktown?", answer: "Yes, booster seats are available for older children alongside capsules and child seats." },
      { question: "Is the service available on weekends?", answer: "Yes, our service operates 24 hours a day, 7 days a week." },
    ],
  },
  {
    slug: "baby-seat-taxi-liverpool",
    navLabel: "Baby Seat Taxi Liverpool",
    metaTitle: "Baby Seat Taxi Liverpool | Baby Seat Taxi Sydney",
    metaDescription:
      "Family-friendly baby seat taxi transport throughout Liverpool and South West Sydney, supporting families attending Liverpool Hospital and local specialists.",
    eyebrow: "Liverpool",
    h1: "Baby Seat Taxi Liverpool",
    heroDescription: "Family-friendly transport throughout Liverpool and South West Sydney, supporting families attending Liverpool Hospital and local specialists.",
    image: { ...IMG.hospital, alt: "Baby seat taxi service in Liverpool" },
    intro: [
      "Baby Seat Taxi Sydney supports families across Liverpool and South West Sydney with professionally fitted baby capsules, child seats and booster seats.",
      "Liverpool Hospital is a common destination for our passengers, alongside everyday family travel, medical appointments and Sydney Airport transfers.",
    ],
    introItemsIntro: "Common Liverpool trips we assist with:",
    introItems: ["Liverpool Hospital transfers", "Specialist and medical appointments", "Family outings across South West Sydney", "Sydney Airport transfers"],
    features: [
      { title: "Liverpool Hospital Specialists", description: "We regularly assist families travelling to and from Liverpool Hospital." },
      { title: "South West Sydney Coverage", description: "We service Liverpool and the wider South West Sydney region." },
      { title: "Correct Seat Every Time", description: "We confirm your child's seat requirements before every trip." },
    ],
    faq: [
      { question: "Do you service Liverpool Hospital?", answer: "Yes, we provide baby seat taxi transfers to and from Liverpool Hospital." },
      { question: "Can you provide a child seat for a toddler in Liverpool?", answer: "Yes, forward-facing child seats are available for toddlers and young children." },
      { question: "Do you cover the wider South West Sydney area?", answer: "Yes, we service Liverpool and surrounding South West Sydney suburbs." },
    ],
  },
  {
    slug: "baby-seat-taxi-penrith",
    navLabel: "Baby Seat Taxi Penrith",
    metaTitle: "Baby Seat Taxi Penrith | Baby Seat Taxi Sydney",
    metaDescription:
      "Baby capsule and child seat transport across Penrith and the Blue Mountains foothills, built for longer-distance family trips.",
    eyebrow: "Penrith",
    h1: "Baby Seat Taxi Penrith",
    heroDescription: "Baby capsule and child seat transport across Penrith and the Blue Mountains foothills, built for longer-distance family trips.",
    image: { ...IMG.family, alt: "Baby seat taxi service in Penrith" },
    intro: [
      "Baby Seat Taxi Sydney provides family transport across Penrith and the surrounding Blue Mountains foothills, with vehicles set up for longer-distance trips alongside local appointments.",
      "From hospital visits to family outings, our drivers arrive with the correct baby capsule, child seat or booster seat ready for your journey.",
    ],
    introItemsIntro: "Common Penrith trips we assist with:",
    introItems: ["Local medical appointments", "Family outings across the Penrith area", "Longer-distance family trips", "Sydney Airport transfers"],
    features: [
      { title: "Longer-Distance Comfort", description: "Our vehicles are set up to keep children comfortable on longer trips to and from Penrith." },
      { title: "Flexible Seat Options", description: "Baby capsules, child seats and booster seats are all available for Penrith bookings." },
      { title: "Reliable Local Service", description: "Our drivers are familiar with the Penrith area and surrounding suburbs." },
    ],
    faq: [
      { question: "Do you service the Penrith area?", answer: "Yes, we provide baby seat taxi transport throughout Penrith and the surrounding Blue Mountains foothills." },
      { question: "Can you assist with a longer-distance family trip from Penrith?", answer: "Yes, our vehicles are set up for longer-distance travel with children in mind." },
      { question: "Is advance booking recommended in Penrith?", answer: "Yes, we recommend booking ahead to guarantee the correct seat type is available." },
    ],
  },
  {
    slug: "baby-seat-taxi-campbelltown",
    navLabel: "Baby Seat Taxi Campbelltown",
    metaTitle: "Baby Seat Taxi Campbelltown | Baby Seat Taxi Sydney",
    metaDescription:
      "Dependable baby seat taxi service for Campbelltown and Macarthur families, including transport to Campbelltown Hospital.",
    eyebrow: "Campbelltown",
    h1: "Baby Seat Taxi Campbelltown",
    heroDescription: "Dependable baby seat taxi service for Campbelltown and Macarthur families, including transport to Campbelltown Hospital.",
    image: { ...IMG.hospital, alt: "Baby seat taxi service in Campbelltown" },
    intro: [
      "Baby Seat Taxi Sydney supports families across Campbelltown and the wider Macarthur region with professionally fitted baby capsules and child seats.",
      "Campbelltown Hospital transfers, local appointments and family outings are all catered for, with the correct child restraint confirmed before every trip.",
    ],
    introItemsIntro: "Common Campbelltown trips we assist with:",
    introItems: ["Campbelltown Hospital transfers", "Local family appointments", "Macarthur region outings", "Sydney Airport transfers"],
    features: [
      { title: "Campbelltown Hospital Transfers", description: "We regularly assist families travelling to and from Campbelltown Hospital." },
      { title: "Macarthur Region Coverage", description: "We service Campbelltown and the wider Macarthur region." },
      { title: "Reliable Booking Team", description: "Our team confirms your seat requirements before every trip." },
    ],
    faq: [
      { question: "Do you service Campbelltown Hospital?", answer: "Yes, we provide baby seat taxi transfers to and from Campbelltown Hospital." },
      { question: "Do you cover the Macarthur region?", answer: "Yes, we service Campbelltown and surrounding Macarthur suburbs." },
      { question: "Can I book a return trip from Campbelltown?", answer: "Yes, many customers book both pickup and return journeys for appointments and outings." },
    ],
  },
  {
    slug: "baby-seat-taxi-chatswood",
    navLabel: "Baby Seat Taxi Chatswood",
    metaTitle: "Baby Seat Taxi Chatswood | Baby Seat Taxi Sydney",
    metaDescription:
      "Premium family transport across Chatswood and the North Shore, ideal for hospital appointments and family outings.",
    eyebrow: "Chatswood",
    h1: "Baby Seat Taxi Chatswood",
    heroDescription: "Premium family transport across Chatswood and the North Shore, ideal for hospital appointments and family outings.",
    image: { ...IMG.family, alt: "Baby seat taxi service in Chatswood" },
    intro: [
      "Baby Seat Taxi Sydney provides premium family transport across Chatswood and the wider North Shore, with baby capsules, child seats and booster seats professionally fitted for every trip.",
      "From specialist appointments to family outings and Sydney Airport transfers, our drivers are ready with the correct child restraint for your journey.",
    ],
    introItemsIntro: "Common Chatswood trips we assist with:",
    introItems: ["North Shore medical appointments", "Family outings and shopping trips", "School and event pickups", "Sydney Airport transfers"],
    features: [
      { title: "North Shore Coverage", description: "We service Chatswood and the wider North Shore area." },
      { title: "Premium Family Vehicles", description: "Comfortable, well-presented vehicles suited to Chatswood families." },
      { title: "Flexible Booking", description: "Book ahead for events and appointments or ask about shorter-notice availability." },
    ],
    faq: [
      { question: "Do you service the North Shore?", answer: "Yes, we provide baby seat taxi transport across Chatswood and the wider North Shore." },
      { question: "Can I book a baby capsule for a Chatswood trip?", answer: "Yes, baby capsules, child seats and booster seats are all available." },
      { question: "Do you provide airport transfers from Chatswood?", answer: "Yes, we provide Sydney Airport transfers from Chatswood and surrounding suburbs." },
    ],
  },
  {
    slug: "baby-seat-taxi-bondi",
    navLabel: "Baby Seat Taxi Bondi",
    metaTitle: "Baby Seat Taxi Bondi | Baby Seat Taxi Sydney",
    metaDescription:
      "Comfortable baby seat taxi rides across Bondi and the Eastern Suburbs, from beachside outings to hospital visits.",
    eyebrow: "Bondi",
    h1: "Baby Seat Taxi Bondi",
    heroDescription: "Comfortable baby seat taxi rides across Bondi and the Eastern Suburbs, from beachside outings to hospital visits.",
    image: { ...IMG.family, alt: "Baby seat taxi service in Bondi" },
    intro: [
      "Baby Seat Taxi Sydney provides family transport across Bondi and the Eastern Suburbs, with baby capsules, child seats and booster seats available for beachside outings, appointments and everyday travel.",
      "Our drivers are familiar with the Bondi area, including beachside drop-off points and local traffic conditions, particularly during busy weekends.",
    ],
    introItemsIntro: "Common Bondi trips we assist with:",
    introItems: ["Beachside family outings", "Eastern Suburbs medical appointments", "Royal Hospital for Women transfers", "Sydney Airport transfers"],
    features: [
      { title: "Eastern Suburbs Coverage", description: "We service Bondi and the wider Eastern Suburbs area." },
      { title: "Beachside Local Knowledge", description: "Our drivers know the best drop-off points around Bondi's busy beachside precinct." },
      { title: "Family-Friendly Vehicles", description: "Comfortable vehicles with room for prams, beach gear and extra luggage." },
    ],
    faq: [
      { question: "Do you service the Eastern Suburbs?", answer: "Yes, we provide baby seat taxi transport across Bondi and the wider Eastern Suburbs." },
      { question: "Can you help with a family beach outing to Bondi?", answer: "Yes, we cater for beachside family outings with room for prams and beach gear." },
      { question: "Do you provide transfers to the Royal Hospital for Women?", answer: "Yes, we assist families travelling to and from the Royal Hospital for Women." },
    ],
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((page) => page.slug === slug);
}
