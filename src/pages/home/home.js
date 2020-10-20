import React from 'react';
import '../../assets/css/home.css';
import GameSection from '../../components/game-section/game-section';
import NewGames from '../../assets/new-games.json';
import LightGames from '../../assets/light-games.json';

class Home extends React.Component {
  render() {
    return (
      <div id='main'>
        <GameSection title="New & updated games" games={NewGames}/>
        <GameSection title="Low on space?" desc="Lightweight games" games={LightGames}/>
      </div>
    )
  }
}

export default Home;