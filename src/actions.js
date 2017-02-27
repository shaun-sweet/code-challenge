export function updateFormData(formData) {
  return {
    type: "UPDATE_FORM_DATA",
    payload: formData
  };
}

export function formSubmitted(){
  return {
    type: "FORM_SUBMITTED",
    payload: true
  }
}

export function postForm(){
  return {
    type: "POSTING_TRUE",
    payload: true
  }
}

export function postingFinished() {
  return {
    type: "POSTING_FALSE",
    payload: false
  }
}

export function formErrorsTrue() {
  return {
    type: "FORM_ERRORS_TRUE",
    payload: true,
  }
}

export function formErrorsFalse() {
  return {
    type: "FORM_ERRORS_FALSE",
    payload: false,
  }
}

export function submitComplete() {
  return {
    type: "SUBMIT_COMPLETE",
    payload: true,
  }
}
