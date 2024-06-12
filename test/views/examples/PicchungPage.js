import React from "react";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Carousel from "views/examples/Carousel.js";

function PicchungPage() {

  React.useEffect(() => {
    document.body.classList.add("picchung-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("picchung-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <><><ExamplesNavbar /><div className="page-header clear-filter">
      <div
        className="page-header-image"
        
        style={{
          backgroundImage: "url(" + require("assets/img/login1.jpg").default + ")",
        }}
      ></div>
    </div>

    </><Carousel />
    <DarkFooter /></>
  );
}

export default PicchungPage;