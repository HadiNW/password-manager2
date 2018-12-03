import React, { Component, Fragment } from 'react';
import {  connect } from 'react-redux'
import {userRegister} from '../Actions/userRegister'

class Register extends Component {
    state = {
        name: '',
        username: '',
        password: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.userRegister(this.state)
        this.props.history.push('/login')
    }

    render() {
        return (
            <Fragment>
                <div className="container mt-5 d-flex justify-content-center">
                    <div className="col-lg-4 m-auto">
                        <div className="card text-center card-form">
                            <div className="card-body">
                                <h3>Register</h3>
                                <p>Please fill out this form to register</p>
                                {/* <h3>{JSON.stringify(this.props.users)}</h3> */}
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="name" placeholder="Name" autoFocus onChange={this.changeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="username" placeholder="Username" onChange={this.changeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.changeHandler}/>
                                        <small id="passwordHelpBlock" className="form-text text-muted text-left">
                                            Your password must be 3-20 characters long.
                                        </small>
                                    </div>
                                    <button className="btn btn-info btn-block font-weight-bold" onClick={this.submitHandler}>Submit</button>
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
        users: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userRegister: (user) => dispatch(userRegister(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);