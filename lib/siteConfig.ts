export const siteConfig = {
  name: "Baby Seat Taxi Sydney",
  legalName: "TipTop Transport Solutions",
  url: "https://babyseattaxisydney.com.au",
  description:
    "Book a safe baby seat taxi in Sydney with baby capsules, child seats and booster seats available. Reliable family transport, airport transfers and 24/7 service.",
  phoneLocal: "0296699390",
  phoneLocalDisplay: "(02) 9669 9390",
  phoneIntl: "+61296699390",
  phoneIntlDisplay: "+61 2 9669 9390",
  email: "bookings@babyseattaxisydney.com.au",
  whatsapp: "https://wa.me/+61410025786",
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  social: {
    facebook: "#",
    youtube: "#",
  },
  apps: {
    appStore: "https://apps.apple.com/us/app/tiptop-ride/id6739037902",
    playStore: "https://play.google.com/store/apps/details?id=com.tiptop.ride",
  },
  address: {
    street: "22A/12 Leura Rd",
    locality: "Auburn",
    region: "NSW",
    postcode: "2144",
    country: "AU",
  },
} as const;
