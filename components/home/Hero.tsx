import { FaPhoneAlt } from "react-icons/fa";
import { siteConfig } from "@/lib/siteConfig";
import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <section className="wt-hero">
      <div className="container">
        <div className="wt-hero-grid">
          <div>
            <div className="wt-hero-eyebrow">Sydney&apos;s Family Transport Specialist</div>
            <h1>Baby Seat Taxi Sydney - Safe Family Transport with Baby Capsules &amp; Child Seats</h1>
            <p>
              Travel safely with your baby, toddler or young child using Sydney&apos;s trusted baby seat taxi
              service. Professionally fitted baby capsules and child seats for airport transfers, hospital pickups,
              cruise terminals, family outings and everyday travel throughout Sydney.
            </p>
            <div className="wt-hero-actions">
              <a href={`tel:${siteConfig.phoneIntl}`} className="wt-btn wt-btn-primary">
                <FaPhoneAlt aria-hidden="true" /> Call Us
              </a>
            </div>
          </div>
          <div>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
