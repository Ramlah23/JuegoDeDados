import "./card.css";

// eslint-disable-next-line react/prop-types
export const Card = ({ cardHeader, cardFooter, cardImg, cardButton }) => {
  return (
    <div className="card">
      <h3 className="card__title"></h3>
      {cardHeader && <p className="card__header">{cardHeader}</p>}
      {cardImg && <img src={cardImg} alt="Imagen Card" className="card__img" />}
      {cardFooter && <p className="card__Footer">{cardFooter} </p>}
      {cardButton && <button className="card__button">{cardButton} </button>}
    </div>
  );
};
