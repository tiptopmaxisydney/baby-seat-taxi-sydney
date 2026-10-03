import type { GuidePage } from "./types";
import { L } from "./links";

type Suburb = {
  name: string;
  region: string;
  intro: string;
  hospitals: string[];
  destinations: string[];
  nearby: string[];
  // Trips specific to this suburb - what makes the page different from its neighbours.
  trips: { title: string; description: string }[];
  airportNote: string;
};

const suburbs: Suburb[] = [
  {
    name: "Sydney CBD",
    region: "Inner Sydney",
    intro:
      "The CBD is where most visiting families stay, and where city traffic, one-way streets and hotel drop-off zones make a pre-booked pickup worth having.",
    hospitals: ["Sydney Hospital", "St Vincent's Hospital, Darlinghurst", "Royal Prince Alfred Hospital, Camperdown"],
    destinations: ["Darling Harbour", "SEA LIFE Sydney Aquarium", "Circular Quay", "Royal Botanic Garden", "Hyde Park"],
    nearby: ["The Rocks", "Barangaroo", "Pyrmont", "Ultimo", "Haymarket", "Surry Hills"],
    trips: [
      { title: "Hotel to airport", description: "Family check-outs to T1 or T2/T3, with restraints arranged and room for luggage." },
      { title: "Cruise terminals", description: "Hotel to the Overseas Passenger Terminal at Circular Quay or White Bay Cruise Terminal." },
      { title: "Day trips", description: "From your hotel to Taronga Zoo, Bondi or Sydney Olympic Park and back." },
    ],
    airportNote: "Airport trips from the CBD are short but traffic-dependent - allow extra time on weekday mornings and Friday afternoons.",
  },
  {
    name: "North Sydney",
    region: "Lower North Shore",
    intro: "North Sydney sits just over the Harbour Bridge, close to Royal North Shore Hospital and some of the harbour's best family spots.",
    hospitals: ["Royal North Shore Hospital, St Leonards"],
    destinations: ["Luna Park", "Taronga Zoo", "Wendy Whiteley's Secret Garden", "Bradfield Park"],
    nearby: ["Milsons Point", "Kirribilli", "Neutral Bay", "Cammeray", "Crows Nest", "Waverton"],
    trips: [
      { title: "Royal North Shore", description: "Newborn discharges and paediatric appointments at St Leonards." },
      { title: "Harbour crossings", description: "Across the bridge or tunnel to the CBD, airport or Eastern Suburbs." },
      { title: "Taronga Zoo", description: "A short trip to the zoo with restraints arranged for each child." },
    ],
    airportNote: "Airport trips from North Sydney cross the harbour - allow for bridge and tunnel traffic at peak times.",
  },
  {
    name: "Coogee",
    region: "Eastern Suburbs",
    intro: "Coogee is a beachside family suburb a short drive from the Randwick hospital campus, home to the Royal Hospital for Women and Sydney Children's Hospital.",
    hospitals: ["Royal Hospital for Women, Randwick", "Sydney Children's Hospital, Randwick", "Prince of Wales Hospital, Randwick"],
    destinations: ["Coogee Beach", "Giles Baths", "Wylie's Baths", "Bondi to Coogee coastal walk"],
    nearby: ["South Coogee", "Clovelly", "Randwick", "Maroubra"],
    trips: [
      { title: "Randwick hospitals", description: "Short trips to the Royal Hospital for Women and Sydney Children's Hospital." },
      { title: "Beach holidays", description: "Visiting families staying in Coogee to and from Sydney Airport." },
      { title: "Coastal walk pickups", description: "Collection at the Bondi end of the walk for tired legs and little ones." },
    ],
    airportNote: "Coogee is one of the closer suburbs to Sydney Airport - still allow for traffic on Anzac Parade and around the airport.",
  },
  {
    name: "Randwick",
    region: "Eastern Suburbs",
    intro: "Randwick is home to one of Sydney's main hospital campuses - the Royal Hospital for Women, Sydney Children's Hospital and Prince of Wales Hospital.",
    hospitals: ["Royal Hospital for Women", "Sydney Children's Hospital", "Prince of Wales Hospital"],
    destinations: ["Centennial Park", "Royal Randwick", "Coogee Beach", "UNSW"],
    nearby: ["Kensington", "Kingsford", "Clovelly", "Coogee"],
    trips: [
      { title: "Newborn discharges", description: "Rear-facing restraint arranged for the trip home from the Royal Hospital for Women." },
      { title: "Children's hospital", description: "Appointments and discharges at Sydney Children's Hospital." },
      { title: "Visiting families", description: "Families staying near the hospital campus, to and from the airport." },
    ],
    airportNote: "Randwick to Sydney Airport is a short trip - traffic around the hospital campus and Anzac Parade varies through the day.",
  },
  {
    name: "Mascot",
    region: "South Sydney",
    intro: "Mascot is right next to Sydney Airport, with many airport hotels and apartments used by families on stopovers and early flights.",
    hospitals: ["Prince of Wales Hospital, Randwick", "Royal Prince Alfred Hospital, Camperdown"],
    destinations: ["Sydney Airport", "Sydney Park, St Peters", "Botany Bay"],
    nearby: ["Rosebery", "Botany", "Eastlakes", "Alexandria", "Wolli Creek"],
    trips: [
      { title: "Airport hotel transfers", description: "Short hops between Mascot hotels and T1 or T2/T3 - still with the restraints you need." },
      { title: "Stopover days out", description: "From an airport hotel into the city or to the beach during a layover." },
      { title: "Early flights", description: "Pre-dawn pickups for first-wave departures." },
    ],
    airportNote: "Mascot is the closest suburb to Sydney Airport - short trips are fine to book with child restraints.",
  },
  {
    name: "Maroubra",
    region: "Eastern Suburbs",
    intro: "Maroubra is a family beach suburb in Sydney's south-east, close to the Randwick hospitals and Sydney Airport.",
    hospitals: ["Prince of Wales Hospital, Randwick", "Royal Hospital for Women, Randwick"],
    destinations: ["Maroubra Beach", "Heffron Park", "Mahon Pool"],
    nearby: ["Matraville", "Malabar", "Pagewood", "South Coogee", "Hillsdale"],
    trips: [
      { title: "Hospital trips", description: "To the Randwick campus for appointments and newborn discharges." },
      { title: "Airport", description: "Family flights from T1 and T2/T3." },
      { title: "Visiting family", description: "Grandparents and relatives visiting Maroubra from across Sydney." },
    ],
    airportNote: "Maroubra is close to Sydney Airport - traffic on Anzac Parade and Southern Cross Drive varies.",
  },
  {
    name: "Cronulla",
    region: "Sutherland Shire",
    intro: "Cronulla is the Sutherland Shire's beach hub - a long way from the city by Sydney standards, so families value a pre-booked ride.",
    hospitals: ["Sutherland Hospital, Caringbah", "St George Hospital, Kogarah"],
    destinations: ["Cronulla Beach", "The Esplanade", "Gunnamatta Bay", "Bundeena ferry"],
    nearby: ["Woolooware", "Caringbah", "Burraneer", "Kurnell", "Miranda"],
    trips: [
      { title: "Airport", description: "Shire families to T1 and T2/T3 with luggage and restraints." },
      { title: "St George and Sutherland", description: "Newborn discharges and appointments." },
      { title: "Beach holidays", description: "Visiting families staying in Cronulla to and from the airport or city." },
    ],
    airportNote: "Cronulla to Sydney Airport depends heavily on traffic through the Shire and the Princes Highway or Grand Parade route.",
  },
  {
    name: "Hurstville",
    region: "St George",
    intro: "Hurstville is the St George area's main centre, minutes from St George Hospital in Kogarah.",
    hospitals: ["St George Hospital, Kogarah"],
    destinations: ["Westfield Hurstville", "Oatley Park", "Hurstville Museum & Gallery"],
    nearby: ["Penshurst", "Mortdale", "Kogarah", "Beverly Hills", "Allawah"],
    trips: [
      { title: "St George Hospital", description: "Newborn discharges and paediatric appointments in Kogarah." },
      { title: "Airport", description: "Family flights, including overseas visitors staying with relatives." },
      { title: "City trips", description: "Into the CBD for events and attractions." },
    ],
    airportNote: "Hurstville is south-west of Sydney Airport - allow extra time for traffic on the M5 or King Georges Road.",
  },
  {
    name: "Burwood",
    region: "Inner West",
    intro: "Burwood is a busy Inner West centre with plenty of apartment-living families and visiting relatives.",
    hospitals: ["Concord Repatriation General Hospital", "Royal Prince Alfred Hospital, Camperdown"],
    destinations: ["Westfield Burwood", "Burwood Park", "Sydney Olympic Park"],
    nearby: ["Strathfield", "Croydon", "Enfield", "Concord", "Ashfield"],
    trips: [
      { title: "Visiting relatives", description: "Family members arriving from overseas, from the airport to Burwood." },
      { title: "RPA", description: "Newborn discharges from RPA to the Inner West." },
      { title: "Olympic Park events", description: "Family trips to the Royal Easter Show and events at Sydney Olympic Park." },
    ],
    airportNote: "Burwood to Sydney Airport usually runs via the M8 or local roads - journey times vary with traffic.",
  },
  {
    name: "Strathfield",
    region: "Inner West",
    intro: "Strathfield is a major rail hub in Sydney's inner west, close to Sydney Olympic Park and Homebush.",
    hospitals: ["Concord Repatriation General Hospital", "Westmead Hospital"],
    destinations: ["Sydney Olympic Park", "Bicentennial Park", "Strathfield Plaza"],
    nearby: ["Homebush", "Burwood", "Strathfield South", "Belfield", "North Strathfield"],
    trips: [
      { title: "Station pickups", description: "From Strathfield station when travelling with children and luggage." },
      { title: "Olympic Park", description: "Events, sport and the Royal Easter Show." },
      { title: "Airport", description: "Family flights from T1 and T2/T3." },
    ],
    airportNote: "Strathfield to Sydney Airport usually runs via the M8 - allow extra time at peak periods.",
  },
  {
    name: "Ryde",
    region: "Northern Sydney",
    intro: "Ryde covers established family suburbs between Parramatta River and Macquarie Park.",
    hospitals: ["Ryde Hospital", "Royal North Shore Hospital, St Leonards"],
    destinations: ["Macquarie Centre", "Top Ryde City", "Lane Cove National Park"],
    nearby: ["West Ryde", "Meadowbank", "Putney", "Gladesville", "Eastwood"],
    trips: [
      { title: "Macquarie Park", description: "Shopping and appointments around Macquarie Centre." },
      { title: "Royal North Shore", description: "Newborn discharges and specialist appointments." },
      { title: "Airport", description: "Family flights, including early departures." },
    ],
    airportNote: "Ryde to Sydney Airport crosses the city - allow extra time for traffic.",
  },
  {
    name: "Epping",
    region: "Northern Sydney",
    intro: "Epping is a growing Metro and rail hub in Sydney's north-west, popular with young families.",
    hospitals: ["Ryde Hospital", "Royal North Shore Hospital, St Leonards"],
    destinations: ["Macquarie Centre", "Lane Cove National Park", "Epping Aquatic Centre"],
    nearby: ["Eastwood", "Carlingford", "Cheltenham", "Marsfield", "North Epping"],
    trips: [
      { title: "Airport", description: "Family flights from T1 and T2/T3 with luggage and restraints." },
      { title: "Hospital appointments", description: "To Royal North Shore, Ryde or Westmead." },
      { title: "Visiting relatives", description: "Family arriving from overseas to stay in Epping." },
    ],
    airportNote: "Epping to Sydney Airport typically runs via the M2 and Lane Cove Tunnel or local roads - traffic-dependent.",
  },
  {
    name: "Castle Hill",
    region: "Hills District",
    intro: "Castle Hill is the Hills District's main centre - a long way from Sydney Airport, so families value a pre-booked ride with restraints arranged.",
    hospitals: ["Westmead Hospital", "The Children's Hospital at Westmead", "Norwest Private Hospital, Bella Vista"],
    destinations: ["Castle Towers", "Castle Hill Heritage Park", "Fred Caterson Reserve"],
    nearby: ["Baulkham Hills", "Cherrybrook", "West Pennant Hills", "Glenhaven", "Kellyville"],
    trips: [
      { title: "Airport", description: "Longer airport trips where luggage space and restraints both matter." },
      { title: "Westmead", description: "Newborn discharges and children's hospital appointments." },
      { title: "Western Sydney Airport", description: "Transfers to WSI, with passenger flights from 25 October 2026." },
    ],
    airportNote: "Castle Hill is one of the longer trips to Sydney Airport - allow plenty of time, especially for morning departures.",
  },
  {
    name: "Baulkham Hills",
    region: "Hills District",
    intro: "Baulkham Hills is close to the Westmead hospital precinct, which makes it a common pickup for hospital trips.",
    hospitals: ["Westmead Hospital", "The Children's Hospital at Westmead", "Norwest Private Hospital, Bella Vista"],
    destinations: ["Stockland Baulkham Hills", "Bella Vista Farm", "Parramatta Park"],
    nearby: ["Northmead", "Winston Hills", "Bella Vista", "Castle Hill", "Norwest"],
    trips: [
      { title: "Westmead hospitals", description: "A short trip for newborn discharges and children's appointments." },
      { title: "Airport", description: "Family flights from Sydney Airport or Western Sydney Airport." },
      { title: "Parramatta", description: "Shopping, appointments and events." },
    ],
    airportNote: "Baulkham Hills to Sydney Airport is a longer trip - traffic on the M2/M4 or via Parramatta varies.",
  },
  {
    name: "Kellyville",
    region: "Hills District",
    intro: "Kellyville is one of the north-west's newest family suburbs, with plenty of young children and newer estates.",
    hospitals: ["Westmead Hospital", "Blacktown Hospital", "Norwest Private Hospital, Bella Vista"],
    destinations: ["Rouse Hill Town Centre", "Kellyville Park", "Caddies Creek Reserve"],
    nearby: ["Rouse Hill", "Beaumont Hills", "Kellyville Ridge", "Stanhope Gardens", "Bella Vista"],
    trips: [
      { title: "Newer estates", description: "Give us a full address - including new street names - so your driver finds you first time." },
      { title: "Western Sydney Airport", description: "Transfers to WSI, with passenger flights from 25 October 2026." },
      { title: "Hospital trips", description: "Newborn discharges from Westmead or Blacktown." },
    ],
    airportNote: "Kellyville is a long trip to Sydney Airport - Western Sydney Airport may suit some flights from 25 October 2026.",
  },
  {
    name: "Bella Vista",
    region: "Hills District",
    intro: "Bella Vista combines the Norwest business precinct with family neighbourhoods, close to Norwest Private Hospital.",
    hospitals: ["Norwest Private Hospital", "Westmead Hospital", "Blacktown Hospital"],
    destinations: ["Bella Vista Farm Park", "Norwest Lake", "Castle Towers"],
    nearby: ["Norwest", "Kellyville", "Baulkham Hills", "Glenwood"],
    trips: [
      { title: "Norwest Private", description: "Newborn discharges and appointments." },
      { title: "Airport", description: "Family flights from Sydney Airport or Western Sydney Airport." },
      { title: "Business travellers with family", description: "Norwest hotel stays with children." },
    ],
    airportNote: "Bella Vista to Sydney Airport is a longer trip - allow extra time at peak periods.",
  },
  {
    name: "Hornsby",
    region: "Upper North Shore",
    intro: "Hornsby is the Upper North Shore's main hub, with its own hospital and a busy rail interchange.",
    hospitals: ["Hornsby Ku-ring-gai Hospital", "Royal North Shore Hospital, St Leonards"],
    destinations: ["Westfield Hornsby", "Hornsby Park", "Lisgar Gardens"],
    nearby: ["Waitara", "Asquith", "Normanhurst", "Wahroonga", "Mount Colah"],
    trips: [
      { title: "Hornsby Hospital", description: "Newborn discharges and appointments." },
      { title: "Airport", description: "Longer trips to T1 and T2/T3 with luggage and restraints." },
      { title: "Station pickups", description: "From Hornsby station when travelling with children and bags." },
    ],
    airportNote: "Hornsby is one of the longer trips to Sydney Airport - allow plenty of time.",
  },
  {
    name: "Manly",
    region: "Northern Beaches",
    intro: "Manly is the Northern Beaches' best-known family destination - many visiting families arrive by ferry and leave by road.",
    hospitals: ["Northern Beaches Hospital, Frenchs Forest"],
    destinations: ["Manly Beach", "Shelly Beach", "Manly Corso", "Manly Wharf"],
    nearby: ["Fairlight", "Balgowlah", "Queenscliff", "Freshwater"],
    trips: [
      { title: "Airport", description: "Visiting families in Manly holiday rentals to and from the airport." },
      { title: "Northern Beaches Hospital", description: "Newborn discharges and appointments in Frenchs Forest." },
      { title: "Wharf pickups", description: "From Manly Wharf when you'd rather not carry children and bags uphill." },
    ],
    airportNote: "Manly to Sydney Airport crosses the harbour - allow extra time for traffic on the Spit Bridge and through the city.",
  },
  {
    name: "Dee Why",
    region: "Northern Beaches",
    intro: "Dee Why is a family beach suburb close to Northern Beaches Hospital and Warringah Mall.",
    hospitals: ["Northern Beaches Hospital, Frenchs Forest"],
    destinations: ["Dee Why Beach", "Dee Why Lagoon", "Warringah Mall, Brookvale"],
    nearby: ["Collaroy", "Narraweena", "Cromer", "Curl Curl", "Brookvale"],
    trips: [
      { title: "Northern Beaches Hospital", description: "A short trip for newborn discharges and appointments." },
      { title: "Airport", description: "Longer trips to T1 and T2/T3 - plan around beaches traffic." },
      { title: "Visiting family", description: "Relatives arriving from overseas to stay on the beaches." },
    ],
    airportNote: "Dee Why to Sydney Airport is a long trip across the harbour - allow plenty of time.",
  },
  {
    name: "Bankstown",
    region: "South West Sydney",
    intro: "Bankstown is a major South West Sydney centre with its own hospital and many multi-generational families.",
    hospitals: ["Bankstown-Lidcombe Hospital", "Liverpool Hospital"],
    destinations: ["Bankstown Central", "Paul Keating Park", "Sydney Olympic Park"],
    nearby: ["Yagoona", "Punchbowl", "Revesby", "Condell Park", "Bass Hill"],
    trips: [
      { title: "Bankstown-Lidcombe Hospital", description: "Newborn discharges and appointments." },
      { title: "Family groups", description: "Parents, grandparents and children together - often needs a 7-seat vehicle or minibus." },
      { title: "Airport", description: "Family flights, including relatives arriving from overseas." },
    ],
    airportNote: "Bankstown to Sydney Airport usually runs via the M5 - journey times vary with traffic.",
  },
  {
    name: "Auburn",
    region: "Western Sydney",
    intro: "Auburn is where our office is based, close to Sydney Olympic Park and the Westmead hospital precinct.",
    hospitals: ["Auburn Hospital", "Westmead Hospital"],
    destinations: ["Auburn Botanic Gardens", "Sydney Olympic Park", "Auburn Central"],
    nearby: ["Lidcombe", "Berala", "Regents Park", "Silverwater", "Granville"],
    trips: [
      { title: "Auburn Hospital", description: "Appointments and discharges close to home." },
      { title: "Olympic Park", description: "Family events, sport and the Royal Easter Show." },
      { title: "Airport", description: "Family flights from T1 and T2/T3." },
    ],
    airportNote: "Auburn to Sydney Airport usually runs via the M4 and M8 or the M5 - journey times vary with traffic.",
  },
  {
    name: "Merrylands",
    region: "Western Sydney",
    intro: "Merrylands is a busy Western Sydney family suburb a short drive from the Westmead hospital precinct.",
    hospitals: ["Westmead Hospital", "The Children's Hospital at Westmead", "Auburn Hospital"],
    destinations: ["Stockland Merrylands", "Central Gardens Nature Reserve", "Parramatta Park"],
    nearby: ["Guildford", "Granville", "Holroyd", "South Wentworthville", "Greystanes"],
    trips: [
      { title: "Westmead hospitals", description: "Newborn discharges and children's hospital appointments." },
      { title: "Airport", description: "Sydney Airport, or Western Sydney Airport from 25 October 2026." },
      { title: "Family groups", description: "Larger families travelling together with multiple restraints." },
    ],
    airportNote: "Merrylands to Sydney Airport is traffic-dependent - allow extra time at peak periods.",
  },
  {
    name: "Homebush",
    region: "Inner West",
    intro: "Homebush and Sydney Olympic Park host many of Sydney's biggest family events, from the Royal Easter Show to concerts and sport.",
    hospitals: ["Concord Repatriation General Hospital", "Westmead Hospital"],
    destinations: ["Sydney Olympic Park", "Bicentennial Park", "Sydney Showground", "Accor Stadium"],
    nearby: ["Strathfield", "North Strathfield", "Concord West", "Flemington", "Wentworth Point"],
    trips: [
      { title: "Royal Easter Show", description: "To and from the Showground with children, prams and show bags - book early." },
      { title: "Events", description: "Concerts and sport at Olympic Park - pickup points can change on event days." },
      { title: "Hotel stays", description: "Families staying at Olympic Park hotels, to and from the airport." },
    ],
    airportNote: "Homebush to Sydney Airport usually runs via the M4 and M8 - event days add traffic.",
  },
];

