import "../styles/DistrictPage.css";

import { DistrictHeader } from "../components/DistrictHeader";
import { DistrictMenu } from "../components/DistrictMenu";

export function DistrictPage() {

  return (
    <>
      <div className="district-page-container">
        <DistrictHeader />
        <DistrictMenu />
      </div>
    </>
  );
}
