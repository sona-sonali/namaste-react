import React from "react"
import User from "./User"
import UserClass from "./UserClass"
import UserContext from "../utils.js/UserContext"

class About extends React.Component{

    constructor(props){
        super(props)
        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent Component Mount")
    }

    render(){
        console.log("ParentRender")
        return(
            <div>
               <h1> This is About Us Page</h1>
               <UserClass Name={"Rupali Panda"} Location={"Odisha"} />
               <div>
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1>{loggedInUser}</h1> }
                </UserContext.Consumer>
               </div>
            </div>
        )
    }
} 

// const About = () => {
//     return (
//         <div>
//            <h1> This is About Us Page</h1>
//            <User name={"Sonali Panda"} Location={"India"}/>
//            <UserClass Name={"Rupali Panda"} Location={"Odisha"} />
//         </div>
//     )
// }

export default About