export const suburbSlug = (name: string) => `baby-seat-taxi-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

// Hospital guides (lib/guides/hospital.ts) linked from any suburb that lists that hospital.
const HOSPITAL_GUIDES: [string, string][] = [
  ["Royal Hospital for Women", "/royal-hospital-for-women-newborn-transfer/"],
  ["The Children's Hospital at Westmead", "/westmead-childrens-hospital-taxi-child-seat/"],
  ["Westmead Hospital", "/westmead-hospital-baby-capsule-taxi/"],
  ["Royal Prince Alfred Hospital", "/rpa-hospital-newborn-taxi/"],
  ["Liverpool Hospital", "/liverpool-hospital-newborn-transfer/"],
  ["St George Hospital", "/st-george-hospital-baby-capsule-taxi/"],
  ["Northern Beaches Hospital", "/northern-beaches-hospital-family-transfer/"],
];

// Suburbs with their own page: the guides below plus the CMS location pages, which share the
// same baby-seat-taxi-<suburb> slug pattern.
const CMS_SUBURB_PAGES = ["Parramatta", "Blacktown", "Liverpool", "Penrith", "Campbelltown", "Chatswood", "Bondi"];
const suburbsWithPages = new Set([...suburbs.map((s) => s.name), ...CMS_SUBURB_PAGES]);

// Internal links specific to this suburb - nearby hospital guides and neighbouring suburb pages -
// ahead of the shared airport/newborn/seat guides.
function suburbRelated(s: Suburb) {
  const hospitalLinks = HOSPITAL_GUIDES.filter(([name]) => s.hospitals.some((h) => h.startsWith(name))).map(([name, href]) => ({
    label: `${name} transfers`,
    href,
  }));
  const nearbyLinks = s.nearby
    .filter((n) => suburbsWithPages.has(n))
    .map((n) => ({ label: `Baby Seat Taxi ${n}`, href: `/${suburbSlug(n)}/` }));
  return [...hospitalLinks, ...nearbyLinks, L.airportHub, L.multiple, L.seatGuide, L.areas];
}

const placeName = (value: string) => value.split(",")[0].trim();
// First destination that isn't named after the suburb itself (no "from Coogee to Coogee Beach").
const tripDestination = (s: Suburb) => s.destinations.find((d) => !d.includes(s.name)) ?? s.destinations[0];

function suburbPage(s: Suburb): GuidePage {
  return {
    slug: suburbSlug(s.name),
    pillar: "Locations",
    navLabel: `Baby Seat Taxi ${s.name}`,
    metaTitle: `Baby Seat Taxi ${s.name} | Taxi with Child Seats`,
    metaDescription: `Pre-booked family transport in ${s.name} with baby capsules and child seats arranged at booking. Airport, hospital and family trips.`,
    eyebrow: s.region,
    h1: `Baby Seat Taxi ${s.name}`,
    heroDescription: `Family transport from ${s.name} with the child restraints requested for your journey - airport transfers, hospital trips and days out.`,
    image: "family",
    sections: [
      {
        heading: `Family Transport in ${s.name}`,
        paragraphs: [
          s.intro,
          "Tell us each child's age and approximate size when booking and we'll arrange an appropriate restraint, plus a vehicle with room for your pram and luggage.",
        ],
      },
      { heading: `Common Trips from ${s.name}`, cards: s.trips },
      {
        heading: "Hospitals and Family Destinations Nearby",
        listIntro: "Nearby hospitals:",
        list: s.hospitals,
        paragraphs: [`Family destinations: ${s.destinations.join(", ")}.`],
      },
      {
        heading: "Airport Transfers",
        paragraphs: [s.airportNote, "Add your flight number when booking and book your return transfer at the same time."],
      },
      {
        heading: "Suburbs Nearby",
        paragraphs: [`We also cover ${s.nearby.join(", ")} and surrounding areas.`],
      },
    ],
    // Built from this suburb's own hospitals, destinations and airport note so no two pages share
    // the same FAQ set.
    faq: [
      {
        question: `Do you provide baby seats in ${s.name}?`,
        answer: "Yes. Baby capsules and child seats are arranged at booking - tell us each child's age and approximate size. You're also welcome to use your own approved restraint.",
      },
      {
        question: `Can you take our family to and from ${placeName(s.hospitals[0])}?`,
        answer: `Yes. Pre-book the trip from ${s.name} with a restraint arranged for each child - tell us their ages and approximate sizes, and book the return at the same time if you know your appointment or discharge time.`,
      },
      {
        question: `Can you take us from ${s.name} to ${tripDestination(s)} with child seats?`,
        answer: "Yes. Tell us each child's age and approximate size, how many adults are travelling and whether you'd like a return pickup, and we'll arrange the restraints and a suitable vehicle.",
      },
      {
        question: `How long does it take from ${s.name} to Sydney Airport?`,
        answer: `Travel time varies depending on traffic, pickup location and time of travel. ${s.airportNote} Tell us your flight time when booking.`,
      },
      {
        question: "Can I book more than one child seat?",
        answer: "Yes, subject to vehicle configuration and availability. Tell us about every child, adult and bag when booking.",
      },
    ],
    related: suburbRelated(s),
  };
}

export const suburbGuides: GuidePage[] = suburbs.map(suburbPage);
