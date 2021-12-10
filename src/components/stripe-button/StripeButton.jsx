import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import StripeKey from './stripe.js'

const StripeButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = StripeKey
  
 const onToken = token =>{
      console.log(token)
      alert('Payment Successful')
  }
  
  return(
        <StripeCheckout 
            label="Pay now"
            name="E-shop"
            currency="EUR"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is €${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )

}

export default StripeButton
