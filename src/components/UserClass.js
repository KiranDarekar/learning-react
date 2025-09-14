
import React from "react";
import { User } from "./User";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        console.log("user class component");
    }

    async componentDidMount() {
        console.log(" user Class - did mount");
        const data = await fetch('https://api.github.com/users/akshaymarch7');

        const jsonData = await data.json();
        console.log(" userInfo -", jsonData)
        this.setState({
          userInfo: jsonData
        })
    }
    render() {
        console.log("user class rendoer");
        const {name, location } = this.props;
        const { count } = this .state;
        return (
            <div className='user-card'>
                <div> { "count -" + count }  </div>
                <h1> Name: { name } </h1>
                <h2 > Location: { location } </h2>
                <h3>Contact: @kiran</h3>

                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}> count increase </button>
                <User name={"Kiran Darekar (function)"} />
            </div>
        )
    }
}

export default UserClass;