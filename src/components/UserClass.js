import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            userInfo:{
                name: "Default",
                location: "default location"
            }
        }
        // console.log(this.props.Name + " child Constructor")
    }

    async componentDidMount(){
        const data =await fetch('https://api.github.com/users/sona-sonali')
        const json = await data.json()
        console.log(json)
        this.setState({
            userInfo: json
        })

        // console.log(this.props.Name + "child component did Mount")
    }

    componentDidUpdate(){
        console.log("Component Update")
    }

    componentWillUnmount(){
        console.log("componet got unmounted")
    }
 
    
    render(){
        // console.log(this.props.Name + "Child Render")
        const {name, location, avatar_url} = this.state.userInfo

        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: sonali080@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass