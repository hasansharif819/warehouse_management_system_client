import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Signup.css';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [agree, setAgree] = useState(false);
      const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if(loading){
        return <Loading></Loading>
    }

    if (user) {
     console.log('user', user);  
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        navigate('/home');
    }


    return (
        <div className='register'>
            <PageTitle title="Sign-up"></PageTitle>
            <h2 style={{ textAlign: 'center' }}>Sign up</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Enter Your Name' />

                <input type="email" name="email" id="" placeholder='Enter your Email' required />

                <input type="password" name="password" id="" placeholder='Enter Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p><Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Sign in</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;