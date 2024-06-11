import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../AxiosSecure/AxiosSecure";
import useAuth from "../../auth/Auth";
import { useEffect, useState } from "react";
const ChekOutForm = ({ IntPrice }) => {
  const axiosSecure = useAxiosSecure();
  console.log(IntPrice);
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();

  const stripe = useStripe();
  const elements = useElements();

  /* useEffect usee  */
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: IntPrice })
      .then((data) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure,clientSecret]);

  /* hable sumbit */
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }
    console.log(clientSecret);
    /* confitm */
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: "card",
          billing_details: {
            email: user?.email || "ANOSNYMOUS",
            name: user?.displayName || "ANONYMOUS",
          },
        },
      });

    if (confirmError) {
      console.log("confrim errm");
    } else {
      console.log("payment intent", paymentIntent);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            clientSecret,

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
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
        {cardError && (
          <p className="text-red-500">SORRY ! YOUR PAYMENT DON'T ACCECT</p>
        )}
      </form>
    </div>
  );
};

export default ChekOutForm;
