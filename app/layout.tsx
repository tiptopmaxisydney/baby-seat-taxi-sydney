import type { Metadata, Viewport } from "next";
import { Poppins, Roboto } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import "@/booking-widget/booking-widget.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCta from "@/components/layout/StickyCta";
import AttributionTracker from "@/components/AttributionTracker";
import { siteConfig } from "@/lib/siteConfig";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Baby Seat Taxi Sydney | Safe Family Transport with Child Seats",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: "/images/cropped-baby-icon-150x150.webp",
    shortcut: "/images/cropped-baby-icon-150x150.webp",
    apple: "/images/cropped-baby-icon-150x150.webp",
  },
  openGraph: {
    title: "Baby Seat Taxi Sydney | Book Maxi Taxi with Baby Seat",
    description:
      "Safe, reliable baby seat taxi in Sydney. Capsule, convertible & booster seats available. Airport, suburbs & CBD transfers. Book online or call now.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1d3649",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "Organization"],
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phoneIntl,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postcode,
    addressCountry: siteConfig.address.country,
  },
  areaServed: { "@type": "City", name: "Sydney" },
  sameAs: [] as string[],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "en-AU",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${poppins.variable} ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body id="top">
        <AntdRegistry>
          <AttributionTracker />
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyCta />
        </AntdRegistry>
      </body>
    </html>
  );
}
