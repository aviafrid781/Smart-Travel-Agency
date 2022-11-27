
import { getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'



const Login = () => {

    const { user, setIsLoading, setUser, signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home';
    //googleSign In

    const handleGoogleLogin = () => {
        signInUsingGoogle()

            .then(result => {
                history.push(redirect_url);


            });
    }









    return (
        <div className="login-container">
            <h1>Please login</h1>
            <div>





                <button className="regular-button"
                    onClick={handleGoogleLogin}
                >Google Signin</button>

            </div>


            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />


            </div>




        </div>
    );
};

export default Login;