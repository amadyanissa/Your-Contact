import Nav from "../components/nav"
import Add from "../components/add"
interface IMainLayout{
    children?: React.ReactChild
    noAddButton?: boolean
}

export default function MainLayout ({children, noAddButton} : IMainLayout){
    return(
        <div>
            <Nav/>
            {children}
            {
              !noAddButton && 
                <Add></Add>
            }
        </div>
    )
}