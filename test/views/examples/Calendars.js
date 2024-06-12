import React, { useState } from "react";

import  { Calendar, momentLocalizer  } from 'react-big-calendar'; //여기에서 이미 calendar를 ㅓimport 할 수 있게 해놓음 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from "moment"; // 밑에 언어랑 시간대 가져옴
//import Anyday from '../../Anyday';
import axios from 'axios';
import CalendarButton from './CalendarButton';

// reactstrap components
// import {
// } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DatePageHeader from "components/Headers/DatePageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
// sections for this page
// import BasicElements from "./index-sections/BasicElements.js";
// import Pagination from "./index-sections/Pagination.js";
// import Carousel from "./index-sections/Carousel.js";

function Calendars() {
 
  const [names,setNames]=useState([]);const [eventss,setEventss]=useState([]);
  const [id,setID]=useState("test");
  const [viewss,setViews]=useState();
  const [datedss,setDates]=useState();
  const localizer = momentLocalizer(moment); // 위에 import
  /*const [addresss,setLocationObj] =useState({
    locationfinal:""
  });
  const [max,setMax] =useState(0);
  const [loading,setLoading]=useState();

  */
  const navigateContants = {
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    DATE: 'DATE'
};

  React.useEffect(() => {
    let isSubscribed = true;
    axios.get('/api/getHoliDeInfo?yearss='+moment().year())
      .then(Response => {

     
          if (Response.status === 200) {
            
            setNames(Response.data.response.body.items.item);
            axios.get('/api/getschedule/'+id)
      .then(Response => {

     
          if (Response.status === 200) {
            setEventss(Response.data);
console.log(eventss )
         }
      });
           // console.log(Response.data.response.body.items.item);
         }
      });
      
      document.body.classList.add("calendars");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
        return function cleanup() {
          document.body.classList.remove("calendars");
          document.body.classList.remove("sidebar-collapse");
          isSubscribed = false
        };
   

}, []);
  

const events= names.map((data)=>{
 
  const datess= String(data.locdate).substring(0,4)+","+String(data.locdate).substring(4,6)+","+String(data.locdate).substring(6,8)
  console.log(datess)
  return {
   // id: training.id,
     
    title: data.dateName,
    start: new Date(datess),
    end: new Date(datess),
    alldat:true
  }
})
 const events2= eventss.map((data)=>{

    return {
    id: data.id,
      title: data.title,
      start:  moment(data.startdate).toDate(),
      end: moment(data.enddate).toDate(),
      alldat:data.alldat
    }
 })

const handleSlotSelect = slotInfo => {

   //if (viewss === 'month') { // assumes you got 'view' from state
  //   // ... do some date stuff to get _just the date_ from the slotInfo.start
setDates(slotInfo.start)
  setViews('day')
  //alert(datedss);
  // }
  // ... any other slot selection functionality for other views
};
//const myEventsList=Anyday; // json으로 작성한거 임시로 넣어서 밑에 있는 이벤트로 들어감

const Calendarfinal = () =>{ 
  //위에 import로 이미 캘린더는 생성이 되었고 const가 변수선언이랑 비슷한건데 이걸 .. 컴포넌트? 로 해서 밑에 넣음
  //console.log(events)
const finalevent = Object.assign(events, events2);


 // setYears()
  return(
  <div>
      <Calendar
      onSelectEvent={event => {if(event.id != null) window.open("./custom/"+event.id)}} //공휴일이랑 정한 일정 분리(?)
      localizer={localizer} //언어와 시간대
      events={finalevent}   //출퇴근 위에꺼 입력됨
      startAccessor="start" 
      endAccessor="end"
      selectable={true}
      onNavigate={datedss}
      date={datedss}
      defaultView={viewss}
      defaultDate={datedss}
      onNavigate={(date) => setDates(date)}
      getDrilldownView={(targetDate, currentViewName, configuredViewNames) =>{
        setViews(currentViewName)
        return null}
      }
      onSelectSlot={handleSlotSelect}
      style={{ height: 690 ,margin: 30, marginBottom: 40}}
    />
    

  </div>
  )
  }


  return (
    <>
    
    <div>
    <ExamplesNavbar />
        <DatePageHeader />
        <Calendarfinal /> {/* 여기에 걍 넣어준거 */}
        <CalendarButton/>
        <DarkFooter />
      </div>
    </>
  );
}

export default Calendars;