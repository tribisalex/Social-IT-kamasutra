import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./../Dialogs.module.css"; 

const DialogItems = (props) => {
  let path = "/Dialogs/" + props.id;
  return (
    <div className= {`${s.dialog} ${s.active}`}>
      <NavLink activeClassName={s.activeLink} to={path}>{props.name}</NavLink>
    </div>
  )
}


export default DialogItems;