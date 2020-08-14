import React from 'react';
import './App.css';
import Profile from './profile/Profile';

function App() {
  const imgStyle = {
    width: 300,
    height: 350,
    borderRadius: "15px 50px"
  }
  
  return (
    <>
    <Profile firstName = "Tom Hardy" bio="Tom Hardy, in full Edward Thomas Hardy, (born September 15, 1977, London, England), British actor who was known for his striking good looks, idiosyncratic personality, and cerebral performances in both cult films and mainstream blockbusters." profession="Actor & Producer">
      <div>
      <img src="/tom.jpg" alt="Tom Hardy Smiles" style={imgStyle}/>
      </div>
    </Profile>
    <Profile firstName = "Lionel Messi" bio="Lionel Andrés Messi Cuccittini is an Argentine professional footballer who plays as a forward and captains both Spanish club Barcelona and the Argentina national team." profession="Football Player">
    <div>
    <img src="/messi.jpg" alt="Lionel Messi with Argentina kit" style={imgStyle}/>
    </div>
  </Profile>
  </>
  );
}

export default App;
