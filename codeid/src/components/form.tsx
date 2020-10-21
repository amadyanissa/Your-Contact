import style from "../../styles/ContactDetail.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import {ButtonEdit, ButtonRed} from "../../src/components/button"
import {openToast, fireText } from "../../src/service/swalConfirm"
interface IForm {
    info?: Contact
    onClickCancel?: () => void
  }
  export default function Form (props: IForm){
    const [formState, setFormState] = useState<Contact>()
    const Router = useRouter()
    useEffect(() => {
      if(props.info){
        setFormState({...formState, ...props.info})
      }
    },[])
    const submit =(e) => {
      e.preventDefault()
      const dataForm = {
        firstName: formState.firstName,
        lastName: formState.lastName,
        age: formState.age,
        photo: formState.photo
      }
      if(props.info){
        axios.put(`https://simple-contact-crud.herokuapp.com/contact/${props.info?.id}`, dataForm)
        .then(() => {
          if(props.info){
            openToast("success", "loading.......")
            setTimeout(() => {
              window.location.reload(false)
            },3000)
          }else{
            Router.push("/")
          }
        })
        .catch((error) => {
          console.error(error)
          fireText("looks like something went wrong", "error")
        })
      }else{
        axios.post(`https://simple-contact-crud.herokuapp.com/contact`, dataForm)
        .then(() => {
          if(props.info){
            window.location.reload(false)
          }else{
            Router.push("/")
          }
        })
        .catch((error) => {
          console.error(error)
          fireText("looks like something went wrong", "error")
        })
      }
    }
    return (
      <form onSubmit={submit}>
        <div className={style.inputGroup}>
          <label htmlFor={"firstName_edit"}>First Name </label>
          <input
          onChange={(e) => {
            setFormState({...formState, firstName: e.target.value})
          }}
          required name={"firstName_edit"} id={"firstName_edit"} minLength={3} value={formState?.firstName} ></input>
        </div>
        <div className={style.inputGroup}>
          <label htmlFor={"lastName_edit"}>Last Name</label>
          <input 
          onChange={(e) => {
            setFormState({...formState, lastName: e.target.value})
          }}
          required name={"lastName_edit"} id={"lastName_edit"} minLength={3} value={formState?.lastName} ></input>
        </div>
        <div className={style.inputGroup}>
          <label htmlFor={"age_edit"}>Age</label>
          <input
          type="number"
          onChange={(e) => {
            setFormState({...formState, age: Number(e.target.value)})
          }}
          required value={formState?.age}
          name={"age_edit"} id={"age_edit"}
          ></input>
        </div>
        <div className={style.inputGroup}>
          <label htmlFor={"avatar_edit"}>Avatar URL</label>
          <input 
          name={"avatar_edit"} id={"avatar_edit"}
          onChange={(e) => {
            setFormState({...formState, photo: e.target.value})
          }}
          value={formState?.photo}></input>
        </div>
        <div className={style.editAndDelete}>
          <div className={style.postEdit}>
            <ButtonEdit confirm>
              Confirm
            </ButtonEdit>
          </div>
          <div onClick={() => props.onClickCancel()} className={style.postEdit}>
            <ButtonRed>
              Cancel
            </ButtonRed>
          </div>
        </div>
      </form>
    )
  }