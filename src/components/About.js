import User from "./User"
import UserClass from "./UserClass"
import React from "react"

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