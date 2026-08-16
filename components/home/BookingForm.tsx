"use client";

import { useEffect, useRef } from "react";
import { attachDateTimePickers } from "@/lib/wcbDateTime";
import { attachBookingForm } from "@/lib/wcbBookingForm";
import { wcbConfig } from "@/lib/wcbConfig";

export default function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    // Date pickers must enhance the datetime-local inputs before the form
    // logic wires up validation against them, matching the load order of
    // wcb-datetime.js before wcb-booking-form.js on the live site.
    const detachPickers = attachDateTimePickers(form);
    const detachForm = attachBookingForm(form, wcbConfig);

    return () => {
      detachForm();
      detachPickers();
    };
  }, []);

  return (
    <div className="wcb-booking-widget">
      <div className="wcb-form-hero">
        <h3>Book your baby seat taxi</h3>
        <p>Airport transfers, hospital pickups and family trips covered.</p>
      </div>

      <form id="wcb-booking-form" className="wcb-booking-form" noValidate ref={formRef}>
        <div className="wcb-progress" aria-label="Booking progress">
          <span className="wcb-progress-step active">
            <i>1</i>
            <b>Trip</b>
          </span>
          <span className="wcb-progress-step">
            <i>2</i>
            <b>Details</b>
          </span>
          <span className="wcb-progress-step">
            <i>3</i>
            <b>Contact</b>
          </span>
        </div>

        <div className="wcb-step active" data-step="1">
          <div className="wcb-form-row">
            <label className="wcb-label">
              Trip type
              <span className="wcb-req" aria-hidden="true">*</span>
            </label>
            <div className="wcb-radio-group">
              <label>
                <input type="radio" name="tripType" value="One Way" defaultChecked /> One Way
              </label>
              <label>
                <input type="radio" name="tripType" value="Return" /> Return
              </label>
            </div>
          </div>
          <div className="wcb-form-row">
            <label className="wcb-label" htmlFor="pickupAddress">
              Pickup address
              <span className="wcb-req" aria-hidden="true">*</span>
            </label>
            <input id="pickupAddress" name="pickupAddress" type="text" autoComplete="off" data-wcb-coords="pickup" required />
            <input type="hidden" name="pickupLat" id="pickupLat" />
            <input type="hidden" name="pickupLng" id="pickupLng" />
          </div>
          <div className="wcb-form-row">
            <label className="wcb-label" htmlFor="dropoffAddress">
              Dropoff address
              <span className="wcb-req" aria-hidden="true">*</span>
            </label>
            <input id="dropoffAddress" name="dropoffAddress" type="text" autoComplete="off" data-wcb-coords="dropoff" required />
            <input type="hidden" name="dropoffLat" id="dropoffLat" />
            <input type="hidden" name="dropoffLng" id="dropoffLng" />
          </div>
          <div className="wcb-form-grid">
            <div className="wcb-form-row">
              <label className="wcb-label" htmlFor="onewayDateTime">
                Pickup date and time
                <span className="wcb-req" aria-hidden="true">*</span>
              </label>
              <input id="onewayDateTime" name="onewayDateTime" type="datetime-local" data-wcb-datetime="" required />
            </div>
            <div className="wcb-form-row wcb-return-row" hidden>
              <label className="wcb-label" htmlFor="returnDateTime">
                Return date and time
                <span className="wcb-req" aria-hidden="true">*</span>
              </label>
              <input id="returnDateTime" name="returnDateTime" type="datetime-local" data-wcb-datetime="" />
            </div>
          </div>
        </div>

        <div className="wcb-step" data-step="2">
          <div className="wcb-form-grid">
            <div className="wcb-form-row">
              <label className="wcb-label" htmlFor="seatType">
                Seat type
                <span className="wcb-req" aria-hidden="true">*</span>
              </label>
              <select id="seatType" name="seatType" className="wcb-select" defaultValue="Baby Capsule (Newborn - 12 Months)" required>
                <option value="Baby Capsule (Newborn - 12 Months)">Baby Capsule (Newborn - 12 Months)</option>
                <option value="Child Seat (6 Months - 4 Years)">Child Seat (6 Months - 4 Years)</option>
                <option value="Booster Seat (4 - 7 Years)">Booster Seat (4 - 7 Years)</option>
                <option value="Multiple / Mixed Seats">Multiple / Mixed Seats</option>
              </select>
            </div>
            <div className="wcb-form-row">
              <label className="wcb-label" htmlFor="seatCount">
                Number of seats
                <span className="wcb-req" aria-hidden="true">*</span>
              </label>
              <select id="seatCount" name="seatCount" className="wcb-select" defaultValue="1" required>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="wcb-form-row">
              <label className="wcb-label" htmlFor="passengers">
                Passengers
                <span className="wcb-req" aria-hidden="true">*</span>
              </label>
              <select id="passengers" name="passengers" className="wcb-select" defaultValue="1" required>
                {Array.from({ length: 11 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="wcb-form-row">
            <label className="wcb-label" htmlFor="driverInstructions">
              Driver instructions
              <span className="wcb-optional">(optional)</span>
            </label>
            <textarea id="driverInstructions" name="driverInstructions" rows={4} placeholder="e.g. child's age, specific seat brand, extra luggage or pram" />
          </div>
        </div>

        <div className="wcb-step" data-step="3">
          <div className="wcb-form-grid">
            <div className="wcb-form-row">
              <label className="wcb-label" htmlFor="customerName">
                Your name
                <span className="wcb-req" aria-hidden="true">*</span>
              </label>
              <input id="customerName" name="customerName" type="text" autoComplete="name" required />
            </div>
            <div className="wcb-form-row">
              <label className="wcb-label" htmlFor="customerEmail">
                Email
                <span className="wcb-req" aria-hidden="true">*</span>
              </label>
              <input id="customerEmail" name="customerEmail" type="email" autoComplete="email" required />
            </div>
            <div className="wcb-form-row">
              <label className="wcb-label" htmlFor="customerPhone">
                Phone
                <span className="wcb-req" aria-hidden="true">*</span>
              </label>
              <input id="customerPhone" name="customerPhone" type="tel" inputMode="tel" autoComplete="tel" required />
            </div>
          </div>
          <div className="wcb-form-row">
            <label className="wcb-label" htmlFor="passengerName">
              Passenger name
              <span className="wcb-optional">(optional)</span>
            </label>
            <input id="passengerName" name="passengerName" type="text" />
          </div>
        </div>

        <div className="wcb-step-summary" data-step-summary />
        <div className="wcb-form-feedback" role="status" aria-live="polite" />

        <div className="wcb-form-navigation">
          <button className="wcb-nav-button wcb-nav-back" type="button" data-action="prev">
            Back
          </button>
          <button className="wcb-nav-button wcb-nav-next" type="button" data-action="next">
            Next
          </button>
          <button className="wcb-submit" type="submit">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
}
