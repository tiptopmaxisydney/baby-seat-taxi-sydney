export type BlogSection = { heading?: string; paragraphs: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  image: { src: string; alt: string; width: number; height: number };
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "benefits-of-booking-a-taxi-with-a-baby-seat",
    title: "10 Benefits of Booking a Taxi with a Baby Seat",
    metaTitle: "10 Benefits of Booking a Taxi with a Baby Seat | Baby Seat Taxi Sydney Blog",
    metaDescription:
      "Discover the key benefits of booking a taxi with a professionally fitted baby seat in Sydney, from safety and convenience to peace of mind for parents.",
    excerpt: "A look at why more Sydney families are choosing a baby seat taxi over travelling without a properly fitted child restraint.",
    date: "2026-06-10",
    image: {
      src: "/images/blog-benefits-of-baby-seat-taxi.png",
      alt: "Parent booking a taxi with a baby seat in Sydney",
      width: 1024,
      height: 683,
    },
    sections: [
      {
        paragraphs: [
          "Travelling with a baby or young child in Sydney can be stressful, particularly when it comes to transport. Booking a taxi with a professionally fitted baby seat takes one major worry off the list, and offers a number of practical benefits for parents and carers.",
        ],
      },
      {
        heading: "1. Compliance with Australian Child Restraint Laws",
        paragraphs: [
          "Australian road safety laws require children under a certain age to travel in an approved child restraint. A baby seat taxi ensures the correct capsule, child seat or booster seat is fitted before you set off, so you don't need to worry about compliance.",
        ],
      },
      {
        heading: "2. No Need to Transport Your Own Seat",
        paragraphs: [
          "Carrying a bulky baby capsule or child seat to and from appointments, the airport or a friend's house is not always practical. A baby seat taxi means the correct restraint is already in the vehicle when your driver arrives.",
        ],
      },
      {
        heading: "3. Professionally Fitted, Every Time",
        paragraphs: [
          "Incorrectly fitted child restraints are a common safety concern. Trained drivers check the fitting of the capsule or seat before every trip, giving parents confidence that their child is properly secured.",
        ],
      },
      {
        heading: "4. Ideal for Hospital Discharge",
        paragraphs: [
          "New parents leaving hospital with a newborn often need transport at short notice. A baby seat taxi with a rear-facing capsule ready to go makes the trip home far less stressful.",
        ],
      },
      {
        heading: "5. Convenient for Airport Travel",
        paragraphs: [
          "Juggling luggage, prams and a young child at the airport is challenging enough without also managing a car seat. Airport transfers with a baby seat included simplify the whole journey.",
        ],
      },
      {
        heading: "6. Peace of Mind for Grandparents and Carers",
        paragraphs: [
          "Grandparents or carers who don't own a car seat, or don't want to transfer one between vehicles, can still safely transport children by booking a baby seat taxi.",
        ],
      },
      {
        heading: "7. Suitable for Every Age and Stage",
        paragraphs: [
          "From newborn capsules to booster seats for school-aged children, a good baby seat taxi service can cater for the right restraint at every stage of a child's growth.",
        ],
      },
      {
        heading: "8. Useful for Visiting Families and Tourists",
        paragraphs: [
          "Families visiting Sydney without their own vehicle, or tourists travelling with young children, can book a baby seat taxi rather than sourcing and fitting a car seat themselves.",
        ],
      },
      {
        heading: "9. Flexible for One-Off or Regular Trips",
        paragraphs: [
          "Whether it's a one-off outing or a regular appointment, baby seat taxis can accommodate both pre-booked and, where possible, same-day requests.",
        ],
      },
      {
        heading: "10. Less Stress, More Time with Family",
        paragraphs: [
          "Ultimately, not having to source, fit and transport a car seat yourself means more time and energy for what matters — spending time with your family.",
        ],
      },
    ],
  },
  {
    slug: "do-taxis-need-baby-seats-in-sydney-nsw-laws-explained",
    title: "Do Taxis Need Baby Seats in Sydney? NSW Laws Explained",
    metaTitle: "Do Taxis Need Baby Seats in Sydney? NSW Laws Explained | Baby Seat Taxi Sydney Blog",
    metaDescription:
      "A plain-English explanation of NSW child restraint laws and how they apply when travelling with children in a taxi or hire vehicle in Sydney.",
    excerpt: "A straightforward look at what NSW law says about child restraints in taxis, and what it means for families booking transport in Sydney.",
    date: "2026-06-24",
    image: {
      src: "/images/blog-nsw-baby-seat-laws.png",
      alt: "NSW child restraint laws for taxis explained",
      width: 1024,
      height: 683,
    },
    sections: [
      {
        paragraphs: [
          "Parents and carers travelling with children in Sydney often ask whether taxis are required to provide a baby seat. The short answer is that child restraint requirements in NSW apply to the child, not just to private vehicles, so it is worth understanding how the rules work before you book.",
        ],
      },
      {
        heading: "What NSW Law Says About Child Restraints",
        paragraphs: [
          "Under NSW road rules, children under approximately seven years of age must travel in an approved child restraint suitable for their age and size when travelling in most passenger vehicles, including taxis and hire cars, unless a specific exemption applies.",
        ],
      },
      {
        heading: "Do Standard Taxis Carry Baby Seats?",
        paragraphs: [
          "Not all standard taxis carry baby capsules or child seats as standard equipment. This is why dedicated services like Baby Seat Taxi Sydney exist — to ensure the correct, properly fitted restraint is available for every booking rather than leaving it to chance.",
        ],
      },
      {
        heading: "Choosing the Right Restraint for Your Child's Age",
        paragraphs: [
          "Generally, newborns and infants travel in a rear-facing baby capsule, toddlers and young children move to a forward-facing child seat, and older children use a booster seat until they meet the height requirement to use a normal seatbelt safely.",
        ],
      },
      {
        heading: "What This Means When Booking Transport",
        paragraphs: [
          "When booking a taxi or transport service with a child, it is worth confirming in advance whether a suitable child restraint will be provided and fitted correctly. Providing your child's age and weight when booking helps the service prepare the right seat ahead of time.",
        ],
      },
      {
        paragraphs: [
          "This article is general information only and is not legal advice. For the most current NSW road rules on child restraints, refer to the NSW Government's official transport and road safety resources.",
        ],
      },
    ],
  },
  {
    // Slug intentionally matches the live site's URL (a leftover WordPress
    // demo-post slug that was never updated when the title/content were
    // changed to this hospital-transfer article) so existing links and SEO
    // signals to this URL keep resolving.
    slug: "what-the-martian-can-teach-sales",
    title: "Travelling to Royal Prince Alfred Hospital with a Baby or Young Child",
    metaTitle: "Royal Prince Alfred Hospital Sydney: Travelling with a Baby | Baby Seat Taxi Sydney Blog",
    metaDescription:
      "Practical tips for planning baby seat taxi transport to and from Royal Prince Alfred Hospital in Sydney for maternity visits and appointments.",
    excerpt: "Practical tips for families planning transport to and from Royal Prince Alfred Hospital with a baby capsule or child seat.",
    date: "2026-07-08",
    image: {
      src: "/images/blog-royal-prince-alfred-hospital.png",
      alt: "Royal Prince Alfred Hospital Sydney baby seat taxi transfers",
      width: 1024,
      height: 683,
    },
    sections: [
      {
        paragraphs: [
          "Royal Prince Alfred Hospital in Camperdown is one of Sydney's major hospitals for maternity care, and many new parents rely on it for the birth of their child. Planning safe transport home, with the correct baby capsule ready to go, is an important part of preparing for hospital discharge.",
        ],
      },
      {
        heading: "Planning Your Discharge Trip",
        paragraphs: [
          "Hospital discharge times are not always predictable, so it helps to book your transport with some flexibility in mind. When booking with Baby Seat Taxi Sydney, let us know your expected discharge window and we will do our best to accommodate it.",
        ],
      },
      {
        heading: "Getting the Capsule Right",
        paragraphs: [
          "For newborns leaving Royal Prince Alfred Hospital, a rear-facing baby capsule is generally the appropriate restraint. Our drivers fit and check the capsule before you leave the hospital grounds, so you can focus on your new arrival rather than the logistics.",
        ],
      },
      {
        heading: "Return Visits and Appointments",
        paragraphs: [
          "Beyond the initial discharge trip, many families return to Royal Prince Alfred Hospital for follow-up appointments, specialist visits or check-ups. Booking a baby seat taxi for these trips means you don't need to manage a car seat yourself for occasional hospital visits.",
        ],
      },
      {
        heading: "Travelling with Family or Support People",
        paragraphs: [
          "Our vehicles are generally able to accommodate a support person or family member travelling alongside you and your baby, subject to vehicle capacity, so you don't need to travel alone after your hospital stay.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
