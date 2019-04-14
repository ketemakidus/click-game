import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Nav from "./components/Nav"

class App extends Component {
  state = {
    friends
  };
  render() {
    return (
      <Wrapper>
      <Nav />
        <Title>Clicky Game!
        </Title>
          {this.state.friends.map(friend => (
              <FriendCard
                key={friend.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
                id={friend.id}
                image={friend.image}
              />
          ))}
      </Wrapper>
    );
  }
}

export default App;
