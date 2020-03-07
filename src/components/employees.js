import React from "react";
import axios from "axios";

export default class employees extends React.Component {
  state = {
    employees: []
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?format=xml").then(res => {
        console.log(res);
      this.setState({ employees: res.data });
    });
  }
  
  render(){
      return (
          <ul>
        { this.state.employees.map(employee => <li>{employee.name}</li>)}
          </ul>
      )
  }
}


