import React from "react";

interface CardComponent {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  darkMode: boolean;
}

const CardComponent = ({
  flag,
  name,
  population,
  region,
  capital,
  darkMode,
}: CardComponent) => {
  return (
    <main className="h-full">
      <div className="h-1/2 ">
        <img
          src={flag}
          alt=""
          className="object-cover h-[100%] w-[100%] rounded-t-lg shadow-md"
        />
      </div>

      <div className="info p-5">
        <h1 className="font-black text-lg mb-3">{name}</h1>
        <h4 className="legend">
          Population: <span className="value">{population.toLocaleString()}</span>
        </h4>
        <h4 className="legend">
          Region: <span className="value">{region}</span>
        </h4>
        <h4 className="legend">
          Capital: <span className="value">{capital}</span>
        </h4>
      </div>
    </main>
  );
};

export default CardComponent;
