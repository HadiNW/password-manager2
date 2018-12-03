import React, { Component, Fragment } from "react";
import * as moment from 'moment'

class Table extends Component {
  render() {
    return (
      <Fragment>
        <div className="card mt-5" style={{ width: "100%" }}>
          <h5 className="card-header">Data</h5>
          <div className="card-body">
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for Url"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">URL</th>
                      <th scope="col">Username</th>
                      <th scope="col">Password</th>
                      <th scope="col">CreatedAt</th>
                      <th scope="col">UpdatedAt</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.data &&
                      this.props.data.map(url => {
                        return (
                          <tr key={url.id}>
                            <th scope="row">1</th>
                            <td>{url.url}</td>
                            <td>{url.username}</td>
                            <td>{url.password}</td>
                            <td>{moment(url.createdAt).format("MMM Do YY")}</td>
                            <td>{moment(url.updatedAt).format("MMM Do YY")}</td>
                            <td>
                              <button className="btn btn-info" onClick={this.props.editHandler.bind(this, url)}>
                                <i className="fas fa-edit" /> Edit
                              </button>
                              <button className="btn btn-danger ml-3" onClick={this.props.deleteHandler.bind(this, url.id)}>
                                <i className="fas fa-trash" /> delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Table;
