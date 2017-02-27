export function formData (state={
  firstName: "",
  lastName: "",
  hobbies: "",
}, action) {
  switch (action.type) {
    case "UPDATE_FORM_DATA":
      state = {
        ...state,
        ...action.payload
      }
      break;
  }
  return state;
}

export function formState(state={
  posting: false,
  formSubmitted: false,
  submitComplete: false,
  formErrors: false
}, action) {
  switch (action.type) {
    case "POSTING_TRUE":
      state = {
        ...state,
        posting: true
      };
      break;
    case "POSTING_FALSE":
      state = {
        ...state,
        posting: false
      };
     break;
    case "FORM_SUBMITTED":
      state = {
        ...state,
        formSubmitted: true
      }
      break;
    case "FORM_ERRORS_TRUE":
      state = {
        ...state,
        formErrors: true
      }
      break;
    case "FORM_ERRORS_FALSE":
      state = {
        ...state,
        formErrors: false
      }
      break;
    case "SUBMIT_COMPLETE":
      state = {
        ...state,
        submitComplete: true
      }
      break;
  }
  return state;
}
