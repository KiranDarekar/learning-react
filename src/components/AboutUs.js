import React from "react";
import UserClass from "./UserClass";

class AboutUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        console.log("About function component");
    }

    async componentDidMount() {
        console.log(" About did mount ");
        
    }
    render() {
      // const { name, location } = this.state.userInfo;
      console.log("return About function component") ;
        return (
        
        <div className="restro-card">
          <h1>This is about us page</h1>

          
          {/* <UserClass name={name} location={ location} /> */}
          <UserClass name={"Tejas Darekar (function)"} location={ 'pune'} />
        </div>
        
      );
    }
}

export default AboutUs;