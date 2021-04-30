import React from 'react';
import s from './Footer.module.css';
import logo from '../assets/image/logo.png';

const Footer = (props) => {
    return <footer className={s.footer}>
        <div>
            <img src={logo} alt="logo"/>
            <span className={s.text}>По всем вопросам писать на tribisalexandr@yandex.ru</span>
        </div>
    </footer>
}

export default Footer;