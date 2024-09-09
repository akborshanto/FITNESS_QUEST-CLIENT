import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../AxiosSecure/AxiosSecure";
import useAuth from "../../auth/Auth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const ChekOutForm = ({ IntPrice }) => {
  const axiosSecure = useAxiosSecure();
  const {user}=useAuth()
  //consolelog(IntPrice);
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transcictionId,setTranscictionId] = useState('')

  const stripe = useStripe();
  const elements = useElements();

  /* useEffect usee  */
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: IntPrice })
      .then((data) => {
        //consolelog(data);
      setClientSecret(data.data.clientSecret);
      });
  }, [axiosSecure,IntPrice]);

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
      //consolelog("[error]", error);
      setCardError(error.message);
    } else {
      //consolelog("[PaymentMethod]", paymentMethod);
      setCardError("");
    }
    //consolelog({clientSecret});
    /* confitm */
   // confirm payment
   const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
        card: card,
        billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous'
        }
    }
})

    if (confirmError) {
      //consolelog("confrim errm");
    } else {
      //consolelog("payment intent", paymentIntent);

      if(paymentIntent.status === 'succeeded'){


        setTranscictionId(paymentIntent.transcictionId)

const payment={
  name:user?.displayName,
  email:user?.email,
  price:IntPrice,
  photo:user?.photoURL,
  date:new Date(),
  trasactionId:paymentIntent.id,
 

}
const res=axiosSecure.post('/payment-card',payment)

        toast.success("successfylly Card add ")
      }
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
  
        {cardError && (
          <p className="text-red-500">SORRY ! YOUR PAYMENT DON'T ACCECT</p>
        )}

        {

          transcictionId && <h1 className="text-green-400">{transcictionId}</h1>
        }      <button type="submit" disabled={!stripe } aria-required className=" font-bold btn btn-warning text-white" >
        Pay
      </button>
      </form>
    </div>
  );
};

export default ChekOutForm;
