import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard/FriendCard";
import friends from "./friends.json";

const list = friends.map(friend => {
  return <FriendCard 
            key={friend.name}
            name={friend.name} 
            location={friend.location} 
            image={friend.image} 
            occupation={friend.occupation}
          />
})

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    {list}
  </Wrapper>
);

export default App;
