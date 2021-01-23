import React from "react";
// Styling & Animations
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import loadDetail from "../actions/detailAction";

const Game = ({ id, name, released, image }) => {
  // Load Detail
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h4>{name}</h4>
      <p>{released}</p>
      <img src={image} alt={name} title={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  width: 100%;
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  h4 {
    margin: 1rem 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export default Game;
