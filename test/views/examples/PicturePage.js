import React, { useState } from "react";
import axios from 'axios';

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function PicturePage() {
  const [names,setNames]=useState([]);
  const [lengthss,setLengths]=useState();

  React.useEffect(() => {
    let isSubscribed = true;
    axios
    .get(
      '/api/getpicture'
    )
    .then(Response => {
      
      if (Response.status === 200) {
            
        setNames(Response.data.response.body.items.item);
        setLengths(Response.data.response.body.items.length);
        console.log(Response.data.response.body.items.length);
        console.log(Response.data.response.body.items.item);
       // check if this component still mounted
       if (isSubscribed) {
         //setLoading(false);
       }
     }
    });
    //.catch((Error)=>{console.log(Error)});

    document.body.classList.add("picture-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("picture-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  function Namelist (){
    if(lengthss != '1' && lengthss != '0' && lengthss != undefined){
    names.map((name,index)=> {
      return (
  
      
        <div className="section section-nucleo-icons">
        <Container>
            <Row key={index}>
              <Col lg="6" md="12">
                <h2 className="title" style={{color:"white"}}>{name.galTitle}</h2>
               <h5 className="description">
                 <img src= {name.galWebImageUrl}></img>
                </h5>
         
              </Col>
            </Row>
          </Container>
        </div>
    
    
     
   
  
      )
    }
  
    )
  
  }else if(lengthss == '1'|| lengthss == undefined ){
  
  if( names != undefined){
  
     return (
  
     
       <div className="section section-nucleo-icons">
       <Container>
           <Row >
             <Col lg="6" md="12">
               <h2 className="title"  style={{color:"white"}}>{names.galTitle}</h2>
              <h5 className="description">
                <img src= {names.galWebImageUrl}></img>
               </h5>
        
             </Col>
           </Row>
         </Container>
       </div>
   
   
    
  
  
     )
  }else {
    return(
      <Container>
      <Row >
        <Col lg="6" md="12">
          <h2 className="title"  style={{color:"white"}}>사진이 없어용</h2>
         <h5 className="description">
       사진이 없어용
          </h5>
   
        </Col>
      </Row>
    </Container>
    )
  }
  
  
  
  }else if( lengthss == '0' ){
    return(
      <Container>
      <Row >
        <Col lg="6" md="12">
          <h2 className="title"  style={{color:"white"}}>사진이 없어용</h2>
         <h5 className="description">
       사진이 없어용
          </h5>
   
        </Col>
      </Row>
    </Container>
    )
  }else{
    return(
      <Container>
      <Row >
        <Col lg="6" md="12">
          <h2 className="title"  style={{color:"white"}}>사진이 없어용</h2>
         <h5 className="description">
       사진이 없어용
          </h5>
   
        </Col>
      </Row>
    </Container>
    )
  }
  }
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
            <h2 id="zoneTitle">사진여행</h2>
          </div>
          <div className="section section-nucleo-icons">
          <Namelist/>
          </div>

        </div>
      </div>
      
      
      
      
      <DarkFooter /></>
  );
}

export default PicturePage;