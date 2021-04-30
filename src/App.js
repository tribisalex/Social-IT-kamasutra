import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import {Route, withRouter} from 'react-router-dom';
import Setting from './Components/Setting/Setting';
import Music from './Components/Music/Music';
import UsersContainer from "./Components/Users/usersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer"
import LoginPage from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import FooterContainer from "./Components/Footer/FooterContainer";
import Sidebar from "./Components/Sidebar/Sidebar";

const DialogsContainer = React.lazy(() => import ('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import ('./Components/Profile/ProfileContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>

                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/news'
                           component={News}/>

                    <Route path='/music'
                           component={Music}/>

                    <Route path='/setting'
                           component={Setting}/>

                    <Route path='/login'
                           render={() => <LoginPage/>}/>
                </div>
                <Sidebar/>
                <FooterContainer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
