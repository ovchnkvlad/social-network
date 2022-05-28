import React from 'react'
import {Route} from "react-router-dom";
import './scss/app.scss'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContrainer";
import {Switch} from "react-router";
import Login from "./components/Login/Login";

// !TODO Login/Logout page
// !TODO create validation for redux form
// !TODO Paginator component
// !TODO App initialization
// !TODO selector(reselector)
// !TODO
// !TODO
// !TODO

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <main>
                <Switch>
                    <Route path="/profile/:userId?" children={<ProfileContainer/>}/>
                    <Route path="/dialogs" children={<DialogsContainer/>}/>
                    <Route path="/users" children={<UsersContainer/>}/>
                    <Route path="/login" children={<Login/>}/>
                    <Route path="*" children={<NotFound/>}/>
                </Switch>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
