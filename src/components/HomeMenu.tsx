import "../styles/HomeMenu.css";

import { ListView } from "./ListView"
import { MapView } from "./MapView"

/* which view is default, ListView or MapView? */

export function HomeMenu({ view, setView }: { view: string, setView: Function }) {
  return (
    <>
      <p onClick={() => setView('list')}>List View</p>
      <p onClick={() => setView('map')}>Map View</p>
      <div>
        {view === 'list' ?
          <ListView />
          :
          <MapView />
        }
      </div>
    </>
  );
}