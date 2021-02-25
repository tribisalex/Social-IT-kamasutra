import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Sidebar.module.css";

const Sidebar = (props) => {

  let sidebarElement = props.state.sidebars.map( fr => <Sidebar friend={fr.friend} />);

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.sidebar}>
          { sidebarElement }
          <div className= {`${s.dialog} ${s.active}`}>
      <NavLink activeClassName={s.activeLink}> {props.friend}</NavLink>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;