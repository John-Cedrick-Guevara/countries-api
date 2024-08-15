import { useEffect, useState } from "react";
import "./index.css";
import { NavComponent } from "./components/NavComponent";
import { IoIosSearch } from "react-icons/io";
import CardComponent from "./components/CardComponent";
import { PreviewComponent } from "./components/PreviewComponent";

function App() {
  interface Card {
    flags: {
      png: "";
    };
    name: {
      common: "";
    };
    population: number;
    region: string;
    capital: string;

    subRegion: string;

    border: string[];
  }

  interface Preview {
    flags: string;
    name: string;
    population: number;
    region: string;
    subRegion: string;
    capital: string;

    border: string[];
  }

  const initialPreview: Preview = {
    flags: "",
    name: "",
    population: 0,
    region: "",
    subRegion: "",
    capital: "",

    border: [],
  };

  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [countries, setCountries] = useState<Card[]>([]);
  const [region, setRegion] = useState<string>("");
  const [isPreviewing, setIsPreviewing] = useState<boolean>(false);
  const [previewInfo, setPreviewInfo] = useState<Preview>(initialPreview);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");

        const jsondata = await response.json();
        setCountries(jsondata);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchCountries();
  }, []);

  function setPreview(item: any) {
    setIsPreviewing(true);
    setPreviewInfo({
      flags: item.flags.png || "not found",
      name: item.name.common || "not found",
      population: item.population,
      region: item.region || "not found",
      subRegion: item.subregion || "not found",
      capital: item.capital || "not found",

      border: item.borders || "not found",
    });

    console.log(item);
  }

  return (
    <body className={`${darkMode ? "bg-bgDark" : "bgLight"}`}>
      <NavComponent setDarkMode={setDarkMode} darkMode={darkMode} />

      {/* search bar and filter section */}
      <section className="search-bar my-7 flex flex-col items-center justify-between w-[90%] mx-auto md:flex-row">
        {/* search bar */}
        <div
          className={`search-bar  text-lg my-7 md:m-0 flex items-center justify-center shadow-xl w-full md:w-[50%] px-3 rounded ${
            darkMode && "bg-elementDark"
          }`}
        >
          <IoIosSearch className={`${darkMode && "invert"}`} />
          <input
            className={`${
              darkMode && "bg-elementDark text-white"
            } outline-none text-base py-3 px-4 w-full `}
            placeholder="Search for a country.... "
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* filter by region select element */}
        <select
          onChange={(e) => setRegion(e.target.value)}
          name="continents"
          id=""
          className={`${
            darkMode && "bg-elementDark text-white"
          } w-50  self-start shadow-lg p-3 text-lg rounded outline-none`}
        >
          <option disabled hidden value="">
            Filter By Region...
          </option>

          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>

      {/* mapped countries */}
      <section className={` countries w-full md:flex md:flex-wrap gap-1 `}>
        {!isPreviewing ? (
          countries
            .filter((item) => {
              return region === ""
                ? item
                : item.region.toLowerCase() === region.toLowerCase();
            })
            .filter((item) => {
              return search === ""
                ? item
                : item.name.common.toLowerCase().includes(search.toLowerCase());
            })
            .map((country, key) => (
              <div
                className={`${
                  darkMode && "bg-elementDark text-white"
                } rounded-lg shadow-lg  cursor-pointer hover:translate-y-[-3px] hover:ease-in-out duration-200 mx-auto my-10 w-[20em] h-auto`}
                key={key}
                onClick={() => setPreview(country)}
              >
                <CardComponent
                  flag={country.flags.png}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  darkMode={darkMode}
                />
              </div>
            ))
        ) : (
          // preview component
          <PreviewComponent
            setIspreviewing={setIsPreviewing}
            flags={previewInfo.flags}
            name={previewInfo.name}
            population={previewInfo.population}
            region={previewInfo.region}
            subRegion={previewInfo.subRegion}
            capital={previewInfo.capital}
            border={previewInfo.border}
            darkMode={darkMode}
          />
        )}
      </section>
    </body>
  );
}

export default App;
