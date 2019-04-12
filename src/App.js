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
      
    activeKey="/home"
    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
  >
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
      <Wrapper>
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
console.log("kidus");

export default App;
