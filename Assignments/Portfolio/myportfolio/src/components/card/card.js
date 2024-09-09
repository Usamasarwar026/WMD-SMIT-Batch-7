import React from 'react';
import './card.css';

function CardComponent(props) {
  return (
    <div className="cd">
      <div id="card-area">
        <div className="wrapper">
          <div className="box-area">
            <div className="box">
              <img src={props.pic} alt="" className="responsive-img" />
              <div className="overlay">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
