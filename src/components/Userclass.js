import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
        };
    }
    render(){
        const {name , location} = this.props;
        const{count} =this.state;
        return(
            <div className="user-card">
                <h1>Count:{count}</h1>
            <h3>name: {name}</h3>
            <h3>Location: {location}</h3>
            <h3>Contact: narahari@gmail.com</h3>
        </div>  
        );
    }
}
export default UserClass