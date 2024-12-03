import { useState } from "react"
const User = ({name}) =>{
    const[count] = useState(0);
    return(
        <div className="user-card">
            <h1>Count ={count}</h1>
            <h3>name: {name}</h3>
            <h3>Location: Bangalore</h3>
            <h3>Contact: narahari@gmail.com</h3>
        </div>
    )
}
export default User