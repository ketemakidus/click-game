import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Nav from "./components/Nav";
import Score from "./components/Score";

class App extends Component {
  state = {
    friends,
    currentScore: 0,
    correctIncorrect: "",
    Clicked: []
  };

  render() {
    return (
      <Wrapper>
        <Nav />
        <Score total={this.state.currentscore}
        correctIncorrect={this.state.correctIncorrect}
        />
        <Title>Clicky Game!</Title>
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
