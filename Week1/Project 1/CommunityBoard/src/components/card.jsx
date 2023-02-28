import React, {Component} from 'react';
import './card.scss';
class Card extends Component {
    render() {
        return (
        <div className="card">
            <div className="card-img">
                <img src={this.props.img} alt={this.props.title} />
            </div>
            <div className="card-header">
                <h3>{this.props.title}</h3>
            </div>
            <div className="card-body">
                <p>{this.props.description}</p>
            </div>
            <div className="footer-button">
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
        </div>
        );
    }
}
export default Card;
