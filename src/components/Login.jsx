import { useContext, useState } from "react"
import userContext from "../context/UserContext";


const Login = () => {
    const [userName,setUserName] = useState();
    const [password,setPassword] = useState();
    const {setUser} = useContext(userContext)
    const handleSubmit = ()=>{
        setUser({userName,password})
    }
  return (
    <div>
        <input
        type="text"
        value={userName}
        onChange={(e)=> setUserName(e.target.value)}
        placeholder="UserName"
        />
        <input
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>
        Submit
        </button>
    </div>
  )
}

export default Login