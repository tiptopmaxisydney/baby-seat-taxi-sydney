import type { GuidePage, GuideSection } from "./types";
import { L } from "./links";

const BOOKING_DETAILS: GuideSection = {
  heading: "What to Provide When Booking",
  table: {
    head: ["Detail", "Why we ask"],
    rows: [
      ["Flight number", "So the booking is associated with the correct arrival or departure"],
      ["Number and ages of children", "So a restraint can be arranged for each child - include approximate size"],
      ["Number of adults", "Child restraints reduce usable seats, so we need the full passenger count"],
      ["Suitcases and carry-ons", "To choose a vehicle with enough luggage space"],
      ["Pram / stroller", "Single or double - prams take boot space"],
      ["Oversized items", "Cots, car seats you're bringing, sports gear"],
      ["Destination", "Home, hotel, cruise terminal or another address"],
      ["Return flight", "Book both legs together if you like"],
    ],
  },
};

const FLIGHT_DELAY = {
  question: "What happens if my flight is delayed?",
  answer: "Add your flight number when booking so the booking is associated with the correct arrival, and contact us if your plans change.",
};
const BOTH_LEGS = {
  question: "Can I book both airport legs together?",
  answer: "Yes. Many families book the arrival and return transfer at the same time.",
};

export const airportGuides: GuidePage[] = [
  {
    slug: "sydney-international-airport-baby-seat-taxi",
    pillar: "Sydney Airport",
    navLabel: "International Airport (T1)",
    metaTitle: "Sydney International Airport Baby Seat Taxi | T1 Family Transfers",
    metaDescription:
      "Pre-book a family transfer from Sydney International Airport (T1) with baby capsules and child seats arranged for each child. Book before you fly.",
    eyebrow: "T1 International",
    h1: "Sydney International Airport Taxi with Baby Seats (T1)",
    heroDescription:
      "Arriving at T1 after a long-haul flight with children? Book before you fly, with child restraints arranged for each child and a vehicle sized for your luggage.",
    image: "airport",
    sections: [
      {
        heading: "Arriving at T1 with Children",
        paragraphs: [
          "International arrivals take time - immigration, baggage reclaim, and customs and biosecurity checks, all with tired children in tow. Booking ahead means you don't have to find a taxi with a suitable restraint at the end of it.",
          "Add your flight number when booking so the booking is associated with the correct arrival. Contact us once you've cleared customs, or if your plans change.",
        ],
      },
      BOOKING_DETAILS,
      {
        heading: "Departing from T1",
        paragraphs: [
          "International check-in opens well before departure, and families need extra time for bag drop, prams and security. Tell us your departure time and we'll plan your pickup around it - and book your return arrival at the same time.",
        ],
      },
      {
        heading: "Which Vehicle Fits Your Family?",
        paragraphs: ["Long-haul trips usually mean more luggage. Check what your family might need:"],
        calculator: true,
      },
    ],
    faq: [
      {
        question: "Can I book a T1 pickup before leaving my home country?",
        answer: "Yes. Book online before you fly, including the child restraints you need for your arrival.",
      },
      FLIGHT_DELAY,
      {
        question: "Can I bring my own child restraint from overseas?",
        answer: "You can, but restraints certified in other countries may not meet Australian requirements. You can request a restraint when booking instead.",
      },
      BOTH_LEGS,
    ],
    related: [L.airportHub, L.domestic, L.visiting, L.airportHotel, L.airportLuggage],
  },
  {
    slug: "sydney-domestic-airport-baby-seat-taxi",
    pillar: "Sydney Airport",
    navLabel: "Domestic Airport (T2 & T3)",
    metaTitle: "Sydney Domestic Airport Baby Seat Taxi | T2 & T3 Family Transfers",
    metaDescription:
      "Family transfers to and from Sydney Domestic Airport (T2 and T3) with baby capsules and child seats arranged at booking.",
    eyebrow: "T2 & T3 Domestic",
    h1: "Sydney Domestic Airport Taxi with Baby Seats (T2 & T3)",
    heroDescription:
      "Flying interstate with children? Pre-book transfers to and from T2 and T3 with child restraints arranged for each child.",
    image: "airport",
    sections: [
      {
        heading: "T2 and T3 Domestic Terminals",
        paragraphs: [
          "Sydney's domestic flights use two terminals - T2 and T3. Check your airline and booking for your terminal, and include it with your flight number when you book.",
          "Domestic trips are often shorter but busier: early-morning departures, school-holiday crowds and quick turnarounds. Booking ahead means the restraints are arranged before pickup.",
        ],
      },
      BOOKING_DETAILS,
      {
        heading: "Early Departures and Late Arrivals",
        paragraphs: [
          "First-flight departures and late-evening arrivals are common for families flying interstate. Bookings are available 24/7 - tell us your flight time and we'll plan the pickup around it.",
        ],
      },
    ],
    faq: [
      {
        question: "Do you pick up from both T2 and T3?",
        answer: "Yes. Include your terminal and flight number when booking.",
      },
      FLIGHT_DELAY,
      {
        question: "Can I book an early-morning departure?",
        answer: "Yes. Bookings are available 24 hours a day.",
      },
      BOTH_LEGS,
    ],
    related: [L.airportHub, L.international, L.airport2Seats, L.airportPram],
  },
  {
    slug: "sydney-airport-transfer-with-2-child-seats",
    pillar: "Sydney Airport",
    navLabel: "Airport Transfer with 2 Child Seats",
    metaTitle: "Sydney Airport Transfer with 2 Child Seats | Family Airport Taxi",
    metaDescription:
      "Book a Sydney Airport transfer with two child seats - baby and toddler, twins or siblings - plus room for your luggage and pram.",
    eyebrow: "Two Child Seats",
    h1: "Sydney Airport Transfer with 2 Child Seats",
    heroDescription:
      "Two children, two restraints, plus suitcases and a pram. Tell us everything you're travelling with and we'll arrange a vehicle that fits.",
    image: "airport",
    sections: [
      {
        heading: "Common Two-Seat Combinations",
        cards: [
          { title: "Baby + toddler", description: "A rear-facing restraint plus a forward-facing harness or rear-facing child restraint." },
          { title: "Twins", description: "Two restraints of the same type - tell us both babies' ages and sizes." },
          { title: "Two young children", description: "Two child seats - tell us each child's age and approximate size." },
        ],
      },
      {
        heading: "Example Booking",
        paragraphs: [
          "2 adults and 2 children (an 8-month-old and a 4-year-old), 2 large suitcases, 2 carry-ons and 1 folded pram. With two restraints fitted, this family may need more than a sedan - enter these details when booking and we'll confirm the vehicle.",
        ],
      },
      {
        heading: "Check Your Vehicle",
        calculator: true,
      },
    ],
    faq: [
      {
        question: "Can two child seats fit in a sedan?",
        answer: "Sometimes, but it depends on the restraints, the number of adults and your luggage. Tell us everything when booking and we'll confirm.",
      },
      FLIGHT_DELAY,
      BOTH_LEGS,
    ],
    related: [L.multiple, L.airportHub, L.airportPram, L.airportLuggage],
  },
  {
    slug: "sydney-airport-transfer-with-baby-and-pram",
    pillar: "Sydney Airport",
    navLabel: "Airport Transfer with Baby & Pram",
    metaTitle: "Sydney Airport Transfer with Baby and Pram | Stroller-Friendly Taxi",
    metaDescription:
      "Sydney Airport transfers with a baby seat and room for your pram or stroller. Tell us your pram type and luggage when booking.",
    eyebrow: "Baby + Pram",
    h1: "Sydney Airport Transfer with Baby and Pram",
    heroDescription:
      "A rear-facing restraint for your baby, room for your pram and your luggage - arranged before you land.",
    image: "airport",
    sections: [
      {
        heading: "Flying with a Baby and Pram",
        paragraphs: [
          "Many airlines let you use your pram to the gate and return it at the aircraft door or at baggage reclaim. Either way, you'll leave the airport with a pram, luggage and a baby who needs a rear-facing restraint.",
          "Tell us your baby's age, the type of pram (compact, full-size, travel system or double) and all your luggage when booking. Prams use boot space, so this affects which vehicle we arrange.",
        ],
      },
      BOOKING_DETAILS,
      {
        heading: "Check Your Vehicle",
        calculator: true,
      },
    ],
    faq: [
      {
        question: "Will a full-size pram fit?",
        answer: "Usually, if we know about it in advance. Tell us the pram type and your luggage when booking.",
      },
      {
        question: "Can I use my travel-system capsule?",
        answer: "Yes. You're welcome to use your own approved restraint - let us know when booking.",
      },
      FLIGHT_DELAY,
    ],
    related: [L.pram, L.airportHub, L.airport2Seats, L.newborn],
  },
  {
    slug: "sydney-airport-family-transfer-large-luggage",
    pillar: "Sydney Airport",
    navLabel: "Airport Transfer with Large Luggage",
    metaTitle: "Sydney Airport Family Transfer with Large Luggage | Child Seats",
    metaDescription:
      "Family airport transfers in Sydney for lots of luggage, child seats and prams. 7-seat vehicles and minibuses available - tell us everything you're bringing.",
    eyebrow: "Large Luggage",
    h1: "Sydney Airport Family Transfer with Large Luggage",
    heroDescription:
      "Long trip, lots of bags, children who need restraints. We'll match the vehicle to your passengers, restraints and luggage.",
    image: "airport",
    sections: [
      {
        heading: "Which Vehicle Does My Family Need?",
        cards: [
          { title: "Sedan", description: "Best for two adults, one child and light luggage." },
          { title: "SUV / Wagon", description: "Best for a family with a child restraint plus a larger pram or more luggage." },
          { title: "7-seat vehicle", description: "Best for larger families or bookings needing multiple child restraints." },
          { title: "Minibus", description: "Best for family groups, multiple children, large amounts of luggage and airport transfers." },
        ],
        paragraphs: [
          "Maximum seating doesn't mean maximum luggage at the same time - when every seat is used, boot space is smaller. Child restraints also change how many seats are usable.",
        ],
      },
      {
        heading: "Work It Out",
        calculator: true,
      },
    ],
    faq: [
      {
        question: "Which vehicle should I book with four suitcases?",
        answer: "It depends on passengers and restraints. A family with four suitcases and child restraints will often need an SUV, 7-seat vehicle or minibus - tell us everything and we'll confirm.",
      },
      {
        question: "Can you carry a portable cot or car seats we've brought?",
        answer: "Yes - list them as oversized items when booking.",
      },
      FLIGHT_DELAY,
    ],
    related: [L.multiple, L.airportHub, L.airport2Seats, L.pram],
  },
  {
    slug: "sydney-airport-to-hotel-with-baby-seat",
    pillar: "Sydney Airport",
    navLabel: "Airport to Hotel with Baby Seat",
    metaTitle: "Sydney Airport to Hotel with Baby Seat | Family Hotel Transfers",
    metaDescription:
      "Book a Sydney Airport to hotel transfer with a baby capsule or child seat arranged for each child. CBD, Darling Harbour, Circular Quay and beyond.",
    eyebrow: "Hotel Transfers",
    h1: "Sydney Airport to Hotel Transfers with Baby Seats",
    heroDescription:
      "Straight from the terminal to your hotel, with child restraints arranged for each child and room for your bags.",
    image: "airport",
    sections: [
      {
        heading: "Popular Hotel Areas",
        list: [
          "Sydney CBD",
          "Darling Harbour and Barangaroo",
          "Circular Quay and The Rocks",
          "Bondi and Coogee",
          "Parramatta",
          "Airport and Mascot hotels",
        ],
      },
      {
        heading: "Booking Your Hotel Transfer",
        paragraphs: [
          "Give us your hotel name and address, flight number, children's ages and approximate sizes, adults and luggage. If your room isn't ready on arrival, tell us whether you need a second trip later - for example to a family attraction.",
          "Many visiting families book their return to the airport at the same time, with the same restraints.",
        ],
      },
    ],
    faq: [
      {
        question: "Can you pick us up from the hotel for our return flight?",
        answer: "Yes. Book the return leg when you book your arrival, or any time before you leave.",
      },
      FLIGHT_DELAY,
      {
        question: "Can we book trips during our stay?",
        answer: "Yes - for example to Taronga Zoo, Darling Harbour or a cruise terminal, with the same child restraints.",
      },
    ],
    related: [L.visiting, L.international, L.airportHub],
  },
];
