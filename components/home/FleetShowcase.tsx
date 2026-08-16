import { FaBaby, FaChild, FaChair, FaUsers } from "react-icons/fa";
import type { IconType } from "react-icons";
import { fleetTypes, type FleetType } from "@/lib/homeData";

const ICONS: Record<FleetType["icon"], IconType> = {
  capsule: FaBaby,
  seat: FaChild,
  booster: FaChair,
  multi: FaUsers,
};

export default function FleetShowcase() {
  return (
    <section className="wt-section on-light">
      <div className="container">
        <span className="wt-eyebrow">Matched To Your Child&apos;s Age</span>
        <h2>A Seat Type for Every Stage</h2>
        <div className="wt-fleet-grid">
          {fleetTypes.map((fleet) => {
            const Icon = ICONS[fleet.icon];
            return (
              <div className="wt-fleet-card" key={fleet.title}>
                <div
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    background: "var(--wt-blue-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                  }}
                >
                  <Icon aria-hidden="true" style={{ fontSize: "2.2rem", color: "var(--wt-blue)" }} />
                </div>
                <h4>{fleet.title}</h4>
                <p>{fleet.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
