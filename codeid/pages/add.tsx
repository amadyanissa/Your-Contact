
import {GetServerSideProps} from "next"
import styles from "../styles/Home.module.css"
import style from "../styles/Add.module.css"
import fetch from "node-fetch"
import MainLayout from "../src/layouts/mainLayout"
import Form from "../src/components/form"
export default function AddContact() {
  return (
    <MainLayout noAddButton>
    <div className={styles.container}>
      <div className={style.innerAdd}>
        <div className={style.form}>
          <Form />
        </div>
      </div>
    </div>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
const responseAllContact = await fetch ("https://simple-contact-crud.herokuapp.com/contact")
const contacts = await responseAllContact.json()
  return{
    props: {
      contacts: contacts.data
    }
  }
}