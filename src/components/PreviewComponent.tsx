import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

interface preview {
  flags: string;
  name: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  border: string[];

  darkMode: boolean;
  setIspreviewing: React.Dispatch<React.SetStateAction<boolean>>;
}

// {flags, name, nativeName, population, region,subRegion, capital, domain,currencies, languages, border} : preview
export const PreviewComponent = ({
  flags,
  darkMode,
  name,
  population,
  region,
  subRegion,
  capital,
  border,
  setIspreviewing,
}: preview) => {
  console.log(border);

  return (
    <main
      className={`${
        darkMode ? "bg-bgDark text-white" : "bg-bgLight"
      } fixed w-full h-full top-20 z-10 p-4 `}
    >
      <div
        className={`${darkMode && "bg-elementDark text-white"} back-icon rounded cursor-pointer flex items-center justify-between w-24 shadow-lg py-2 px-4 self-start `}
        onClick={() => setIspreviewing(false)}
      >
        <FaArrowLeftLong />
        <h5>Back</h5>
      </div>

      <div className="flex flex-col items-start justify-start md:flex-row md:justify-around md:items-center max-w-[900px] m-auto">
        <img src={flags} alt="" className="w-full mx-auto my-10 max-w-[500px]" />

        <div className="info self-start px-3 md:mt-10">
          <h1 className="my-5 text-2xl font-black md:text-3xl tracking-wide">{name}</h1>

          <h3 className="text-lg">Population: <span className="value">{population.toLocaleString()}</span></h3>
          <h3 className="text-lg">Region: <span className="value">{region}</span></h3>
          <h3 className="text-lg">Sub Region: <span className="value">{subRegion}</span></h3>
          <h3 className="text-lg">Capital: <span className="value">{capital}</span></h3>
        </div>
      </div>
    </main>
  );
};
