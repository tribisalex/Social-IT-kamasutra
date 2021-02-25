const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Chik'},
        {id: 5, message: 'Chirik'},
        {id: 6, message: 'hlkjhl hkjh h'}
    ],
    answers: [
        {id: 1, answer: '1232443'},
        {id: 2, answer: 'ghjghkjf'},
        {id: 3, answer: 'Jlkjllkj'},
        {id: 4, answer: 'llgjfk'},
        {id: 5, answer: 'Chirik'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            }
    }
}

export const sendMessageAC = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;