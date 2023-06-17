import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardMinimal from "../CardMinimal/CardMinimal";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

const Payment = () => {
    const {id} = useParams()
    return (
        <div>
            <h2 className="text-3xl text-center uppercase font-semibold">payment</h2>
            <Elements stripe={stripePromise}>
                <CardMinimal id={id} ></CardMinimal>
            </Elements>
        </div>
    );
};

export default Payment;