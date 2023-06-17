import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './CardMinimal.css'
import useAxiosSecure from "../../../../Hoooks/useAxiosSecure/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import useUserClasses from "../../../../Hoooks/useUserClasses/useUserClasses";

const CardMinimal = ({ id }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useContext(AuthContext)
    const [transactionId, setTransactionId] = useState("");
    const [getError, setError] = useState('')
    const [processing, setProcessing] = useState(false);

    const [data, refetch] = useUserClasses()
    const selectedClass = data?.find(sc => sc._id === id)

    console.log(selectedClass)
    const { price, _id, availableSeats, students,
        classId } = selectedClass

    useEffect(() => {

        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
        } else {
            setError('')
        }

        setProcessing(true)

        const { paymentIntent, conFirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user ? user.displayName : 'anomyous',
                        email: user ? user.email : 'unknown'
                    },
                },
            },
        );

        if (conFirmError) {
            console.log(conFirmError)
        }

        setProcessing(false)

        if (paymentIntent.status == 'succeeded') {
            setTransactionId(paymentIntent.id)
            const date = new Date();
            const options = { dateStyle: 'full', timeZone: 'UTC' };
            const formattedDate = date.toLocaleDateString('en-US', options);
            const timestamp = date.toISOString();
            axiosSecure.patch(`/payment/${_id}`, { payment: true, date: formattedDate, availableSeats: availableSeats, students: students, timestamp: timestamp, TransactionId: paymentIntent.id })
                .then(data => {
                    console.log(data.data)
                })

            refetch()

            axiosSecure.patch(`/updateClass/${classId}`, { availableSeats: availableSeats, students: students })
                .then(data => {
                    console.log(data.data)
                })
        }

    };

    return (
        <div className="px-4 mt-20">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn-sm bg-sky-500" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
                <p className="text-xl mt-3 text-red-600">{getError}</p>
                <p className="text-xl mt-3 text-green-600">  {transactionId ? `Payment successfully done , transaction id - ${transactionId}` : ' '}</p>
            </form>

        </div>
    );
};

export default CardMinimal;