export function gatherFormData(formData) {
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

export function displayName() {
  return {
    type: "DISPLAY_NAME",
    payload: true,
  }
}
