import { FaPhoneAlt, FaRegEnvelope, FaApple, FaGooglePlay } from "react-icons/fa";
import { siteConfig } from "@/lib/siteConfig";
import TiptopBookingWidget from "@/booking-widget/components/TiptopBookingWidget";

export default function Hero() {
  return (
    <section className="wt-hero">
      <div className="container">
        <div className="wt-hero-content">
          <div className="wt-hero-eyebrow">Sydney&apos;s Family Transport Specialist</div>
          <h1>Baby Seat Taxi Sydney - Safe Family Transport with Baby Capsules &amp; Child Seats</h1>
          <div id="wcb-booking-form">
            <TiptopBookingWidget />
          </div>
          <p>
            Travel safely with your baby, toddler or young child using Sydney&apos;s trusted baby seat taxi
            service. We provide professionally fitted baby capsules and child seats for airport transfers,
            hospital pickups, cruise terminals, family outings and everyday travel throughout Sydney.
          </p>

          <p className="wt-hero-note">Available 24 hours a day, 7 days a week.</p>
          <div className="wt-hero-actions">
            <a href={`tel:${siteConfig.phoneIntl}`} className="wt-btn wt-btn-teal">
              <FaPhoneAlt aria-hidden="true" /> Call Us
            </a>
            <a href={`mailto:${siteConfig.email}`} className="wt-btn wt-btn-teal">
              <FaRegEnvelope aria-hidden="true" /> Email Us
            </a>
          </div>

          <p className="wt-hero-note">Book your taxi anytime, anywhere.</p>
          <div className="wt-hero-badges">
            <a href={siteConfig.apps.playStore} className="wt-app-btn" target="_blank" rel="noreferrer">
              <FaGooglePlay aria-hidden="true" style={{ fontSize: "1.3rem" }} />
              <span>
                <span className="sub">Get it on</span>Google Play
              </span>
            </a>
            <a href={siteConfig.apps.appStore} className="wt-app-btn" target="_blank" rel="noreferrer">
              <FaApple aria-hidden="true" style={{ fontSize: "1.4rem" }} />
              <span>
                <span className="sub">Download on the</span>iOS App Store
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
