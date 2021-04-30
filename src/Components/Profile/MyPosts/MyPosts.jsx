import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea} validate={[required, maxLength10]} placeholder={"Enter your pos"} />
        </div>
        <div>
            <button >Add post</button>
        </div>
    </form>;
}

let AddNewPostReduxForm = reduxForm ({form: "ProfileAddNewPostForm"}) (AddNewPostForm);

const MyPosts = React.memo(props => {
    console.log ("Hi");
    let postElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let NewPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
});

export default MyPosts;