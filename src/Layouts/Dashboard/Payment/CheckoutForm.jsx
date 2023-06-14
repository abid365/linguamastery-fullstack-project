import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      console.log("paymentMethod", paymentMethod);
      setCardError("");
    }
  };

  return (
    <>
      {" "}
      <form
        className="w-3/5 bg-slate-50 p-3 mt-10 mx-auto border border-slate-700 rounded-lg"
        onSubmit={handleSubmit}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm m-4"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-red-400 text-center mt-4">{cardError}</p>
      )}
    </>
  );
};

export default CheckoutForm;
