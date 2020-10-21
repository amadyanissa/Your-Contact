export const setEmergencyContact = (contacts: Contact) => ({
  type: "SET_EMERGENCY_CONTACT",
  payload: {
    contacts
  }
})

export const removeEmergencyContact = (contacts: Contact) => ({
  type: "REMOVE_EMERGENCY_CONTACT",
  payload: {
    contacts
  }
})

