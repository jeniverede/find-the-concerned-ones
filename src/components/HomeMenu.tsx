import "../styles/HomeMenu.css";

import { ListView } from "./ListView"
import { MapView } from "./MapView"

/* which view is default, ListView or MapView? */

export function HomeMenu() {
  return (
    <>
      <div>
      <ListView/>
      <MapView/>
      </div>
    </>
  );
}