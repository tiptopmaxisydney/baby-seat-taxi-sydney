import type { GuidePage } from "./types";
import { L } from "./links";
import { nswChildRestraintUrl, pointToPointChildRestraintUrl } from "@/lib/homeData";

const OWN_SEAT = {
  question: "Can I use my own car seat?",
  answer: "Yes. You're welcome to use your own approved child restraint if you prefer.",
};

export const childSeatGuides: GuidePage[] = [
  {
    slug: "baby-child-booster-seat-guide",
    pillar: "Child Seats",
    navLabel: "Child Seat Guide",
    metaTitle: "Which Child Seat Should I Request? | Sydney Taxi Seat Guide",
    metaDescription:
      "Not sure which baby capsule, child seat or booster to request for your Sydney taxi? Tell us each child's age and approximate size - here's what to include.",
    eyebrow: "Child Seat Guide",
    h1: "Which Child Seat Should I Request for My Sydney Taxi?",
    heroDescription:
      "You don't need to guess which restraint to request. Give us the age and approximate size of each child and our booking team records the appropriate requirements.",
    image: "childSeat",
    sections: [
      {
        heading: "What to Tell Us About Each Child",
        paragraphs: [
          "The right restraint depends on a child's age and size, not age alone - two children of the same age can need different restraints. That's why we ask for both, for every child travelling.",
        ],
        table: {
          head: ["Child", "What to tell us"],
          rows: [
            ["Newborn", "Exact age (days or weeks) - common for hospital-to-home transfers"],
            ["Under 6 months", "Age and approximate size"],
            ["6-12 months", "Age and approximate size"],
            ["1-4 years", "Age and approximate height/size"],
            ["4-7 years", "Age and approximate height/size"],
            ["7+ years", "Age and approximate height - children under about 145cm may still need a booster"],
            ["Multiple children", "The details above for every child"],
          ],
        },
      },
      {
        heading: "Restraint Types We Arrange",
        cards: [
          {
            title: "Baby / Infant Restraint",
            description: "Rear-facing options for babies who need an appropriate rear-facing restraint, including newborns.",
          },
          {
            title: "Toddler / Child Restraint",
            description: "Child restraints arranged according to your child's age and size, including forward-facing restraints with an inbuilt harness.",
          },
          {
            title: "Booster Seat",
            description: "For older children where a booster seat is appropriate for their age and size.",
          },
        ],
      },
      {
        heading: "How the NSW Rules Fit In",
        paragraphs: [
          "NSW rules for private cars set restraint types by age: rear-facing up to 6 months, rear-facing or forward-facing with an inbuilt harness from 6 months to 4 years, forward-facing with a harness or a booster from 4 to 7 years, and a booster for older children who are too small for a seatbelt.",
          "Taxis have their own, different rules - see our NSW taxi baby seat laws guide. Whatever the vehicle, you can request the restraint your child would use in the family car.",
        ],
      },
      {
        heading: "Work Out What Your Family Needs",
        paragraphs: ["Enter your children's ages, passengers and luggage for a suggested vehicle and list of restraints to request."],
        calculator: true,
      },
    ],
    faq: [
      {
        question: "Do I need to know which restraint to request?",
        answer: "No. Give us each child's age and approximate size and we'll record the appropriate requirements.",
      },
      {
        question: "What if my child is between restraint types?",
        answer: "Tell us their age, height and approximate weight. Size matters as much as age, which is why we ask for both.",
      },
      OWN_SEAT,
      {
        question: "Can I request a rear-facing restraint for an older baby?",
        answer: "Yes. Tell us your preference when booking along with your child's age and size.",
      },
    ],
    related: [L.laws, L.multiple, L.capsule, L.childSeat, L.booster],
  },
  {
    slug: "taxi-with-multiple-child-seats-sydney",
    pillar: "Child Seats",
    navLabel: "Multiple Child Seats",
    metaTitle: "Taxi with Multiple Child Seats Sydney | 2, 3 or More Car Seats",
    metaDescription:
      "Book a Sydney taxi with 2, 3 or more child seats for twins, siblings and family groups. Tell us every child's age, your luggage and pram, and we'll match the vehicle.",
    eyebrow: "Multiple Children",
    h1: "Taxi with Multiple Child Seats in Sydney",
    heroDescription:
      "Twins, a baby and a toddler, or three kids and the grandparents - request a restraint for every child and we'll arrange a vehicle that fits your whole family.",
    image: "family",
    sections: [
      {
        heading: "Families We Regularly Plan For",
        cards: [
          { title: "2 children needing restraints", description: "For example a baby in a rear-facing restraint plus a toddler in a forward-facing harness." },
          { title: "3 children needing restraints", description: "Usually needs a larger vehicle once adults, luggage and a pram are included." },
          { title: "Twins", description: "Two restraints of the same type - tell us both babies' ages and sizes, especially if they differ." },
          { title: "Baby + toddler", description: "Different restraint types in one vehicle - request each one separately." },
          { title: "Multiple boosters", description: "Older siblings who each need a booster seat." },
          { title: "Parents + grandparents", description: "More adults plus child restraints often means a 7-seat vehicle or minibus." },
        ],
      },
      {
        heading: "Why Vehicle Choice Matters",
        paragraphs: [
          "Child restraints take up seating positions, and some can't sit next to each other. Add adults, suitcases and a double pram and the vehicle that fits on paper may not fit on the day.",
          "Multiple restraints are subject to vehicle configuration and availability - the more detail you give us, the better we can match the vehicle. Booking early helps, especially for three or more restraints.",
        ],
      },
      {
        heading: "Which Vehicle Does My Family Need?",
        paragraphs: ["Enter your family's details for a suggested starting point - we'll confirm the exact vehicle when you book."],
        calculator: true,
      },
      {
        heading: "Common Searches We Can Help With",
        list: [
          "Taxi with 2 baby seats in Sydney",
          "Taxi with 3 child seats in Sydney",
          "Sydney Airport transfer with 2 car seats",
          "Family taxi in Sydney for 3 kids",
          "Twins taxi from hospital",
        ],
      },
    ],
    faq: [
      {
        question: "Can I book two child seats?",
        answer: "Yes. Request a restraint for each child when booking, with each child's age and approximate size.",
      },
      {
        question: "Can I book three child seats?",
        answer: "Yes, subject to vehicle configuration and availability. Three restraints usually need a larger vehicle - book early.",
      },
      {
        question: "Can twins travel home from hospital together?",
        answer: "Yes. Request two rear-facing restraints and tell us how many adults are travelling.",
      },
      {
        question: "Can I mix my own seat with one of yours?",
        answer: "Yes. Tell us which children will use your restraint and which need one arranged.",
      },
    ],
    related: [L.airport2Seats, L.pram, L.seatGuide, L.airportLuggage, L.laws],
  },
  {
    slug: "taxi-with-baby-seat-and-pram-sydney",
    pillar: "Child Seats",
    navLabel: "Baby Seat & Pram",
    metaTitle: "Taxi with Baby Seat and Pram Sydney | Room for Your Stroller",
    metaDescription:
      "Book a Sydney taxi with a baby seat and room for your pram or double stroller. Tell us your full travel setup and we'll arrange a vehicle that fits.",
    eyebrow: "Prams & Strollers",
    h1: "Taxi with Baby Seat and Pram in Sydney",
    heroDescription:
      "A baby seat may fit in a sedan - your full travel setup may not. Tell us about your pram, luggage and passengers and we'll arrange a vehicle that fits everything.",
    image: "family",
    sections: [
      {
        heading: "Plan for Your Whole Setup",
        paragraphs: [
          "A family travelling with two adults, two children, two child restraints, a large pram and four suitcases may need a larger vehicle than you'd expect. Child restraints take up seats, and prams take up boot space that would otherwise hold luggage.",
          "When booking, tell us the type of pram - compact, full-size, travel system or double - as well as your suitcases and carry-ons.",
        ],
      },
      {
        heading: "Pram Types and What to Tell Us",
        table: {
          head: ["Pram", "What to tell us"],
          rows: [
            ["Compact / travel stroller", "That it folds small - usually fits with modest luggage"],
            ["Full-size pram", "Brand or folded size if known, plus all luggage"],
            ["Travel system (pram + capsule)", "Whether you'll use your own capsule in the vehicle"],
            ["Double pram", "That it's a double - this often changes the vehicle needed"],
          ],
        },
      },
      {
        heading: "Check Which Vehicle Fits",
        calculator: true,
      },
    ],
    faq: [
      {
        question: "Can you carry a large pram?",
        answer: "Yes - tell us about it when booking so we can arrange a vehicle with enough boot space.",
      },
      {
        question: "Can you carry a double stroller?",
        answer: "Yes. A double pram plus luggage and child restraints often needs an SUV, 7-seat vehicle or minibus.",
      },
      {
        question: "Can I use my travel-system capsule in the taxi?",
        answer: "Yes. You're welcome to use your own approved restraint - tell us when booking.",
      },
    ],
    related: [L.airportPram, L.multiple, L.airportLuggage, L.seatGuide],
  },
  {
    slug: "taxi-vs-rideshare-with-baby-sydney",
    pillar: "Child Seats",
    navLabel: "Taxi vs Rideshare",
    metaTitle: "Taxi vs Rideshare with a Baby in Sydney | Child Seat Rules",
    metaDescription:
      "How NSW child restraint rules differ between taxis and rideshare or booked hire vehicles, with links to official guidance - and how to travel with a requested child seat.",
    eyebrow: "Taxi vs Rideshare",
    h1: "Taxi vs Rideshare with a Baby in Sydney: Child Seat Rules Explained",
    heroDescription:
      "NSW has different child restraint rules for taxis and for booked hire vehicles, including rideshare. Here's a plain summary, with links to the official sources.",
    image: "safety",
    sections: [
      {
        heading: "Taxis",
        paragraphs: [
          "In a NSW taxi, children up to 6 months must use a rear-facing child restraint. Children aged 6 to 12 months must use a rear-facing restraint or a forward-facing restraint with an inbuilt harness. Children over 12 months must use a booster seat or wear a properly adjusted and fastened seatbelt.",
        ],
      },
      {
        heading: "Rideshare and Booked Hire Vehicles",
        paragraphs: [
          "Booked hire vehicles, including rideshare, are not taxis. Children under 12 months must use a suitable child restraint, and for older children booked hire vehicles generally follow the private-vehicle rules. Whether a restraint is available depends on the service you book.",
        ],
      },
      {
        heading: "Official Sources",
        links: [
          { label: "NSW Government - child car seat rules", href: nswChildRestraintUrl },
          { label: "Point to Point Transport Commissioner - child restraints", href: pointToPointChildRestraintUrl },
        ],
        paragraphs: [
          "This page is general information, not legal advice. Rules can change - always check the official sources.",
        ],
      },
      {
        heading: "Prefer to Travel with a Requested Child Restraint?",
        paragraphs: [
          "Whatever the minimum rules allow, many parents prefer their child to travel in the restraint they'd use in the family car. Pre-book a family transfer and request a restraint for each child.",
        ],
      },
    ],
    faq: [
      {
        question: "Can a toddler use a seatbelt in a Sydney taxi?",
        answer: "In NSW taxis, children over 12 months may use a properly adjusted and fastened seatbelt. Many parents still prefer a child restraint - you can request one when booking.",
      },
      {
        question: "Do rideshare cars have child seats in Sydney?",
        answer: "It depends on the service. Check with the provider before booking, or pre-book a transfer with the restraint you need.",
      },
      OWN_SEAT,
    ],
    related: [L.laws, L.seatGuide, L.visiting],
  },
  {
    slug: "visiting-sydney-with-a-baby",
    pillar: "Child Seats",
    navLabel: "Visiting Sydney with a Baby",
    metaTitle: "Visiting Sydney with a Baby | Family Transport Guide",
    metaDescription:
      "Visiting Sydney with a baby or young children? NSW car seat rules, taxis vs rideshare, airport transfers, prams, hotels and cruise transfers - a practical guide.",
    eyebrow: "Visitors' Guide",
    h1: "Visiting Sydney with a Baby? Your Guide to Family Transport",
    heroDescription:
      "Flying in from overseas or interstate with a baby or young children? Here's what to know about car seats, getting from the airport and getting around Sydney.",
    image: "airport",
    sections: [
      {
        heading: "Do I Need a Car Seat in Sydney?",
        paragraphs: [
          "NSW law requires children to use approved child restraints in private vehicles, by age. Taxis have different rules, and booked hire and rideshare vehicles are different again - see our guides to NSW taxi baby seat laws and taxi vs rideshare.",
          "Many visiting families would rather not carry a car seat on the plane. You can pre-book a transfer with the restraint you need already arranged.",
        ],
      },
      {
        heading: "Bringing Your Own Seat or Requesting One",
        cards: [
          { title: "Request a restraint", description: "Tell us each child's age and approximate size when booking and we'll arrange an appropriate restraint." },
          { title: "Bring your own", description: "You're welcome to use your own approved restraint. Note that restraints certified elsewhere may not meet Australian requirements - check before you travel." },
          { title: "Mix and match", description: "Use your own seat for one child and request one for another." },
        ],
      },
      {
        heading: "From the Airport",
        paragraphs: [
          "Book your Sydney Airport arrival before you fly, with your flight number, the number and ages of children, adults, luggage and any pram. You can book your return transfer at the same time.",
        ],
      },
      {
        heading: "Getting Around Sydney with Children",
        listIntro: "Family trips we're regularly booked for:",
        list: [
          "Hotel transfers in the CBD, Darling Harbour and Circular Quay",
          "Cruise terminal transfers - Overseas Passenger Terminal and White Bay",
          "Taronga Zoo, SEA LIFE Sydney Aquarium and Sydney Olympic Park",
          "Visiting relatives across Sydney's suburbs",
          "Return airport transfers at the end of your stay",
        ],
      },
    ],
    faq: [
      {
        question: "Can overseas visitors book before arriving in Australia?",
        answer: "Yes. Book online before you travel, including the child restraints you need for your arrival.",
      },
      {
        question: "Can I bring my car seat from overseas?",
        answer: "You can, but restraints certified in other countries may not meet Australian requirements. Check before travelling, or request a restraint when booking.",
      },
      {
        question: "Can babies travel in Sydney taxis?",
        answer: "Yes. In NSW taxis, babies up to 12 months must travel in a suitable child restraint. Request one when booking.",
      },
      {
        question: "Can I book a cruise terminal transfer with a baby seat?",
        answer: "Yes. Tell us your terminal, sailing time, children's ages and luggage when booking.",
      },
    ],
    related: [L.international, L.airportHotel, L.vsRideshare, L.laws, L.pram],
  },
];
