import React from 'react';
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: '34'},
        {id: 2, message: 'Its my first post', likesCount: '11'},
        {id: 3, message: 'Hello World', likesCount: '24'}
    ]
};

it ('length of posts should be incremented', () => {
    let action = addPostActionCreator("it-camasutra");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});

it ('message of new post should be correct', () => {
    let action = addPostActionCreator("it-camasutra");
    let newState = profileReducer(state, action);
    expect(newState.posts[3].message).toBe("it-camasutra");
});


it ('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});
