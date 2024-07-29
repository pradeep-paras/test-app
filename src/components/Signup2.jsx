import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

// components
import Footer from './Footer';

// images and icons
import logo from '../images/icons/Logo.svg';
import eye_off from '../images/icons/eye-off.svg'
import eye_on from '../images/icons/eye-on.svg'

// style
import styles from '../stylecss/signup.module.css';

// login url
const url = "https://untitled-twkmuar27a-uc.a.run.app/api/login/"

const Signup2 = () => {
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setPassword(e.target.value);
    }

    const submitLogin = (e) => {
        e.preventDefault();
        debugger
        const toastId = toast.loading("Loading...")

        var email = localStorage.getItem("email");

        const data = JSON.stringify({
            "username": email,
            "password": password
        });

        fetch(url, {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: data,
        }).then((response) => response.json())
        .then((result) => {
            debugger
            toast.update(toastId, {
                isLoading: false,
                autoClose: 3000,
              });
            console.log(result)
            if(result?.non_field_errors == "Unable to log in with provided credentials.") {
                toast.update(toastId, {
                    render: "Error "+result.non_field_errors,
                    isLoading: false,
                    autoClose: 3000,
                  })
                return navigate('/signup1')
            }

            window.sessionStorage.setItem("token", result.token);
            window.sessionStorage.setItem("user_id", result.user_id);
            debugger
            return navigate("/dashboard")
        })
        .catch((error) => {
            debugger
            toast.update(toastId, {
                render: "Something went wrong!! ",
                isLoading: false,
                autoClose: 3000,
              });
        });
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return(
    <div className={styles.root_div}>
        <ToastContainer />
        <div className={styles.signup_div}>
            <img className={styles.logo} src={logo} />
            <div className={styles.signup_box}>
                <div className={styles.text_box}>
                    <span className={styles.step_text}>STEP 2</span>
                    <span className={styles.message}>Create an account to continue</span>
                    <p className={styles.text}>You'll be able to log in Dingoo with this email address and password</p>
                </div>
                <div className={styles.form_div1}>
                    <label className={styles.label}>Enter a password to create an account with</label>
                    <div className={styles.input_container}>
                        <input 
                            placeholder='Choose a password' 
                            className={styles.email} name='password' 
                            type={passwordVisible ? 'text' : 'password'} 
                            value={password}
                            onChange={handleChange}/>
                        <img src={passwordVisible ?  eye_on : eye_off}
                            style={{wigth: 28, height: 28}}
                            type="button"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    <div className={styles.button_box}>
                        <span>Use a minimum of 6 characters (case sensitive) with at least one number or special charcter.</span>
                        <button 
                            className={styles.password_button}
                            onClick={submitLogin}>Agree & Continue</button>
                    </div>
                </div>
            </div>
            <p className={styles.paragraph}>Dingoo will use your data to personalise and improve your Dingoo experience and to 
                send you information about Dingoo. You can change your communication preferences 
                anytime. We may use your data as described in our Privacy Policy, including sharing
                it with The Test of Companies. By clicking "Agree & Continue", you agree to our 
                Subscriber Agreement and acknowledge that you have read our 
                Privacy Policy and Collection Statement.</p>
        </div>
        <Footer />
    </div>)
}

export default Signup2;