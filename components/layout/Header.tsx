"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaRegEnvelope, FaFacebookF, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import { siteConfig } from "@/lib/siteConfig";
import { servicesLinks, locationsLinks } from "@/lib/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"services" | "locations" | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (key: "services" | "locations") => (event: React.MouseEvent) => {
    event.preventDefault();
    setOpenDropdown((open) => (open === key ? null : key));
  };

  return (
    <>
      <div className="wt-topbar">
        <div className="wt-topbar-inner">
          <div className="wt-topbar-contact">
            <a href={`tel:${siteConfig.phoneIntl}`}>
              <FaPhoneAlt aria-hidden="true" /> {siteConfig.phoneIntlDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              <FaRegEnvelope aria-hidden="true" /> {siteConfig.email}
            </a>
          </div>
          <div className="wt-topbar-socials">
            <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF aria-hidden="true" />
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <header className="wt-header">
        <div className="wt-header-inner">
          <Link href="/" className="wt-logo" onClick={closeMenu}>
            <Image src="/images/baby-seat-taxi-sydney-logo.png" alt={siteConfig.name} width={200} height={39} priority />
          </Link>

          <nav>
            <ul className={menuOpen ? "wt-nav wt-nav-open" : "wt-nav"}>
              <li>
                <Link href="/" onClick={closeMenu}>Home</Link>
              </li>
              <li>
                <Link href="/baby-seat-taxi-company-in-sydney/" onClick={closeMenu}>About Us</Link>
              </li>
              <li className={openDropdown === "services" ? "has-open" : undefined}>
                <a href="#" onClick={toggleDropdown("services")}>
                  Services
                </a>
                <div className="wt-mega">
                  <div className="wt-mega-group">
                    <h4>Services</h4>
                    <ul>
                      {servicesLinks.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} onClick={closeMenu}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li className={openDropdown === "locations" ? "has-open" : undefined}>
                <a href="#" onClick={toggleDropdown("locations")}>
                  Locations
                </a>
                <div className="wt-mega">
                  <div className="wt-mega-group">
                    <h4>Locations</h4>
                    <ul>
                      {locationsLinks.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} onClick={closeMenu}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/baby-seat-taxi-sydney-blog/" onClick={closeMenu}>Blog</Link>
              </li>
              <li>
                <Link href="/faqs/" onClick={closeMenu}>FAQ&apos;s</Link>
              </li>
              <li>
                <Link href="/baby-seat-taxi-sydney-contact-details/" onClick={closeMenu}>Contact Us</Link>
              </li>
            </ul>
          </nav>

          <div className="wt-nav-actions">
            <a href="#wcb-booking-form" className="wt-btn wt-btn-primary" onClick={closeMenu}>
              Book Now
            </a>
            <button
              className="wt-menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
