// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function ContactListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.LIST_CONTACT_SUCCESS:
      return { ...state, listContact: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}