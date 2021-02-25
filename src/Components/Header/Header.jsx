import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
    <img src="https://avatars.mds.yandex.net/get-pdb/1613577/07cd296a-51bb-47a8-a3dd-115792dfa964/s1200" alt="Text"/>
    <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}> Login </NavLink>}

    </div>
  </header>
}

export default Header;