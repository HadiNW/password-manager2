import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {signOut} from '../Actions/authActions'

export class Navbar extends Component {

    signOut = () => {
        this.props.signOut()
        this.checkLogin()
    }

     checkLogin = () => {
        if(!this.props.isLogin) {
          this.props.history.push('/login')
        }
      }

    render() {
        let button = null
        if (!this.props.isLogin) {
            button = (
                <Link to="/login" className="btn btn-secondary my-2 my-sm-0">Login</Link>
            )
        } else {
                button = (
                    <button className="btn btn-info my-2 my-sm-0 ml-3" onClick={this.signOut}>Logout</button>
                ) 
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <div className="container">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>  
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item active ml-2">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                   {button}
                </div>
                </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.firebase.auth.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);