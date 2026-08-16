import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { siteConfig } from "@/lib/siteConfig";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbLabel: string;
  image?: { src: string; alt: string };
};

export default function ServiceHero({ eyebrow, title, description, breadcrumbLabel, image }: ServiceHeroProps) {
  return (
    <section
      className="wt-page-hero"
      style={
        image
          ? {
              backgroundImage: `linear-gradient(135deg, rgba(18, 35, 46, 0.88) 0%, rgba(29, 54, 73, 0.8) 100%), url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: 340,
            }
          : undefined
      }
    >
      <div className="container">
        <div className="wt-page-hero-inner">
          <div className="wt-breadcrumb">
            <Link href="/">Home</Link> / {breadcrumbLabel}
          </div>
          <div className="wt-hero-eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="wt-page-hero-actions">
            <a href={`tel:${siteConfig.phoneIntl}`} className="wt-btn wt-btn-primary">
              <FaPhoneAlt aria-hidden="true" /> Call Us
            </a>
            <a href="/#wcb-booking-form" className="wt-btn wt-btn-outline-inverted">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
