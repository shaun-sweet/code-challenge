import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { gatherFormData, postForm, postingFinished, formSubmitted, displayName } from './actions'
var mapStateToProps = function(store) {
  return {
    formData: store.formData,
    posting: store.posting,
    formSubmitted: store.formSubmitted,
    display: store.submitComplete
  };
}
class App extends Component {
  render() {

    return (
      <div className="App">
        <form>
          <div className="form-group">
            <label htmlFor="first-name">
              First Name:
              <input onChange={this.handleChange.bind(this)} className="form-control" id="first-name" type="text" name="firstName" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="last-name">
              Last Name:
              <input onChange={this.handleChange.bind(this)} className="form-control" id="last-name" type="text" name="lastName" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="hobbies">Hobbies:</label>
            <textarea onChange={this.handleChange.bind(this)} className="form-control" rows="5" name="hobbies" id="hobbies" placeholder="Please list hobbies comma separated.  Ex: Fishing, programming, dog training"></textarea>
          </div>
          <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-primary">Submit</button>
          {this.props.formSubmitted ? this.props.posting ? this.loading() : this.done() : null}
        </form>
        {this.props.display ? this.showFullName() : null}
      </div>
    );
  }

  showFullName() {
    return (
      <textarea id="display-name" rows="3" style={{marginTop: "2em", border: "none"}}>
        {this.props.formData.firstName + " " + this.props.formData.lastName}
      </textarea>
    )
  }

  loading() {
    return <p>Loading...</p>;
  }

  done() {
    return <p>Done !</p>;
  }

  handleChange(e) {
    const name = e.target.name;
    const val = e.target.value;
    this.props.dispatch(gatherFormData({
      [name]: val
    }))
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch((dispatch) => {
      dispatch(formSubmitted())
      dispatch(postForm());
      setTimeout(function() {
        dispatch(postingFinished());
        dispatch(displayName());
      }, 2000)
    })
  }
}

module.exports = connect(mapStateToProps)(App);
