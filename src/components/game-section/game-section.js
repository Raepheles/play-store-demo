import React from 'react';
import '../../assets/css/game-section.css';
import Card from '../../components/card/card';

class GameSection extends React.Component {
  state = {
    width: 0
  }

  getCards() {
    let games = this.props.games;
    let cardsToShow = Math.floor((this.state.width - 97) / 170);
    let cards = [];
    for (let i = 0; i < games.length; i++) {
      if (i === cardsToShow) break;
      const game = games[i];
      let temp = <Card 
        key={i}
        name={game.name}
        desc={game.desc}
        rating={game.rating}
        gameLink={game.gameLink}
        publisherLink={game.publisherLink}
        imgSrc={`${process.env.PUBLIC_URL}/games/${game.img}`} />
      cards.push(temp);
    }
    return (
      <>
        {cards}
      </>
    );
  }

  componentDidMount() {
    this.setState({
      width: window.innerWidth
    });
    window.addEventListener('resize', () => {
      this.setState({
        width: window.innerWidth
      });
    });
  }

  render() {
    return (
      <div className="game-section">
        <div className="game-section-header">
          <div className="header-left">
            {this.props.title}
            <span className="header-desc">{this.props.desc}</span>
          </div>
          <div className="header-right">
            <div className="see-more">See more</div>
          </div>
        </div>
        <div className="game-section-cards">
          {this.getCards()}
        </div>
      </div>
    )
  }
}

export default GameSection;