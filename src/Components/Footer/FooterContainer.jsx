import React from 'react';
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import Footer from "./Footer";

class FooterContainer extends React.Component {
    render() {
        return <Footer {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout})(FooterContainer);