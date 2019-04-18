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
    topscore:12,
    correctIncorrect: "",
    Clicked: []
  };

  Score = id => {
    let Clicked = this.state.Clicked;

    if (Clicked.includes(id)){
      this.setState({ Clicked:[], score:0, correctIncorrect:"you lose"});
      return;
    }else{
      Clicked.push(id)
      console.log("Clicked")

    }
    if(Clicked.length === 12){
      this.setState({score: 12, status: "youwon",Clicked :[]});
      return;
    }
this.setState({friends,Clicked , currentScore:Clicked.length, status:""});
for (let i = friends.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [friends[i], friends[j]] = [friends[j], friends[i]];
}
}

  
  render() {
    return (
      <Wrapper>
        <Nav />
        <Score total={this.state.currentscore}
        topscore ={12}
        correctIncorrect={this.state.correctIncorrect}
        />
        <Title>Clicky Game!</Title>
       {this.state.friends.map(friend => (
          <FriendCard
          Score ={this.Score}
            key={friend.id}
            id={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
