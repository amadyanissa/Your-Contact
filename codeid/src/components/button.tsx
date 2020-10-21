import style from "../../styles/ContactDetail.module.css"
import CSS from "csstype"
interface IButtonProps {
  children?: React.ReactChild
  confirm?: boolean
  style?: CSS.Properties
}
export  function ButtonEdit(props: IButtonProps) {
  return (
    <>
    {
      props.confirm 
      ? 
        <button className={`${style.editDeleteButton} ${style.edit}`}>
          {props.children}
        </button>
      : 
        <div style={props.style} className={`${style.editDeleteButton} ${style.edit}`}>
          {props.children}
        </div>
    }
    </>
  )
}

export function ButtonRed(props: IButtonProps){
  return(
    <div style={props.style} className={`${style.editDeleteButton} ${style.delete}`}>
      {props.children}
    </div>
  )
}