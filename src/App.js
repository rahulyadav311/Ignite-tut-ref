import React from "react";
import GlobalStyles from "./components/GlobalStyles";
// Components
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <h1 className="logo">Ignite</h1>
      <Home />
    </div>
  );
};

export default App;
