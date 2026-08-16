import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { siteConfig } from "@/lib/siteConfig";

export default function AppSection() {
  return (
    <section className="wt-section">
      <div className="container">
        <div className="wt-app-wrap">
          <div>
            <span className="wt-eyebrow">Book From Your Phone</span>
            <h2>Book a Baby Seat Taxi In Seconds With Our App</h2>
            <p>
              Track your driver, save regular pickup addresses, and manage airport transfers or hospital pickups from
              your phone &ndash; available on iOS and Android.
            </p>
            <div className="wt-app-buttons">
              <a href={siteConfig.apps.appStore} className="wt-app-btn" target="_blank" rel="noreferrer">
                <FaApple aria-hidden="true" style={{ fontSize: "1.4rem" }} />
                <span>
                  <span className="sub">Download on the</span>iOS App Store
                </span>
              </a>
              <a href={siteConfig.apps.playStore} className="wt-app-btn" target="_blank" rel="noreferrer">
                <FaGooglePlay aria-hidden="true" style={{ fontSize: "1.3rem" }} />
                <span>
                  <span className="sub">Get it on</span>Google Play
                </span>
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/images/family-transport-across-sydney.png"
              alt="Family travelling safely in a Baby Seat Taxi Sydney vehicle"
              width={600}
              height={400}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
