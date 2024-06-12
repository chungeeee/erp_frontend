import React from "react";

// reactstrap components

import {Container } from "reactstrap";
// core components

function DatePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
     if (window.innerWidth > 991) {
       const updateScroll = () => {
         let windowScrollTop = window.pageYOffset / 3;
         pageHeader.current.style.transform =
           "translate3d(0," + windowScrollTop + "px,0)";
       };
       window.addEventListener("scroll", updateScroll);
       return function cleanup() {
         window.removeEventListener("scroll", updateScroll);
       };
     }
  });
  return (
    <>
      <div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/hi.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">캘린더</h1>
          </Container>
        </div>
      </div>
    </>
  );
}

export default DatePageHeader;
