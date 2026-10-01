import { FaPhoneAlt, FaRegEnvelope, FaApple, FaGooglePlay } from "react-icons/fa";
import { siteConfig } from "@/lib/siteConfig";
import TiptopBookingWidget from "@/booking-widget/components/TiptopBookingWidget";

export default function Hero() {
  return (
    <section className="wt-hero">
      <div className="container">
        <div className="wt-hero-content">
          <div className="wt-hero-eyebrow">Family transport planned around your children</div>
          <h1>Baby Seat Taxi Sydney - Pre-Booked Taxis with Child Seats</h1>
          <div id="wcb-booking-form">
            <TiptopBookingWidget />
          </div>
          <p>
            Travelling around Sydney with a baby or young child? Pre-book family transport with the child
            restraint requested for your journey. Baby capsules, child restraints and booster seats can be
            arranged for Sydney Airport transfers, hospital pickups, hotel transfers, cruise terminals and
            everyday family travel.
          </p>

          <p className="wt-hero-note">24/7 pre-booked service across Sydney.</p>
          <div className="wt-hero-actions">
            <a href={`tel:${siteConfig.phoneIntl}`} className="wt-btn wt-btn-teal">
              <FaPhoneAlt aria-hidden="true" /> Call {siteConfig.phoneLocalDisplay}
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
