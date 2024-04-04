import { useContext } from "react"
import userContext from "../context/UserContext"


const Profile = () => {
    const {user} = useContext(userContext)
  
    if(!user) return <div>Please login</div>

    return (
        <div>
            {user.userName}
        </div>
    )
  
}

export default Profile