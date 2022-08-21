import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import { useNavigate } from 'react-router-dom';

export default function ShippingAddressScreen(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const navigate = useNavigate();
    const { userInfo } = userSignin;
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    /*const [lat, setLat] = useState(shippingAddress.lat);
    const [lng, setLng] = useState(shippingAddress.lng);
    const userAddressMap = useSelector((state) => state.userAddressMap);
    const { address: addressMap } = userAddressMap;*/
    if (!userInfo) {
        navigate('/signin');
    }
    const [fullName, setFullName] = useState(shippingAddress.fullName || '');
    const [address, setAddress] = useState(shippingAddress.address || '');
    const [city, setCity] = useState(shippingAddress.city || '');
    const [state, setState] = useState(shippingAddress.state || '');
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
    const [country, setCountry] = useState(shippingAddress.country || '');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        /*const newLat = addressMap ? addressMap.lat : lat;
        const newLng = addressMap ? addressMap.lng : lng;
        if (addressMap) {
            setLat(addressMap.lat);
            setLng(addressMap.lng);
        }
        let moveOn = true;
        if (!newLat || !newLng) {
            moveOn = window.confirm(
                'You Did Not Set Your Location On Map. Continue?'
            );
        }
        if (moveOn) {
        dispatch(
            saveShippingAddress({ 
                fullName, 
                address, 
                city, 
                state, 
                postalCode, 
                country,
                lat: newLat,
                lng: newLng, 
            })
    );
    navigate('/payment');
};
const chooseOnMap = () => {*/
    dispatch(saveShippingAddress({
        fullName,
        address,
        city,
        state,
        postalCode,
        country,
        //lat,
        //lng,
    }))
    navigate('/payment');
};
    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div style={{color: '#ff69b4'}}>
                    <h1>Shipping Address</h1>
                </div>
                <div style={{color: '#ff69b4'}}>
                    <label htmlFor="fullName">Full Name</label>
                    <input style={{color: "#ff69b4"}}
                        type="text"
                        id="fullName"
                        placeholder="Enter Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    ></input>
                </div>
                <div style={{color: '#ff69b4'}}>
                    <label htmlFor="address">Address</label>
                    <input style={{color: "#ff69b4"}}
                        type="text"
                        id="address"
                        placeholder="Enter Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    ></input>
                </div>
                <div style={{color: '#ff69b4'}}>
                    <label htmlFor="city">City</label>
                    <input style={{color: "#ff69b4"}}
                        type="text"
                        id="city"
                        placeholder="Enter City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    ></input>
                </div>
                <div style={{color: '#ff69b4'}}>
                    <label htmlFor="state">State</label>
                    <input style={{color: "#ff69b4"}}
                        type="text"
                        id="state"
                        placeholder="Enter State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                    ></input>
                </div>
                <div style={{color: '#ff69b4'}}>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input style={{color: "#ff69b4"}}
                        type="text"
                        id="postalcode"
                        placeholder="Enter Postal Code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                    ></input>
                </div>
                <div style={{color: '#ff69b4'}}>
                    <label htmlFor="country">Country</label>
                    <input style={{color: "#ff69b4"}}
                        type="text"
                        id="country"
                        placeholder="Enter Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit" style={{color: '#ff69b4'}}>
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
}

/*
<div>
    <label htmlFor="chooseOnMap">Location</label>
    <button type="button" onClick={chooseOnMap}>
    Choose On Map
    </button>
</div>*/