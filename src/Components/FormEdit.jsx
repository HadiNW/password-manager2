import React, { Component } from 'react';

class FormEdit extends Component {
    render() {
        return (
            <form onSubmit={this.props.editSubmitHandler}>
            <div className="form-group">
              <label className="col-sm-7 col-form-label">Url edit</label>
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter url site"
                  id="url"
                  onChange={this.props.changeHandler}
                  value={this.props.value.url}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 col-form-label">
                Username
              </label>
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your username"
                  id="username"
                  onChange={this.props.changeHandler}
                  value={this.props.value.username}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 col-form-label">
                Password
              </label>
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your password"
                  id="password"
                  onChange={this.props.changeHandler}
                  value={this.props.value.password}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                {
                  this.props.containUpperCase() && this.props.conatinNumber() 
                  && this.props.containLowerCase() && this.props.passLength() && this.props.containSpecialChar()
                  && 
                  <button className="btn btn-info font-weight-bold">
                  Save
                </button>}
                <li className="btn btn-danger font-weight-bold ml-3" onClick={this.props.cancelHandler}>
                  Cancel
                </li>
              </div>
            </div>
          </form>
        );
    }
}

export default FormEdit;