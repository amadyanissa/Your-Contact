import MainLayout from "../../src/layouts/mainLayout"
import {GetServerSideProps} from "next"
import styles from "../../styles/Home.module.css"
import style from "../../styles/ContactDetail.module.css"
import Avatar from "react-avatar"
import fetch from "node-fetch"
import axios from "axios"
import {ConfirmDelete} from "../../src/service/swalConfirm"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from "next/router";
import {
  faEdit,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import {ButtonEdit, ButtonRed} from "../../src/components/button"
import Form from "../../src/components/form"
interface IContactDetailProps{
  detail: Contact,
}
import {fireText} from "../../src/service/swalConfirm"
import deleteContact from "../../src/service/deleteContact"
export default function ContactDetail(props: IContactDetailProps){
  const [showEdit, setShowEdit] = useState<boolean>(false)
  const editStatus = useRouter().query
  useEffect(() => {
    if(editStatus.edit) setShowEdit(true)
  },[])
  return(
    <MainLayout>
      <div className={styles.container}>
          <div style={!showEdit ? {minHeight: "400px"}: {minHeight: "600px", marginTop: "110px"}} className={style.innerDetail}>
            <div className={style.avatarSection}>
              <Avatar src={props.detail?.photo} alt={`${props.detail?.firstName} ${props.detail?.lastName}`} textSizeRatio={3} round size={"100px"} 
                name={`${props.detail?.firstName} ${props.detail?.lastName}`}></Avatar>
                <div className={style.name}>
                  {props.detail?.firstName} {props.detail?.lastName}
                </div>
                <span>
                  Age {props.detail?.age}
                </span>  
            </div>
            <div className={style.bottom}>
              {
                showEdit ? 
                <Form info={props.detail} onClickCancel={() => setShowEdit(!showEdit)}></Form>
                :
                <EditAndDelete detail={props.detail} onClickEdit={() => setShowEdit(!showEdit)}></EditAndDelete>
              }
            </div>
          </div>
      </div>
    </MainLayout>
  )
}

interface IEditAndDeleteProps{
  detail: Contact;
  onClickEdit: () => void
}
function EditAndDelete(props: IEditAndDeleteProps){
  const Router = useRouter()
  return (
    <div className={`${style.preEdit} ${style.editAndDelete}`}>
      <div onClick={() => props.onClickEdit()}>
        <ButtonEdit >
          <FontAwesomeIcon icon={faEdit} />
        </ButtonEdit>
      </div>
      <div onClick={ async () => {
        const status = await deleteContact(props.detail.id)
        if(status){
          Router.push("/")
        }
      }}>
        <ButtonRed>
          <FontAwesomeIcon icon={faTrash}/>
        </ButtonRed>
      </div>
    </div>
  )
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const responseContact = await fetch (`https://simple-contact-crud.herokuapp.com/contact/${ctx.query?.contactId}`)
    const contactDetail = await responseContact.json()
      return{
        props: {
          detail: contactDetail.data,
        
        }
      }
    }