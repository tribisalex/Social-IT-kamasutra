import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: '34'},
                {id: 1, message: 'Its my first post', likesCount: '11'},
                {id: 1, message: 'Hello World', likesCount: '24'}
            ],
            newPostText: 'Chto-to'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Nadya'},
                {id: 2, name: 'Olya'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Eva'},
                {id: 5, name: 'Volodya'},
                {id: 6, name: 'Lena'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 1, message: 'Hello'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Chik'},
                {id: 1, message: 'Chirik'}
            ],
            newMessageBody: '',
            answers: [
                {id: 1, answer: '1232443'},
                {id: 1, answer: 'ghjghkjf'},
                {id: 1, answer: 'Jlkjllkj'},
                {id: 1, answer: 'llgjfk'},
                {id: 1, answer: 'Chirik'}
            ]
        },
        sidebarsP: {
            sidebars: [
                {id: 1, friend: 'Sahmen'},
                {id: 2, friend: 'Armen'},
                {id: 3, friend: 'Alan'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarsP = sidebarReducer(this._state.sidebarsP, action)
        this._callSubscriber(this._state);
    }
}



export default store;