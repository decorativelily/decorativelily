import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function RegisterScreen(props) {
    const navigate = useNavigate();
    const { search } = useLocation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert ('Password and Confirm Password do not match');
        } else {
            dispatch(register(name, email, password));
        }
    };
    useEffect(() => {
            if (userInfo) {
                navigate(redirect);
            }
        }, [props.history, redirect, userInfo]);
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div style={{color: "#ff69b4"}}>
                    <h1>Create Account</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div style={{color: "#ff69b4"}}>
                    <label htmlFor="name">Name</label>
                    <input style={{color: "#ff69b4"}}
                    type="name" 
                    id="name" 
                    placeholder="Enter Name" 
                    required 
                    onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div style={{color: "#ff69b4"}}>
                    <label htmlFor="email">Email Address</label>
                    <input style={{color: "#ff69b4"}}
                    type="email" 
                    id="email" 
                    placeholder="Enter Email Address" 
                    required 
                    onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div style={{color: "#ff69b4"}}>
                    <label htmlFor="password">Password</label>
                    <input style={{color: "#ff69b4"}}
                        type="password" 
                        id="password" 
                        placeholder="Enter Password" 
                        required 
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div style={{color: "#ff69b4"}}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input style={{color: "#ff69b4"}}
                        type="password" 
                        id="confirmPassword" 
                        placeholder="Enter Confirm Password" 
                        required 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit" style={{color: "#ff69b4"}}>
                        Register
                    </button>
                </div>
                <div>
                    <label />
                    <div style={{color: "#ff69b4"}}>
                        Already A User?  
                        <Link to={`/signin?redirect=${redirect}`} style={{color: "#ff69b4"}}> Sign In</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}