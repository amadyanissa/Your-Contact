import {GetServerSideProps} from "next"
import styles from "../styles/Home.module.css"
import fetch from "node-fetch"
import Contact from "../src/components/contact"
import MainLayout from "../src/layouts/mainLayout"
import {useSelector} from "react-redux"

interface IHomeProps{
  contacts: Contact[]
}

export default function Home(props: IHomeProps) {
  const emergency = useSelector((state) => state.allReducers.emergency);
  
  return (
    <MainLayout>
      <div className={styles.container} >
        {
          emergency.length > 0 && 
            <div className={styles.emergency}>
              <span className={styles.sub}>EMERGENCY CONTACTS</span>
              {
                emergency.map((contact) => {
                  console.log(contact.contacts, "<")
                  return <Contact key={contact.contacts.id} contact={contact.contacts} ></Contact>
                })
              }
            </div>
        }
          <div className={styles.inner}>
          <span className={styles.sub}>ALL CONTACTS</span>
          {props.contacts.map(((contact) => {
            return (
              <Contact key={contact.id} contact={contact}/>
            )
          }))}
          </div>
      </div>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const responseAllContact = await fetch ("https://simple-contact-crud.herokuapp.com/contact")
  const contacts = await responseAllContact.json()
  return{
    props: {
      contacts: contacts.data
    }
  }
}