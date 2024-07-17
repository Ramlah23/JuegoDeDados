



import { useState } from "react";
import RollButton from "./components/rollButton/rollButton.jsx";
import { CardContainer } from "./components/cardContainer/cardContainer.jsx";

function App() {
  const [diceNumber, setDiceNumber] = useState(6);

  const handleRollDice = () => {
    let number = parseInt(Math.random() * 6 + 1);
    setDiceNumber(number);
    console.log(diceNumber);
  };

  return (
    <>
      <RollButton diceNumber={diceNumber} rollDiceFunction={handleRollDice} />

      <CardContainer diceNumber={diceNumber} />
    </>
  );
}

export default App;
