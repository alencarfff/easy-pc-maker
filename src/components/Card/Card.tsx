import React, {MouseEvent, FC} from "react";
import PropTypes from "prop-types";
import {ICard} from "models/ICard";

const Card: FC<ICard> = ({title, description, imageUrl}: ICard): JSX.Element => {
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  return (
    <article>
      <h3>{title}</h3>
      <div className="image-container">
        <img src={imageUrl} alt={title} className="image" />
      </div>

      <p>{description}</p>

      <button onClick={handleClick}></button>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  description: PropTypes.string,
};

export default Card;
