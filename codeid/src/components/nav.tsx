import style from "../../styles/nav.module.css"
export default function Nav (){
    return(
        <div className={style.containerNav}>
            <a className={style.yourContact} href="/">Your Contact</a>
            <a className={style.addContact} href={`${process.env.ORIGIN_URL}/add`}>Add Contact</a>
        </div>
    )
}