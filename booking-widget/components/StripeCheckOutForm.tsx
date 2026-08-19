"use client";

import { useBookingContext } from "@/booking-widget/context/Provider";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { Modal } from "antd";
import { useEffect, useState } from "react";

const CheckoutForm = ({ amount, onPaymentSuccess, isModalOpen, onClose, onCancel }: any) => {
  const { Toast } = useBookingContext();
  const stripe = useStripe();
  const elements = useElements();
  const [, setMessage] = useState<string | null>(null);
  const [stripeLoading, setStripeLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setStripeLoading(true);

      if (!stripe || !elements) {
        return;
      }

      const { error, paymentIntent }: any = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Payment methods that require an off-page step (3D Secure, etc.)
          // bounce the browser back here after confirmation — send them to the
          // thank-you page instead of back to the booking widget's own URL,
          // which just left the raw payment_intent query params sitting unused.
          return_url: `${window.location.origin}/thank-you`,
        },
      });

      if (error) {
        Toast.error(error?.message);
      } else if (paymentIntent?.status === "succeeded") {
        onPaymentSuccess();
      }
    } catch (error1: any) {
      setStripeLoading(false);
    } finally {
      setStripeLoading(false);
    }
  };

  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  return (
    <Modal
      title={
        <div className="text-center pt-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fdf1e1] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#c9720a]">
            Secure checkout
          </span>
          <h2 className="mt-3 mb-0 text-lg font-semibold">Complete your payment</h2>
        </div>
      }
      open={isModalOpen}
      onCancel={onClose}
      footer={null}
      closable={false}
      closeIcon={<></>}
      centered
      styles={{ content: { borderRadius: 22 } }}
    >
      <form onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <button
          type="submit"
          disabled={!stripe || !elements || stripeLoading}
          className="mt-4 w-full rounded-full bg-[#f78d1e] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c9720a] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#f78d1e]"
        >
          {stripeLoading ? "Processing..." : `Pay $${Number(amount || 0)?.toFixed(2)}`}
        </button>
        <button
          type="button"
          onClick={() => onCancel()}
          className="mt-3 w-full rounded-full px-6 py-3 text-sm font-semibold border border-[#1d3649] text-[#1d3649] transition-colors hover:bg-[#1d3649]/5"
        >
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default CheckoutForm;
