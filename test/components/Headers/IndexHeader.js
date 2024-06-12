/*eslint-disable*/
import React, { useState } from "react";

import { Search } from 'semantic-ui-react';
// reactstrap components
import { Container } from "reactstrap";
import { valueToNode } from "@babel/types";
// core components

function IndexHeader() {
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
  const onClick = (e) =>{
    window.open("https://search.daum.net/search?w=tot&&q="+e.target.value,'_blank');
  };
  
  const onCheckEnter=(e)=>{
    
    if(e.key == 'Enter'){
      onClick(e);
    }
  }
 
  return (
    <>
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/header.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
     
          <div className="content-center brand">
            {/* <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png").default}
            ></img> */}
            <h5 style={{marginBottom:"1px"}}>Travel16에 오신 것을 환영합니다.<br/></h5>
            <h5 style={{marginTop:"5px"}}> 자신의 mbti를 통하여 맞춤형 여행지 추천을 받을 수 있습니다.</h5>
          <Search onKeyPress={onCheckEnter} input={{ fluid: true  }}  placeholder={""} style={{resizeMode:"contain" ,  width:"100%" ,opacity: 0.4}}/>
          </div>

          {/* <h6 className="category category-absolute">
            Designed by{" "}
            <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
              <img
                alt="...";
                className="invision-logo"
                src={require("assets/img/invision-white-slim.png").default}
              ></img>
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-index-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png").default}
              ></img>
            </a>
            .
          </h6> */}
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
