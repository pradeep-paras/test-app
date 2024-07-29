import React from 'react';
import Icon from './Icon';

// images
import facebook from '../images/icons/facebook.svg';
import instagram from '../images/icons/instagram.svg';
import twitter from '../images/icons/twitter.svg';
import youtube from '../images/icons/youtube.svg';
import twitch from '../images/icons/twitch.png';

// styles
import styles from '../stylecss/footer.module.css'

const Footer = () => {
    const images = [facebook, instagram, twitter, twitch, youtube]

    return(<div className={styles.footer_main}>
        {images.length > 0 && images.map((data) => <Icon image={data}/>)}
        <div className={styles.list_div}>
            <ul className={styles.list}>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
                <li>Cookie preferences</li>
                <li>Corporate information</li>
            </ul>   
            <ul className={styles.list}>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
                <li>Cookie preferences</li>
                <li>Corporate information</li>
            </ul>
        </div>
        <div className={styles.copyright}>
            © <span>Alkye Test</span>
        </div>     
    </div>)
}

export default Footer;