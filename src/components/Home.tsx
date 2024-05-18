import "../styles/Home.css";

/* import { SearchInputProps } from "../interfaces/interface" */

import { HomeMenu } from "../components/HomeMenu";

export function Home() {
  /* create a onChange function here for the search-input */

  return (
    <>
      <div className="page-container">
        <img src="/icons/map.svg" alt="map icon" />
        <h1>Electoral Districts</h1>
        <div className="search-districts-container">
          <img src="" alt="search icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search for districts"
            /* value={value}
            onChange={onChange} */
          />
        </div>
        <HomeMenu />
      </div>
    </>
  );
}
