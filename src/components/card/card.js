import React from 'react';
import '../../assets/css/card.css';

class Card extends React.Component {
  rating() {
    if (!this.props.rating) return;
    let rating = this.props.rating;
    if (isNaN(rating)) return;
    if (rating < 0) rating = 0;
    if (rating > 5) rating = 5;
    let result = [];
    for (let i = 1; i <= rating; i++) {
      let temp = <div key={i} className="card-rating-star"></div>;
      result.push(temp);
    }
    let resultLength = result.length;
    for (let i = 1; i <= 5 - resultLength; i++) {
      let temp = <div key={6-i} className="card-rating-star-empty"></div>;
      result.push(temp);
    }
    return (
      <div>
        {result}
      </div>
    );
  }

  handleClickCardTop = () => window.location.assign(this.props.gameLink);
  handleImageError = (ev) => ev.target.src = `${process.env.PUBLIC_URL}/placeholder128.png`;

  render() {
    let imgPlaceholder = `${process.env.PUBLIC_URL}/placeholder128.png`;
    let imgSrc = this.props.imgSrc || imgPlaceholder;
    return (
      <div className="card">
        <div onClick={this.handleClickCardTop} className="card-top">
          <div className="card-image">
            <div className="card-img-overlay"></div>
            <img onError={this.handleImageError} className="card-img" alt="" src={imgSrc} />
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom-main-cell">
            <div className="card-table">
              <div className="card-table-row">
                <div className="card-table">
                  <div className="card-table-cell">
                    <div className="card-name">
                      <a href={this.props.gameLink}>{this.props.name}</a>
                    </div>
                    <div className="card-desc">
                      <a href={this.props.publisherLink}>{this.props.desc}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-table-row">
                <div className="card-table">
                  <div className="card-rating-cell">
                    <div className="card-rating">
                      {this.rating()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;