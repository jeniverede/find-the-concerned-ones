import "../styles/DistrictHeader.css";

/* import { SearchInputProps } from "../interfaces/interface" */

export function DistrictHeader() {
    /* create a onChange function here for the search-input */
  return (
    <>
      <div className="district-header-container">
        <div className="back-icon">
          <img src="" alt="back icon" />
          {/* find back icon */}
          <h4>Back</h4>
        </div>

        <div>
          <h1>{/* create a map to render each district Name (ex: Mitte or maybe Berlin Mitte) */}</h1>
        </div>

        <div className="search-wahllokal-container">  
          <img src="/public/icons/search.svg" alt="search icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search for a Wahllokal..."
            /* value={value}
            onChange={onChange} */
          />
        </div>
      </div>
    </>
  );
}
