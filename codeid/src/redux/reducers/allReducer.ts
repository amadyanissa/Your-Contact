type initialStateType = {
  emergency: Contact[]
}
const initialState: initialStateType = {
  emergency: []
};
  
const allReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "SET_EMERGENCY_CONTACT" : 
      const check = state.emergency.filter((el) => {
        return el.id == actions.payload.contacts.id;
      });
      if (check.length == 0) {
        return { ...state, emergency: [...state.emergency, actions.payload] };
      } else {
        return { ...state };
      }
    case "REMOVE_EMERGENCY_CONTACT" : 
      return {
        ...state,
        emergency: state.emergency.filter((el: any) => {
          return el.contacts.id !== actions.payload.contacts.id;
        }),
      };
    default:
      return state;
  }
};
  
export default allReducer;