import React, { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const Payment = () => {
  // todo: provide publishable key
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [price, setPrice] = useState("");

  useEffect(() => {
    const priceValue = queryParams.get("price");
    console.log(priceValue);
    setPrice(priceValue);
  }, [location.search]);

  return (
    <div className="w-full h-full">
      <h1 className="text-center text-sm border-b-2 border-slate-600  px-3 pt-3 pb-1 bg-slate-50">
        Payment Process ...
      </h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
