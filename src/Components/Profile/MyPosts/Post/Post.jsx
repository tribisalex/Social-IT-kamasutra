import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i007.fotocdn.net/s119/5d3f27ea7bfab67e/user_xl/2710413368.jpg" alt="Text"/>
            {props.message}
            <div>
    <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;