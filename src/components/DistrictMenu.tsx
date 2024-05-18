import "../styles/DistrictMenu.css"

import { PoliticalTrends } from "../components/PoliticalTrends"
import { HotTopics } from "../components/HotTopics"
import { AISuggestions } from "../components/AISuggestions"

export function DistrictMenu() {
      /* create a function so menu items are clickable */
  return (
    <>
      <div className="menu-container">
        <PoliticalTrends/>
        <HotTopics/>
        <AISuggestions/>
      </div>
    </>
  );
}