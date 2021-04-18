import React from 'react';
import styles from '../Users/Users.module.css';
import userPhoto from '../assets/image/user.jpg';
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
       <div >
                <span>
                <div>
               <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.Photo}/>
               </NavLink>
               </div>
                <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id);
                              }}>
                        Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id);
                              }}>
                        Follow</button>
                }
                    </div>
                    </span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                    </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>"{"user.location.city"}</div>
                    </span>
            </div>)
}

export default User;