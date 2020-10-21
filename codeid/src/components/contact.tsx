import style from "../../styles/contact.module.css"
import Avatar from "react-avatar"
import {ButtonEdit, ButtonRed} from "../../src/components/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEdit,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import deleteContact from "../../src/service/deleteContact"
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {setEmergencyContact, removeEmergencyContact} from "../../src/redux/actions"
import useCheckEmergencyContacts from "../../src/hooks/checkEmergencyContact"
interface IContactProps {
    contact: Contact
}
export default function Contact(props: IContactProps){
  const Router = useRouter()
  const dispatch = useDispatch()
  const emergency = useCheckEmergencyContacts(props.contact.id)
    return(
        <div className={`${style.outerConteiner} ${style.containerContact}`}>
          <div className={style.containerContact} >
            <Avatar src={props.contact.photo} alt={`${props.contact.firstName} ${props.contact.lastName}`} textSizeRatio={3} round size={"80px"} 
              name={`${props.contact.firstName} ${props.contact.lastName}`}></Avatar>
            <div className={style.innerContact}>
              <div className={style.nameEmergency}>
                <a title={"Click me!"} href={`${process.env.ORIGIN_URL}/contact/${props.contact.id}`} 
                className={style.name}>{props.contact.firstName} {props.contact.lastName}</a>
                {
                  emergency.wished ? 
                    <div
                    className={`${style.remove} ${style.addRemove}`}
                      onClick={() => {
                        dispatch(removeEmergencyContact(props.contact))
                      }}
                    >remove from emergency contact</div>
                  : 
                    <div
                    className={`${style.add} ${style.addRemove}`}
                      onClick={() => {
                        dispatch(setEmergencyContact(props.contact))
                      }}
                    >add to emergency</div>
                }

              </div>
              <div style={{display: "flex"}}>
                <a href={`${process.env.ORIGIN_URL}/contact/${props.contact.id}?edit=true`}> 
                  <ButtonEdit style={{width: "40px", height: "40px", borderRadius: "50%"}}>
                    <FontAwesomeIcon icon={faEdit} />
                  </ButtonEdit>
                </a>
                <div onClick={async () => {
                  const status = await deleteContact(props.contact?.id)
                  if(status) {
                    Router.push("/")
                  }
                }}>
                  <ButtonRed style={{width: "40px", height: "40px", borderRadius: "50%", marginLeft: "12px"}}>
                    <FontAwesomeIcon icon={faTrash} />
                  </ButtonRed>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}