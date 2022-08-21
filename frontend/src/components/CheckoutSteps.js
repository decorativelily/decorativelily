import React from 'react';

export default function CheckoutSteps(props) {
    return (
        <div className="row checkout-steps">
            <div className={props.step1 ? 'active': ''} style={{color: '#ff69b4'}}>Sign In</div>
            <div className={props.step2 ? 'active': ''} style={{color: '#ff69b4'}}>Shipping</div>
            <div className={props.step3 ? 'active': ''} style={{color: '#ff69b4'}}>Payment</div>
            <div className={props.step4 ? 'active': ''} style={{color: '#ff69b4'}}>Place Order</div>
        </div>
    );
}