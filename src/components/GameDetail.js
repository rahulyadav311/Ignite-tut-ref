import React from "react";
// Styling & Animations
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";

const GameDetail = () => {
  // Data
  const { screen, game } = useSelector((state) => state.detail);

  return (
    <div className="card-shadow">
      <div className="detail">
        <div className="stats">
          <div className="ratings">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div>
              {game.platforms.map((data) => (
                <img alt={data.platform.name} key={data.platform.id}></img>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt={game.name} />
        </div>
        <div className="description">
          <p>{game.description}</p>
        </div>
        <div className="gallery">
          {screen.results.map((screen) => (
            <img src={screen.image} alt={game.name} key={screen.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
