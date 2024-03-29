import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import { useNavigate } from 'react-router-dom';

export default function PaymentMethodScreen(props) {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if (!shippingAddress.address) {
        navigate('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate('/placeorder');
    };
    return (
        <div>
            <CheckoutSteps step1 step2 step3 ></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div style={{color: '#ff69b4'}}>
                    <h1>Payment Method</h1>
                </div>
                <div>
                    <div style={{color: '#ff69b4'}}>
                        <input 
                            type="radio"
                            id="cash"
                            value="Cash"
                            name="paymentMethod"
                            required=""
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="cash">Cash</label>
                    </div>
                </div>
                <div>
                    <div style={{color: '#ff69b4'}}>
                        <input 
                            type="radio" 
                            id="paypal" 
                            value="PayPal" 
                            name="paymentMethod"
                            required
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="paypal">PayPal</label>
                    </div>
                </div>
                <div>
                    <div style={{color: '#ff69b4'}}>
                        <input 
                            type="radio" 
                            id="stripe" 
                            value="Stripe" 
                            name="paymentMethod"
                            required=""
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="stripe">Stripe</label>
                    </div>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit" style={{color: '#ff69b4'}}>
                        Continue
                    </button>
                </div>
            </form>
        </div>
    )
}