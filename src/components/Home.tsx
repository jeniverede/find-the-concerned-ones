import { useState } from 'react';
import "../styles/Home.css";

/* import { SearchInputProps } from "../interfaces/interface" */

import { HomeMenu } from "../components/HomeMenu";

export function Home() {
  /* create a onChange function here for the search-input */

  const [view, setView] = useState('list');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const districts = ["Mitte", "Friedrichshain", "Kreuzberg", "Prenzlauer Berg", "Charlottenburg", "Wilmersdorf", "Spandau", "Steglitz", "Tempelhof", "Neukölln", "Treptow", "Köpenick", "Marzahn", "Hellersdorf", "Lichtenberg", "Reinickendorf"];

  const search = (value: string) => {
    console.log(value);
    if (value === "") {
      setSearchResults([]);
    } else {
      setSearchResults(districts.filter((district) =>
        district.includes(value) || district.toLowerCase().includes(value) || district.toUpperCase().includes(value)
      ));
    }
  }

  return (
    <>
      <div className="page-container">
        <img src="/icons/map.svg" alt="map icon" />
        <h1>Electoral Districts</h1>
        <div className="search-districts-container">
          <img src="/icons/search.svg" alt="search icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search for districts"
            onInput={event => search(event.currentTarget.value)}
          /* value={value}
          onChange={onChange} */
          />
          {searchResults.map((district, index) =>
            <p key={index}>{district}</p>
          )}
        </div>
        <HomeMenu view={view} setView={setView} />
      </div>
    </>
  );
}
