import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

// components
import Footer from './Footer';

// images and icons
import logo from '../images/icons/Logo.svg'

// style
import styles from '../stylecss/signup.module.css';

const Signup1 = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const [mobile, setMobile] = useState(window.innerWidth <= 707);

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth <= 707);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const handleInputs = (e) => {
        setEmail(e.target.value)
    }

    const handleEvent = e => {

        // check email validation
        var emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

        if(email == ""){
            alert("email is required")
            debugger
            return;
        }

        // if(!emailValid){
        //     alert("email is invalid")
        // }

        localStorage.setItem("email", email);
        debugger
        return navigate("/signup2")
    }

    return(
    <div className={styles.root_div}>
        <div className={styles.signup_div}>
            <img className={styles.logo} src={logo} />
            <div className={styles.signup_box}>
                <div className={styles.text_box}>
                    <span className={styles.step_text}>STEP 1</span>
                    <span className={styles.message}>Enter your email address to continue</span>
                    <p className={styles.text}>Login to your account. If you don't have one, you will be prompted to create one.</p>
                </div>
                <div className={styles.form_div}>
                    <input 
                        placeholder='Email' 
                        className={styles.email} 
                        name='email' type='text' 
                        value={email}
                        onChange={handleInputs}
                        />
                    {mobile ? (
                    <div className={styles.mobile}>
                        <p>Have an account?</p>
                        <button 
                            className={styles.button}
                            onClick={handleEvent}>Continue</button>
                    </div>
                    ): <button 
                            className={styles.button}
                            onClick={handleEvent}>Continue</button>}
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>)
}

export default Signup1;