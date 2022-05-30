import React from 'react'
import {Route, withRouter} from "react-router-dom";
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
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
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
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);