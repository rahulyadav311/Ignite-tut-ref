import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
// Styling & Animations
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  // Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // Get Data Back
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      <GameDetail />
      <h3>Upcoming Games</h3>
      <Games>
        {upcoming.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </Games>
      <hr />
      <h3>Popular Games</h3>
      <Games>
        {popular.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </Games>
      <hr />
      <h3>New Games</h3>
      <Games>
        {newGames.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 3rem;
  hr {
    width: 100%;
    color: #696969;
    height: 1px;
    margin: 5rem 0;
  }
  h3 {
    margin: 2rem 0;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 30px;
  margin: 3rem 0;
`;

export default Home;
