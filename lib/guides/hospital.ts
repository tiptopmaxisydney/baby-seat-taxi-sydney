import type { GuidePage } from "./types";
import { L } from "./links";

const DISCHARGE_CHECKLIST = [
  "Baby's age (days or weeks) - so a rear-facing restraint is arranged",
  "Number of adults travelling home with baby",
  "Hospital bags, baby bag and any flowers or gifts",
  "Pram or travel system, if you're bringing one",
  "Any other children travelling - with their ages and sizes",
  "Your home address and a mobile number for the day",
];

const NEWBORN_RULE =
  "Babies up to 6 months must use a rear-facing child restraint - in a private car, a taxi or a booked hire vehicle. Tell us your baby's age when booking and a suitable rear-facing restraint is arranged for the trip home.";

type Hospital = {
  slug: string;
  name: string;
  short: string;
  suburb: string;
  maternity: boolean;
  intro: string;
  servedSuburbs: string[];
  notes: string[];
};

const hospitals: Hospital[] = [
  {
    slug: "royal-hospital-for-women-newborn-transfer",
    name: "Royal Hospital for Women",
    short: "Royal Hospital for Women",
    suburb: "Randwick",
    maternity: true,
    intro:
      "The Royal Hospital for Women in Randwick is one of Sydney's specialist maternity hospitals, on the Randwick health campus alongside Prince of Wales Hospital and Sydney Children's Hospital.",
    servedSuburbs: ["Randwick", "Coogee", "Maroubra", "Kensington", "Bondi", "the Eastern Suburbs"],
    notes: [
      "The Randwick campus has several hospitals - confirm the pickup point with your driver.",
      "If your baby is transferring between campus hospitals before going home, let us know so we can plan around it.",
    ],
  },
  {
    slug: "westmead-hospital-baby-capsule-taxi",
    name: "Westmead Hospital",
    short: "Westmead",
    suburb: "Westmead",
    maternity: true,
    intro:
      "Westmead Hospital is one of Western Sydney's major hospitals, with maternity services on the Westmead health precinct alongside The Children's Hospital at Westmead.",
    servedSuburbs: ["Parramatta", "Blacktown", "Merrylands", "Baulkham Hills", "Castle Hill", "the Hills District"],
    notes: [
      "The Westmead precinct is large - tell us which building or entrance you'll be at.",
      "Western Sydney families often travel further home, so allow for the length of the drive when timing feeds.",
    ],
  },
  {
    slug: "westmead-childrens-hospital-taxi-child-seat",
    name: "The Children's Hospital at Westmead",
    short: "Children's Hospital at Westmead",
    suburb: "Westmead",
    maternity: false,
    intro:
      "The Children's Hospital at Westmead is a specialist children's hospital. Families travel here for appointments, admissions and discharges with children of every age - from newborns to teenagers.",
    servedSuburbs: ["Parramatta", "Blacktown", "Penrith", "Liverpool", "the Hills District", "regional visitors arriving via Sydney Airport"],
    notes: [
      "Tell us about any medical equipment, a wheelchair or a child who needs to lie flat - we'll tell you honestly whether we can help or suggest an alternative.",
      "For repeat appointments, you can book regular trips with the same restraint requirements.",
    ],
  },
  {
    slug: "rpa-hospital-newborn-taxi",
    name: "Royal Prince Alfred Hospital",
    short: "RPA",
    suburb: "Camperdown",
    maternity: true,
    intro:
      "Royal Prince Alfred Hospital (RPA) in Camperdown is one of Sydney's busiest hospitals, with a large women's and babies' service for the Inner West and inner city.",
    servedSuburbs: ["Newtown", "Glebe", "Leichhardt", "Marrickville", "Sydney CBD", "the Inner West"],
    notes: [
      "Camperdown streets can be busy - confirm the pickup point with your driver.",
      "Many RPA families live in apartments - mention if you need help with lift or building access at the other end.",
    ],
  },
  {
    slug: "liverpool-hospital-newborn-transfer",
    name: "Liverpool Hospital",
    short: "Liverpool",
    suburb: "Liverpool",
    maternity: true,
    intro:
      "Liverpool Hospital is South West Sydney's major hospital, with maternity services for one of Sydney's fastest-growing regions.",
    servedSuburbs: ["Liverpool", "Casula", "Moorebank", "Prestons", "Edmondson Park", "Fairfield", "Campbelltown"],
    notes: [
      "Liverpool Hospital is undergoing redevelopment - entrances can change, so confirm the pickup point on the day.",
      "Families heading to newer estates should give a full address including any new street names.",
    ],
  },
  {
    slug: "st-george-hospital-baby-capsule-taxi",
    name: "St George Hospital",
    short: "St George",
    suburb: "Kogarah",
    maternity: true,
    intro: "St George Hospital in Kogarah is the main hospital for Sydney's St George and Sutherland Shire areas, including maternity services.",
    servedSuburbs: ["Kogarah", "Hurstville", "Rockdale", "Sans Souci", "Cronulla", "the Sutherland Shire"],
    notes: [
      "Tell us which entrance you'll be leaving from.",
      "Families heading to the Sutherland Shire should allow for traffic on the Princes Highway at peak times.",
    ],
  },
  {
    slug: "northern-beaches-hospital-family-transfer",
    name: "Northern Beaches Hospital",
    short: "Northern Beaches",
    suburb: "Frenchs Forest",
    maternity: true,
    intro: "Northern Beaches Hospital in Frenchs Forest serves families across the Northern Beaches, including maternity services.",
    servedSuburbs: ["Manly", "Dee Why", "Brookvale", "Mona Vale", "Frenchs Forest", "Chatswood"],
    notes: [
      "Northern Beaches roads can be congested in peak periods - allow extra time.",
      "If you're heading somewhere further, such as an airport flight home, tell us when booking.",
    ],
  },
];

