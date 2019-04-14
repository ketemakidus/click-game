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
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
