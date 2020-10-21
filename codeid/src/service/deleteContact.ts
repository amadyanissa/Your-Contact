import axios from "axios"
import {ConfirmDelete, fireText} from "./swalConfirm"

export default function deleteContact(id: string): boolean {
  ConfirmDelete({onSure: async () => {
  axios.delete(`https://simple-contact-crud.herokuapp.com/contact/${id}`)
      .then(() => {
        fireText("successfully deleted", "success")
      })
      .catch((error) => {
        console.error("failed to delete contact", error)
        fireText("looks like there is an error", "error")
      })
  }})
  return true
}