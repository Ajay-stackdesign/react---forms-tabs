import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import StripeCheckout from "react-stripe-checkout";

const PaymentInfo = () => {
    const navigate = useNavigate()
    const handleSubmir = () => {
        console.log("aaa")
        navigate('/success')
    }
    function onToken(token) {
        navigate("/success")
    }

    return (
        <div>
            <form onSubmit={handleSubmir}>
                <StripeCheckout
                    shippingAddress
                    token={onToken}
                    currency='inr'
                    amount="500"
                    stripeKey="pk_test_51KEqWUSA8DUXqy38iur5qzJ6E4SjgtKgZxMR3iEs54oeM3sJyhfDe17OrU5nmAItSrMSY2Lzk0uTid4IQcXuwkoY00H9ARHNNi"
                >
                    <button className="btn1">
                        Book Now
                    </button>
                </StripeCheckout>
            </form>
        </div>
    )
}


export default PaymentInfo
