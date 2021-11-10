import { useEffect, useState } from "react";
import AdContentTab from "./adContent";
import AdControlTab from "./adControl";
import AdLogin from "./adLogin";

export default function Admin(props) {
  let AL = sessionStorage.getItem("AL");
  const [isActive, setActive] = useState(AL ? JSON.parse(AL) : false);

  function setActiveAdmin(value) {
    setActive(value);
    sessionStorage.AL = JSON.stringify(value);
  }
  return (
    <>
    
      {!isActive ? (
        <AdLogin setActive={setActiveAdmin} />
      ) : (
        <div className="container-fluid admin__bg">
          <div className="row">
              <AdControlTab/>
              <AdContentTab/>
          </div>
        </div>
      )}
    </>
  );
}
