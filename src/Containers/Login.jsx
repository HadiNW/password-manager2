import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {signIn} from '../Actions/authActions'
import { Redirect } from 'react-router-dom'

export class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    changeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        })
    }

    loginHandler = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
        this.props.history.push('/')
    }

    render() {
        if(this.props.isLogin) {
            return <Redirect to='/'/> 
          }
        return (
            <Fragment>
                <div className="container mt-5 d-flex justify-content-center">
                    <div className="col-lg-4 m-auto">
                        <div className="card text-center card-form">
                            <div className="card-body">
                            {this.props.authError ? <div className="alert alert-danger" role="alert">
                                 {this.props.authError}
                             </div> : null}
                                <h3>Login</h3>
                                <form onSubmit={this.loginHandler}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="username" placeholder="Username" onChange={this.changeHandler} value={this.state.username}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.changeHandler} value={this.state.password}/>
                                        <small id="passwordHelpBlock" className="form-text text-muted text-left">
                                            Your password must be 3-20 characters long.
                                        </small>
                                    </div>
                                    <button className="btn btn-info btn-block font-weight-bold" onClick={this.loginHandler}>Submit</button>
                                </form>
                            </div>
                        </div>
		            </div>
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        isLogin: state.firebase.auth.email
    }
}
const mapDispatchToprops = (dispatch) => {
    return {
        signIn: (credential) => dispatch(signIn(credential))
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(Login);