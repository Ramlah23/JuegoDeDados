
import { Card } from "../card/Card";
import { Dice } from "../dice/dice";

import cardImg from "../../assets/aesthetic-sailor-moon.jpg";
import cardImg2 from "../../assets/Sailor-Marte2.jpg"
import cardImg3 from "../../assets/Sailor-mercury3.jpg"
import cardImg4 from "../../assets/sailor-venus4.jpg"
import cardImg5 from "../../assets/sailor-jupiter5.jpg"
import cardImg6 from "../../assets/sailor-pluto6.jpg"
import "./cardContainer.css";

// eslint-disable-next-line react/prop-types
export const CardContainer = ( { diceNumber } ) => {
  return (
    <div className="card__container">
        <h2 className="cardContainer_title">
         El resultado es:<Dice diceNumber={diceNumber} />

        </h2>
        {diceNumber === 1 && <Card
        cardHeader="Hola soy Card 1!"
        cardImg={cardImg}
        cardFooter={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ipsam provident id laudantium, "
        }
        cardButton="comprar"
        diceNumber={diceNumber}
      /> }
      {diceNumber === 2 && <Card
        cardHeader="Hola soy Card 2!"
        cardImg={cardImg2}
        cardFooter={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ipsam provident id laudantium, "
        }
        cardButton="comprar"
        diceNumber={diceNumber}
      />}
      {diceNumber === 3 && <Card
        cardHeader="Hola soy Card 3!"
        cardImg={cardImg3}
        cardFooter={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ipsam provident id laudantium, "
        }
        cardButton="comprar"
        diceNumber={diceNumber}
      />}
      {diceNumber === 4 && <Card
        cardHeader="Hola soy Card 4!"
        cardImg={cardImg4}
        cardFooter={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ipsam provident id laudantium, "
        }
        cardButton="comprar"
        diceNumber={diceNumber}
      />}
      {diceNumber === 5 && <Card
        cardHeader="Hola soy Card 5!"
        cardImg={cardImg5}
        cardFooter={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ipsam provident id laudantium, "
        }
        cardButton="comprar"
        diceNumber={diceNumber}
      />}
      {diceNumber === 6 && <Card
        cardHeader="Hola soy Card 6!"
        cardImg={cardImg6}
        cardFooter={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ipsam provident id laudantium, "
        }
        cardButton="comprar"
        diceNumber={diceNumber}
      />}
      
    </div>
  )
}
