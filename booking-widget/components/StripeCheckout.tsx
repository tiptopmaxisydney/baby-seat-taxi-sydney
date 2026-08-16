"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/booking-widget/components/StripeCheckOutForm";
import { STRIPE_ACCESS_KEY } from "@/booking-widget/utils/api";

const stripePromise = loadStripe(STRIPE_ACCESS_KEY as string);

const StripeElement = (props: any) => {
  const clientSecret = props.clientSecret;
  const amount = props.amount;

  return (
    <>
      {clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: {
              theme: "stripe",
              variables: {
                colorPrimary: "#f78d1e",
                colorText: "#1d3649",
                colorTextSecondary: "#5b6472",
                colorDanger: "#df1b41",
                fontFamily: "var(--font-body), Roboto, sans-serif",
                borderRadius: "12px",
                spacingUnit: "4px",
              },
              rules: {
                ".Label": {
                  color: "#5b6472",
                  fontWeight: "500",
                  fontSize: "13px",
                },
                ".Input": {
                  border: "1px solid #e2e8f0",
                  boxShadow: "none",
                  padding: "12px",
                },
                ".Input:focus": {
                  border: "1px solid #1d3649",
                  boxShadow: "0 0 0 3px rgba(29,54,73,0.1)",
                },
                ".Tab": {
                  border: "1px solid #e2e8f0",
                  boxShadow: "none",
                },
                ".Tab:hover": {
                  border: "1px solid #f78d1e",
                },
                ".Tab--selected": {
                  border: "1px solid #f78d1e",
                  boxShadow: "0 0 0 3px rgba(247,141,30,0.1)",
                },
              },
            },
          }}
        >
          <CheckoutForm {...props} amount={amount} />
        </Elements>
      )}
    </>
  );
};

export default StripeElement;
