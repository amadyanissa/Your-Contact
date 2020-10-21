import style from "../../styles/add.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressBook} from "@fortawesome/free-solid-svg-icons"
export default function Add() {
    return(
      <a href={`${process.env.ORIGIN_URL}/add`} className={style.add}>
        <FontAwesomeIcon icon={faAddressBook} />
        <div className={style.text}>Add</div>
      </a>
    )
}