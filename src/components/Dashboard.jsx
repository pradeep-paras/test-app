import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

// components
import Footer from './Footer';
import ProductInfo from './ProductInfo';

// styles
import styles from '../stylecss/signup.module.css';
import dashboard_styles from '../stylecss/dashboard.module.css';

// images and icons
import logo from '../images/icons/Logo_white.svg'

const Dashboard = () => {
    const [photography, setPhotography] = useState([])
    const [learning, setLearning] = useState([])
    const navigate = useNavigate();
    
    useEffect(() => {
        let token = window.sessionStorage.getItem('token');
        if (token) {
			navigate('/dashboard')
		}
		else {
			navigate('/signup1')
		}
    }, [])

    useEffect(() => {
        let token = window.sessionStorage.getItem('token');
        const toastId = toast.loading("Loading...")

        // get customers
        fetch("https://untitled-twkmuar27a-uc.a.run.app/api/customer-list/", {
            method: "GET",
            headers: {
                "Authorization": "Token " + token
            },
        })
        .then((response) => response.text())
        .then((result) => {
            toast.update(toastId, {
                isLoading: false,
                autoClose: 10,
              });
            console.log(result)
        })
        .catch((error) => {
            toast.update(toastId, {
                render: "Something went wrong!! ",
                isLoading: false,
                autoClose: 10,
              });
        });

    }, [])

    useEffect(() => {
        let token = window.sessionStorage.getItem('token');

        // get articles
        fetch("https://untitled-twkmuar27a-uc.a.run.app/api", {
            method: "GET",
            headers: {
                "Authorization": "Token " + token
                }
            })
        .then((response) => response.json())
        .then((result) => {
            // debugger
            const photography = result.filter(data => data.prompt == 'Photography')
            const learning = result.filter(data => data.prompt == "Learning")
            
            // set products based on prompt
            setLearning(learning)
            setPhotography(photography)

        })
        .catch((error) => {
            setPhotography('')
            setLearning('')
        });
    }, [])


    return(<>
    <div className={dashboard_styles.main}>
        <img className={styles.logo} src={logo} />
        <span className={dashboard_styles.welcome}>Welcome <span>Text</span></span>
        <div className={dashboard_styles.greet}>Hope you having a good day!</div>
        <div className={dashboard_styles.products_div}>
            <h1>Photography</h1>
            <ProductInfo products={photography} />
        </div>

        <div className={dashboard_styles.products_div}>
            <h1>Learning</h1>
            <ProductInfo products={learning} />
        </div>
        </div>
        <Footer />
    </>);
}

export default Dashboard;