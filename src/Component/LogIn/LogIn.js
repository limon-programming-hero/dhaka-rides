import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import './LogIn.css'
import { SignInWithEmail, SignUpWithEmail, GooglePopUpSignIn } from './LoginManager';
import googleImg from '../../images/google.png'
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const noUser = {
        name: '',
        email: '',
        password: '',
        submitFeedback: '',
        confirmPass: ''
    }

    const [user, setUser] = useState(noUser);
    const [HasAccount, SetHasAccount] = useState(false);
    const [isConfirmPass, setIsConfirmPass] = useState(true);
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    // blur hander function
    const handlerBlur = (e) => {
        const userInfo = { ...user };
        if (e.target.name === 'name') {
            userInfo[e.target.name] = e.target.value;
        }
        if (e.target.name === 'email') {
            const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value);
            if (isEmail) userInfo[e.target.name] = e.target.value;
            console.log(isEmail);
        }
        if (e.target.name === 'password') {
            const isLength = e.target.value.length > 6;
            const isNumber = /\d/.test(e.target.value);
            const isPassword = isLength && isNumber;
            if (isPassword) userInfo[e.target.name] = e.target.value;
            console.log(isPassword, isLength, isNumber);
        }
        if (e.target.name === 'confirm-password') {
            user.password === e.target.value ? setIsConfirmPass(true) : setIsConfirmPass(false);
            console.log(user.password, e.target.value)
        }
        setUser(userInfo);
    }
    // submit handler function
    const navigate = useNavigate();
    const handlerSubmit = (e) => {
        if (isConfirmPass && !HasAccount) {
            // console.log('before no account');
            SignUpWithEmail(user.email, user.password)
                .then(res => setLoggedInUser(res));
            user.confirmPass = '';
            // loggedInUser?.email && navigate('/home')
            // console.log('after no account');
        }
        if (isConfirmPass && HasAccount) {
            // console.log('before account');
            SignInWithEmail(user.email, user.password)
                .then(res => setLoggedInUser(res));
            user.confirmPass = '';
            // loggedInUser?.email && navigate('/home')
            // console.log('after account');
        }
        if (!isConfirmPass) {
            // console.log('Confirm password in not same');
            user.confirmPass = 'Confirm password in not same';
        }
        console.log(user);
        e.preventDefault()
    }
    const googleSignIn = () => {
        GooglePopUpSignIn()
            .then(res => {
                setLoggedInUser(res);
                // loggedInUser?.email && navigate('/home')
            });

    }
    useEffect(() => {
        loggedInUser.email && navigate('/home')
    }, [loggedInUser.email])
    return (
        <div className='d-flex justify-content-center'>
            <div>
                <form onSubmit={handlerSubmit} className='loginForm  m-5 rounded-2 p-3' >
                    {HasAccount ? <h5>Log In</h5> : <h5>Create an account</h5>}
                    {!HasAccount && < input onBlur={handlerBlur} name='name' type="text" placeholder='Name' required />}
                    <br />
                    <input onBlur={handlerBlur} name='email' type="email" placeholder='Username or Email' required />
                    <br />
                    <input onBlur={handlerBlur} name='password' type="password" placeholder='Password' required />
                    <br />
                    <input onBlur={handlerBlur} name='confirm-password' type="password" placeholder='confirm Password' required />
                    <br />
                    <input type="submit" value={HasAccount ? "Log in" : "Create an account"} />
                    <p onClick={() => { SetHasAccount(!HasAccount) }} style={{ textAlign: 'center', cursor: 'pointer' }}>{HasAccount ? "Don't have an account?" : "Already has an account?"}</p>
                    {user.confirmPass}
                </form>
                <div >
                    {/* <p className='orBorder'></p> */}
                    <p style={{ textAlign: 'center' }}>or</p>
                    {/* <p className='orBorder'></p> */}

                </div>
                <div className='container d-flex justify-content-center'>
                    <div>
                        <button className='googleButton d-flex justify-content-between' onClick={googleSignIn}><img src={googleImg} alt="" /> Google Sign In</button>
                    </div>
                </div>
                <p className='text-center'>{loggedInUser.submitFeedback}</p>
            </div>
        </div>
    );
};

export default LogIn;