function hospitalPage(h: Hospital): GuidePage {
  const isNewborn = h.maternity;
  return {
    slug: h.slug,
    pillar: "Newborn & Hospital",
    navLabel: h.name,
    metaTitle: isNewborn
      ? `${h.name} Newborn Taxi | Baby Capsule Transfer Home`
      : `${h.name} Taxi with Child Seat | Family Transfers`,
    metaDescription: isNewborn
      ? `Pre-book a taxi home from ${h.name}, ${h.suburb}, with a rear-facing restraint arranged for your newborn. Flexible around discharge times.`
      : `Taxi to and from ${h.name} with child restraints arranged for your child's age and size. Appointments, admissions and discharges.`,
    eyebrow: h.suburb,
    h1: isNewborn ? `${h.name} Newborn Transfer with Baby Capsule` : `${h.name} Taxi with Child Seat`,
    heroDescription: isNewborn
      ? `Bringing your baby home from ${h.short}? Pre-book a transfer with a rear-facing restraint arranged and room for your hospital bags.`
      : `Travelling to ${h.name} with your child? Pre-book transport with a restraint arranged for your child's age and size.`,
    image: "hospital",
    sections: [
      {
        heading: `About ${h.name}`,
        paragraphs: [h.intro],
        listIntro: "Families we take home from here often live in:",
        list: h.servedSuburbs,
      },
      {
        heading: isNewborn ? "Your Newborn's First Trip Home" : "Child Restraints for Hospital Trips",
        paragraphs: isNewborn
          ? [NEWBORN_RULE]
          : ["Tell us each child's age and approximate size when booking and we'll arrange an appropriate restraint. You're also welcome to use your own approved restraint."],
      },
      {
        heading: "Booking Checklist",
        list: isNewborn
          ? DISCHARGE_CHECKLIST
          : [
              "Your child's age and approximate size",
              "Appointment or discharge time",
              "Number of adults travelling",
              "Any equipment, bags or pram",
              "Any other children travelling",
            ],
      },
      {
        heading: isNewborn ? "Discharge Timing" : "Appointment Timing",
        paragraphs: [
          isNewborn
            ? "Discharge times often move. Book with your expected time and contact us when you have a firmer time - we'll adjust the booking where we can."
            : "Appointments can run late. Book with your expected finish time and contact us if it changes.",
          ...h.notes,
        ],
      },
    ],
    faq: [
      {
        question: isNewborn ? "Can I book before my baby is born?" : "Can I book return trips for appointments?",
        answer: isNewborn
          ? "Yes. Book with your expected discharge date and update us when you know the time."
          : "Yes. Book both legs together or one at a time.",
      },
      {
        question: "Can I use my own capsule?",
        answer: "Yes. You're welcome to use your own approved restraint - tell us when booking.",
      },
      {
        question: "Can my partner and other children travel too?",
        answer: "Yes. Tell us everyone who's travelling, with ages and sizes for any other children, so we can arrange the right vehicle.",
      },
    ],
    related: [L.newborn, L.capsule, L.seatGuide, L.laws],
  };
}

export const hospitalGuides: GuidePage[] = [
  {
    slug: "newborn-hospital-to-home-taxi-sydney",
    pillar: "Newborn & Hospital",
    navLabel: "Newborn Hospital-to-Home Taxi",
    metaTitle: "Newborn Hospital to Home Taxi Sydney | Baby Capsule Transfer",
    metaDescription:
      "Pre-book your newborn's trip home from a Sydney hospital with a rear-facing restraint arranged. RPA, Westmead, Royal Hospital for Women, Liverpool, St George and more.",
    eyebrow: "Newborn Transfers",
    h1: "Newborn Hospital-to-Home Taxi in Sydney",
    heroDescription:
      "Your baby's first car trip should be one less thing to worry about. Pre-book a transfer home with a rear-facing restraint arranged and room for your hospital bags.",
    image: "hospital",
    officialSources: true,
    sections: [
      {
        heading: "Rear-Facing from Day One",
        paragraphs: [NEWBORN_RULE],
      },
      {
        heading: "What Parents Should Prepare",
        list: DISCHARGE_CHECKLIST,
      },
      {
        heading: "How It Works",
        cards: [
          { title: "Book ahead", description: "Book with your expected discharge date - before the birth if you like." },
          { title: "Update the time", description: "Discharge times move. Contact us when you have a firmer time." },
          { title: "Travel home", description: "Your vehicle arrives with the requested rear-facing restraint for your baby." },
        ],
      },
      {
        heading: "Sydney Hospitals We Cover",
        list: hospitals.filter((h) => h.maternity).map((h) => `${h.name}, ${h.suburb}`),
        paragraphs: ["We also cover other Sydney hospitals and birth centres - just give us the address."],
      },
    ],
    faq: [
      {
        question: "Can a newborn travel in a Sydney taxi?",
        answer: "Yes, in a rear-facing restraint. Tell us your baby's age when booking so one is arranged.",
      },
      {
        question: "Can I book before my baby is born?",
        answer: "Yes. Book with your expected discharge date and update us when you know the time.",
      },
      {
        question: "Can I use my own capsule?",
        answer: "Yes. You're welcome to use your own approved restraint.",
      },
      {
        question: "What about twins?",
        answer: "Request two rear-facing restraints and tell us how many adults are travelling.",
      },
    ],
    related: [
      ...hospitals.map((h) => ({ label: h.name, href: `/${h.slug}/` })),
      L.capsule,
      L.laws,
    ],
  },
  ...hospitals.map(hospitalPage),
];
