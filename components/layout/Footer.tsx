import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaMapMarkerAlt, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
import { siteConfig } from "@/lib/siteConfig";
import { footerServices, footerLinks, footerLocations } from "@/lib/homeData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="wt-footer">
      <div className="container">
        <div className="wt-final-cta" style={{ marginBottom: 40 }}>
          <h2>Book a Baby Seat Taxi in Sydney Today</h2>
          <p>Whether you need a baby capsule or child seat, our team is ready to help.</p>
          <div className="wt-final-actions">
            <a href={`tel:${siteConfig.phoneIntl}`} className="wt-btn wt-btn-primary">
              Call: {siteConfig.phoneLocalDisplay}
            </a>
          </div>
        </div>

        <div className="wt-footer-grid">
          <div>
            <Image src="/images/Baby-Seat-Finall-Logo.webp" alt={siteConfig.name} width={178} height={35} />
            <p style={{ marginTop: 16, fontSize: "0.88rem" }}>
              Safe, family-friendly baby seat taxi transport across Sydney, with baby capsules and child seats for
              airport transfers, hospital transfers and everyday family travel.
            </p>
            <div className="wt-footer-socials">
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF aria-hidden="true" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <FaYoutube aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3>Services</h3>
            <ul>
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Locations</h3>
            <ul>
              {footerLocations.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Head Office</h3>
            <ul className="wt-footer-contact">
              <li>
                <FaMapMarkerAlt aria-hidden="true" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.locality} {siteConfig.address.region}{" "}
                  {siteConfig.address.postcode}
                </span>
              </li>
              <li>
                <FaPhoneAlt aria-hidden="true" />
                <a href={`tel:${siteConfig.phoneLocal}`}>{siteConfig.phoneLocalDisplay} (LOCALS)</a>
              </li>
              <li>
                <FaPhoneAlt aria-hidden="true" />
                <a href={`tel:${siteConfig.phoneIntl}`}>{siteConfig.phoneIntlDisplay} (INTERNATIONAL)</a>
              </li>
              <li>
                <FaRegEnvelope aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
            </ul>
            <ul style={{ marginTop: 16 }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="wt-footer-disclaimer">
          Disclaimer: Please be aware that the babyseattaxisydney.com.au website, working under {siteConfig.legalName},
          is privately owned and operated as a booking and authorised service provider. In order to provide customers
          with on-time service, we may use vehicles from taxi companies such as 13cabs Maxi Taxi, Premier Maxi Taxi,
          Silver Top Taxi, GM Cabs or any other authorised taxi cabs approved by the local transport company. Baby
          Seat Taxi Sydney operates under {siteConfig.legalName} Pty Ltd.
        </p>
      </div>

      <div className="wt-footer-bottom">
        Copyright © {year} {siteConfig.legalName}.
      </div>
    </footer>
  );
}
