import axios from "axios"
import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            userInfo: {
                login: "User",
                avatar_url: null,
            }
        }
    }

    async componentDidMount() {
        const response = (await axios.get("https://api.github.com/users/narayanavarma1999")).data
        console.log(`componentDidMount has executed...!`)
        this.setState({
            userInfo: response
        })  
    }

    componentDidUpdate() {
        console.log(`componentDidUpdate has executed...!`)
    }

    componentWillUnmount(){
         console.log(`componentWillUnmount has executed...!`)
    }

    render() {

        const { login, avatar_url } = this.state.userInfo
        return (
            <div className='user-card'>
                <h1>Welcome,{login}</h1>
                <img src={avatar_url} alt="image" />
            </div>
        )
    }
}

export default UserClass