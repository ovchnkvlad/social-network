import {createStore, combineReducers, applyMiddleware} from 'redux'
import dialogsReducer from "./dialogs-reducer";
import profileReducer from './profile-reducer';
import usersReducers from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducers,
    auth: authReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;