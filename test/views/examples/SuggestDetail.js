import React, { useState } from "react";
import axios from 'axios';
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import ResultNavbar from "components/Navbars/ResultNavbar.js";
import ResultPageHeader from "components/Headers/ResultPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import { useParams } from "react-router-dom";

function SuggestDetail(props) {
  const [names,setNames]=useState([]);
  const [lengthss,setLengths]=useState();
  //const [loading,setLoading]=useState();
  const {word}=useParams();  

  React.useEffect(() => {
    let isSubscribed = true;
    axios
      .get(
        '/api/getPhoto?word='+word
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

      document.body.classList.add("search-page");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      return function cleanup() {
        
        document.body.classList.remove("search-page");
        document.body.classList.remove("sidebar-collapse");
        isSubscribed = false
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
    <>
      <ResultNavbar />
      <div className="wrapper">
        <ResultPageHeader />
        <div className="main">
        <div className="section section-nucleo-icons">
      <Namelist/>
      
        </div>
   
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default SuggestDetail;
