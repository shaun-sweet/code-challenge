import React, { Component } from 'react';
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import { updateFormData, postForm, postingFinished, formSubmitted, submitComplete, formErrorsTrue, formErrorsFalse } from './actions'
var mapStateToProps = function(store) {
  return {
    formData: store.formData,
    formState: store.formState,
  };
}
class App extends Component {

  componentDidMount() {
    this.refs.firstName.focus();
  }

  render() {
    return (
      <div className="App">
        <form>
          <div className="form-group">
            <label ref="firstName" htmlFor="first-name">
              First Name:
              <input onChange={this.handleChange.bind(this)} className="form-control" id="first-name" type="text" name="firstName" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="last-name">
              Last Name:
              <input ref="lastName" onChange={this.handleChange.bind(this)} className="form-control" id="last-name" type="text" name="lastName" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="hobbies">Hobbies:</label>
            <textarea ref="hobbies" onChange={this.handleChange.bind(this)} className="form-control" rows="5" name="hobbies" id="hobbies" placeholder="Please list hobbies comma separated.  Ex: Fishing, programming, dog training"></textarea>
          </div>
          <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-primary">Submit</button>
          {this.props.formState.formSubmitted ? this.props.formState.posting ? this.loading() : this.done() : null}
        </form>
        {this.props.formState.formErrors ? this.showErrors() : null}
        {this.props.formState.submitComplete ? this.showFullName() : null}
      </div>
    );
  }

  showErrors() {
    return (
      <div className="errors" style={{color: "red"}}>Please make sure all fields are complete</div>
    )
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

  // collects the form input as it is typed
  handleChange(e) {
    const name = e.target.name;
    const val = e.target.value;
    this.props.dispatch(updateFormData({
      [name]: val
    }))
  }

  handleSubmit(e) {
    e.preventDefault();
    // if the validation of the form fails, show errors, otherwise continue
    if (this.validateForm()) {
      this.props.dispatch(formErrorsTrue());
      return;
    }else{
      this.props.dispatch((dispatch) => {
        this.parseHobbies();
        dispatch(formErrorsFalse());
        dispatch(formSubmitted());
        dispatch(postForm());
        setTimeout(function() {
          dispatch(postingFinished());
          dispatch(submitComplete());
        }, 2000)
      })
    }
  }

  validateForm() {
    if (this.refs.firstName.value === "" ||
        this.refs.lastName.value === "" ||
        this.refs.hobbies.value === "")
   {
     return true;
    }else{
      return false;
    }
  }

  parseHobbies(){
    var hobbies = "";
    for (var i = 0; i < this.props.formData.hobbies.length; i++) {
      var currChar = this.props.formData.hobbies[i];
      if (currChar !== " ") {
        hobbies += currChar;
      }
    }
    this.props.dispatch(updateFormData({
      hobbies: hobbies.split(",")
    }))
  }
}

module.exports = connect(mapStateToProps)(App);
