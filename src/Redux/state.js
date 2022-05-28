import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'How are you?', likeCount: 12, createdAt: '10.11.2021'},
                {id: 2, message: 'It\'s my first post', likeCount: 40, createdAt: '07.11.2021'},
                {id: 3, message: 'I love you Web Storm', likeCount: 0, createdAt: '05.10.2021'},
                {id: 4, message: 'Something else', likeCount: 11, createdAt: '03.10.2021'},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observe) {
        this._callSubscriber = observe;
    },
    dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._callSubscriber(this._state)
    }
}

export default store;
