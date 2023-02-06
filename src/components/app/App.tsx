import React from "react";
import { Button } from "../button/button";
import { Gentleman } from "../gentleman/gentleman";
import { Info } from "../info/info";
import "./App.css";
import { GENTLEMAN } from "../../mocks/gentleman";

function App() {
  return (
    <div className="container">
      <Info />
      <Button />
      <Gentleman {...GENTLEMAN} />
    </div>
  );
}

export default App;
