import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

//Função para criar um array com base no tamanho fornecido
const createArray = (length) => [...Array(length)];

const Star = ({ selected = false, onSelect = (f) => f, ...props }) => {
  return (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} {...props} />
  );
};

const StarRating = ({ totalStar = 5, ...props }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {createArray(totalStar).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
          {...props}
        />
      ))}
      <p>
        {selectedStars} of {totalStar} stars
      </p>
    </>
  );
};

export default StarRating;
