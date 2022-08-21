import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SigninScreen(props) {
    const navigate = useNavigate();
    const { search } = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
        };
    useEffect(() => {
            if (userInfo) {
                navigate(redirect);
            }
        }, [props.history, redirect, userInfo]);
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div style={{color: '#ff69b4'}}>
                    <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div style={{color: '#ff69b4'}}>
                    <label htmlFor="email">Email Address</label>
                    <input style={{color: "#ff69b4"}}
                    type="email" 
                    id="email" 
                    placeholder="Enter Email Address" 
                    required 
                    onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div style={{color: '#ff69b4'}}>
                    <label htmlFor="password">Password</label>
                    <input style={{color: "#ff69b4"}}
                        type="password" 
                        id="password" 
                        placeholder="Enter Password" 
                        required 
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit" style={{color: '#ff69b4'}}>
                        Sign In
                    </button>
                </div>
                <div>
                    <label />
                    <div style={{color: '#ff69b4'}}>
                        New User?{' '}
                        <Link to={`/register?redirect=${redirect}`} style={{color: '#ff69b4'}}>
                            Create Account
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}