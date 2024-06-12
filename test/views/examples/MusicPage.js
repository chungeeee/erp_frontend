import React, { useState } from "react";

import YouTube from "react-youtube";
//import resizeLayout from "Components/Layout/ResizeLayout";
//import "./VideoModal.scss";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function MusicPage(props){
    const { onClose, isMobile } = props;
    const [open, setOpen] = useState(false);
    const handleModal = (flag) => {
      setOpen(flag);
      onClose();
    };
  
    const opts = {
      width: "640",
      height: "390",
      playerVars: {
        autoplay: 1,
      },
    };
  
    const mobileOpts = {
      width: "320px",
      height: "200px",
      playerVars: {
        autoplay: 1,
      },
    };
    
  React.useEffect(() => {
    document.body.classList.add("music-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("music-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <><>
      <ExamplesNavbar />
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login1.jpg").default + ")",
          }}
        ></div>
      </div>

      </><div class="zone_wrap">
        <div class="list_zone">
          <div class="tit">
            <h2 id="zoneTitle">음악여행</h2>
          </div>

          <div
      className="video-modal-container"
      onClick={() => handleModal(false)}
      style={{ position: "fixed" }}
    >
      <div className="video-modal-wrapper">
        <span className="video-white-x" onClick={() => handleModal(false)}>
          x
        </span>

        {isMobile ? (
          <YouTube videoId={props.jh_71Ig00js} opts={mobileOpts} />
        ) : (
          <YouTube videoId={props.videoID} opts={opts} />
          )}
        </div>
      </div>


        </div>
      </div>     
      
      
      
      <DarkFooter /></>
  );
}

export default MusicPage;