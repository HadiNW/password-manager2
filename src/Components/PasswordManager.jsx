import React, { Component, Fragment } from "react";
import FormAdd from './FormAdd'
import FormEdit from './FormEdit'

class PasswordManager extends Component {
  render() {
    const uppercase = this.props.containUpperCase() ? 'list-group-item list-group-item-success mb-2':'list-group-item list-group-item-danger mb-2'
    const lowercase = this.props.containLowerCase() ?  'list-group-item list-group-item-success mb-2':'list-group-item list-group-item-danger mb-2'
    const special =   this.props.containSpecialChar() ? 'list-group-item list-group-item-success mb-2':'list-group-item list-group-item-danger mb-2'
    const number =    this.props.conatinNumber() ? 'list-group-item list-group-item-success mb-2':'list-group-item list-group-item-danger mb-2'
    const length = this.props.passLength() ? 'list-group-item list-group-item-success mb-2':'list-group-item list-group-item-danger mb-2'
    return (
      <Fragment>
        <div className="card" style={{ width: "100%" }}>
          <h5 className="card-header">Password Manager</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-7">
                <div className="card">
                 {
                     this.props.isAdd ? 
                        <FormAdd   
                        changeHandler={this.props.changeHandler}
                        submitHandler={this.props.submitHandler}
                        value={this.props.value}
                        editHandler={this.props.editHandler}
                        conatinNumber={this.props.conatinNumber}
                        passLength={this.props.passLength}
                        containSpecialChar={this.props.containSpecialChar}
                        containLowerCase={this.props.containLowerCase}
                        containUpperCase={this.props.containUpperCase}  />
                        : 
                        <FormEdit
                        changeHandler={this.props.changeHandler}
                        value={this.props.value}
                        editHandler={this.props.editHandler}
                        cancelHandler={this.props.cancelHandler}
                        editSubmitHandler={this.props.editSubmitHandler}
                        conatinNumber={this.props.conatinNumber}
                        passLength={this.props.passLength}
                        containSpecialChar={this.props.containSpecialChar}
                        containLowerCase={this.props.containLowerCase}
                        containUpperCase={this.props.containUpperCase}
                        />
                 }
                </div>
              </div>
              <div className="col-5">
                <div className="">Password Strength</div>
                <ul className="list-group mt-3">
                  <li className={uppercase}>
                    Password should have 1 uppercase 
                  </li>
                  <li className={lowercase}>
                    Password should contains at least 1 lowercase 
                  </li>
                  <li className={special}>
                    Password should contains at least 1 special 
                  </li>
                  <li className={number}>
                    Password should contains at least 1 number 
                  </li>
                  <li className={length}>
                    Password should contains at least 6 chars 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PasswordManager;
