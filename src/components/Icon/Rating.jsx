import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

//Função para criar um array com base no tamanho fornecido
const createArray = (length) => [...Array(length)];

const Icon = ({
  iconName,
  selected = false,
  onSelect = (f) => f,
  ...props
}) => {
  const IconComponent = FaIcons[iconName]; //Acessa o ícone dinâmicamente
  return IconComponent ? (
    <IconComponent
      color={selected ? "red" : "grey"}
      onClick={onSelect}
      {...props}
    />
  ) : null;
};

const Rating = ({ iconName = "FaStar", totalIcons = 5, ...props }) => {
  const [selectedIcons, setSelectedIcons] = useState(0);

  return (
    <>
      {createArray(totalIcons).map((n, i) => (
        <Icon
          iconName={iconName}
          key={i}
          selected={selectedIcons > i}
          onSelect={() => setSelectedIcons(i + 1)}
          {...props}
        />
      ))}
      <p>
        {selectedIcons} of {totalIcons}
      </p>
    </>
  );
};

export default Rating;
