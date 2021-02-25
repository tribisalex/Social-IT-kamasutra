import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    let postElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let NewPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = NewPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>MyPosts</h3>
                <div>
                    <div><textarea placeholder={"Enter your post"} className={s.MessageBlock} ref={NewPostElement}
                                   onChange={onPostChange}
                                   value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add Post</button>
                    </div>
                    <div>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}
export default MyPosts;