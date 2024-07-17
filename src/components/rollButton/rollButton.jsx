import { Dice } from "../dice/dice"

import "./rollButton.css"

// eslint-disable-next-line react/prop-types
const RollButton= ({ diceNumber, rollDiceFunction }) => {
  return (
    <>
    <button className="roll__button" onClick={rollDiceFunction}>
    <Dice diceNumber={diceNumber} />
    Roll!!
    </button>
    </>
  )
}

export default RollButton