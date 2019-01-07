import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    userName: "fsdqui"
  };

  userNameHandler = () => {
    this.setState({
      userName: "khadijairsh"
    });
  };

  changeUserName = (event) => {
    this.setState({
      userName: event.target.value
    });
  };

  render() {
    const style = {
      color: 'gray'
    };
  

    return (
      <div className="App">
        <UserOutput style={style} change={() => this.userNameHandler()} userName={this.state.userName} />
        <UserInput change={this.changeUserName} userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
