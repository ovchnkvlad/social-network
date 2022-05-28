const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
        dialogs: [
            {id: 1, name: 'Dialog#1'},
            {id: 2, name: 'Dialog#2'},
            {id: 3, name: 'Dialog#3'},
            {id: 4, name: 'Dialog#4'},
            {id: 5, name: 'Dialog#5'},
            {id: 6, name: 'Dialog#6'}
        ],
        messages: [
            {id: 1, text: 'Lorem ipsum dolor sit amet.', createdAt: '10.11.2021'},
            {id: 2, text: 'I want to live in a big city', createdAt: '06.09.2021'},
            {id: 3, text: 'Kiev is the capital of Ukraine', createdAt: '15.08.2021'},
            {id: 4, text: 'Lorem ipsum dolor sit.', createdAt: '10.11.2021'},
            {id: 5, text: 'I live in forest now', createdAt: '10.11.2021'},
        ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let currentTime = new Date();
            let currentDateFormat = `${currentTime.getDate()}.${currentTime.getMonth()}.${currentTime.getFullYear()}`;
            let messageID = new Date().getTime();
            let newMessage = {
                id: messageID,
                text: action.text,
                createdAt: currentDateFormat
            };
            return {
                ...state,
                messages:[...state.messages,newMessage]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (text) => ({type: SEND_MESSAGE,text});

export default dialogsReducer;