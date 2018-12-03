import React, { Component, Fragment } from "react";
import PasswordManager from "../Components/PasswordManager";
import Table from "../Components/Table";

import { postUrl, deleteUrl, updateUrl } from "../Actions/urlActions";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from 'react-router-dom'

class Home extends Component {
  state = {
    data: {
        url: "",
        username: "",
        password: "",
        uid: this.props.uid
    },   
    isAdd: true
  };

  cancelHandler = () => {
      this.setState({
          ...this.setState,
          isAdd: true,
          data: {
            url: "",
            username: "",
            password: "",
        },
      })
  }


  conatinNumber = () => {
    return /\d/.test(this.state.data.password);
  }

  passLength = () => {
    return this.state.data.password.length >= 6;
  }

  containSpecialChar = () => {
    return /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.state.data.password);
  }

  containLowerCase = () => {
      return (/[a-z]/.test(this.state.data.password));
  }

  containUpperCase = () => {
      return (/[A-Z]/.test(this.state.data.password));
  }

  editHandler = (url) => {
    console.log(url, 'ini url')
    this.setState({
      ...this.state,
      isAdd: false,
      data: {
        url: url.url,
        username: url.username,
        password: url.password,
        id: url.id
      }
    });
  };

  editSubmitHandler = (e) => {
      e.preventDefault()
      this.props.updateUrl(this.state.data)
      this.setState({
        ...this.state,
        data: {
          url: "",
          username: "",
          password: ""
        }
      })
  }

  changeHandler = e => {
      this.setState({
          ...this.state,
          data: {
              ...this.state.data,
              [e.target.id]: e.target.value
          }   
      });
  };

  deleteHandler = id => {
    this.props.deleteUrl(id);
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.postUrl(this.state.data);
    this.setState({
      ...this.state,
      data: {
        url: "",
        username: "",
        password: ""
      }
    });
  };

  render() {
    if(!this.props.isLogin) {
      return <Redirect to='/login'/> 
    }

    let urlsLogedIn = []
    if(this.props.urls && this.props.uid) {
      urlsLogedIn = this.props.urls.filter(url => url.uid == this.props.uid)
    }
    return (     
      <div className="container mt-5">
        <PasswordManager
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
          value={this.state.data}
          isAdd={this.state.isAdd}
          cancelHandler={this.cancelHandler}
          editSubmitHandler={this.editSubmitHandler}
          conatinNumber={this.conatinNumber}
          passLength={this.passLength}
          containSpecialChar={this.containSpecialChar}
          containLowerCase={this.containLowerCase}
          containUpperCase={this.containUpperCase}          
        />
        <Table
          data={urlsLogedIn || null}
          deleteHandler={this.deleteHandler}
          editHandler={this.editHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    urls: state.firestore.ordered.urls,
    isLogin: state.firebase.auth.email,
    uid: state.firebase.auth.uid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postUrl: url => dispatch(postUrl(url)),
    deleteUrl: id => dispatch(deleteUrl(id)),
    updateUrl: (data) => dispatch(updateUrl(data))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "urls" }])
)(Home);
