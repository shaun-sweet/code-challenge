export function formData (state={}, action) {
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

 export function posting (state=true, action) {
   switch (action.type) {
     case "POSTING_TRUE":
       state = true;
       break;
     case "POSTING_FALSE":
      state = false;
      break;
   }
  return state;
}

export function formSubmitted(state=false, action) {
  switch (action.type) {
    case "FORM_SUBMITTED":
      state = true;
      break;
  }
  return state;
}

export function submitComplete(state=false, action) {
  switch (action.type) {
    case "DISPLAY_NAME":
      state = true;
      break;

  }
  return state;
}
