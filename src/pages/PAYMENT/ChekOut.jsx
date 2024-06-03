import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import useAxiosSecure from "../../AxiosSecure/AxiosSecure";
const ChekOutForm = ({ price }) => {
  const [clientSecret,setClientSecret]=useState('')
  const [cardError,setCardError]=useState('')
  const [processing,setProcessing]=useState(false)
    const stripe = useStripe();
    const elements = useElements();
  
  const axiosSecure = useAxiosSecure();
//const [clientSecret,setClientSecret]=useStripe('')



useEffect(()=>{

axiosSecure.post('/create-payment-intent',{price})
.then(res=>{

   // console.log(res.data)
   setClientSecret(res.data.clientSecret)
})

},[axiosSecure,price])

console.log(clientSecret)
//   getClientSecret()

// const getClientSecret=async(price)=>{

// const {data}= await axiosSecure.post('create-payment-intent',parseInt(price))

// console.log(data)
// }



  const handleSubmit = async (event) => {

    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because the            re can only ever be one of
    // each type of element.
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
      setCardError(error)
      return
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
/* confir tm method */








  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button  type="submit" disabled={!stripe  || !processing || !clientSecret}>
          Pay
        </button>
        {cardError && <p className="text-red-500" >SORRY ! YOUR PAYMENT DON'T ACCECT</p>}
      </form>
    </div>
  );
};

export default ChekOutForm;
