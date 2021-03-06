import React from 'react';
import axios from 'axios';
import UserCard from "./components/Card.js";
import FollowerList from "./components/FollowerList.js";

class App extends React.Component {
  state = {
    userData: [],
    followerData: [],
    err: ""
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/William-Ryan')
    .then(res => {
      console.log(res);
      this.setState({
        userData: res.data
      });
    })
    .catch(err => {
      console.log("There's an error", err)
    });

    axios.get('https://api.github.com/users/William-Ryan/followers')
    .then(res => {
      console.log("data" , res)
      this.setState({
        followerData: res.data
      });
    })
    .catch(err => {
      console.log("There's an error", err)
    });
  }

  render() {
  return (
    <div className="App">
      <h1>GitHub User Card</h1>
      <UserCard userData={this.state.userData}/>
      <FollowerList followerData={this.state.followerData}/>
    </div>
  );
}
}

export default App;