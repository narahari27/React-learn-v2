import User from "./User";
import UserClass from "./Userclass";

const About =() =>{
    return(
        <div>
            <h1>This is About Routers and About Page</h1>
            <User name ={"Narahari is (function"}/>
            <UserClass name ={"Narahari is (class) "} location = {"Bangalore"}/>
        </div>
        
    )
};
export default About;