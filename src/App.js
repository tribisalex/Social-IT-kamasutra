import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import {Route} from 'react-router-dom';
import Setting from './Components/Setting/Setting';
import Music from './Components/Music/Music';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/usersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer"
import LoginPage from "./Components/Login/Login";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>

                    <Route path='/users'
                           render={() => <UsersContainer />}/>

                    <Route path='/news'
                           component={News}/>

                    <Route path='/music'
                           component={Music}/>

                    <Route path='/setting'
                           component={Setting}/>

                    <Route path='/login'
                           render={() => <LoginPage />}/>
                </div>
            </div>
    )
}

export default App;
