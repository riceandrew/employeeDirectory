import React, { Component } from "react";
import axios from "axios";

import Search from "./components/search";

// stateful, smart , class
class App extends Component {
  state = {
    query: '',
    randomUsers: []
  };

  // lifecycle method runs when page first mounts
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=50`).then(res => {
      console.log(res.data);
      this.setState({ randomUsers: res.data.results });
    });
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div>
    <input type="text" className="input" placeholder="Search..." />
    <ul>
    {this.state.randomUsers.map(user => (<li>{user.name.first}{user.name.last}</li>))};
    </ul>
</div>
        {/* {this.state.randomUsers.map(user => (
          <h3>
            {" "}
            {user.name.first} {user.name.last}
          </h3>
        ))}
        , */}
      </div>
    );
  }
}

function Header() {
  return <h1>Employee Directory</h1>;
}

export default App;
