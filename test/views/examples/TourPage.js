import React, { useState } from "react";
import axios from "axios";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function TourPage() {
  const [location,setLocation] = useState("Seoul");

  React.useEffect(() => {
    document.body.classList.add("tour-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("tour-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  // function handleSubmit(e)

  const location1 = () => {
    
    setLocation("Seoul");
   }
   const location2 = () => {
    setLocation("Busan");
  }
  const location3 = () => {
    setLocation("Daegu");
  }
  const location4 = () => {
    setLocation("Incheon");
  }
  const location5 = () => {
    setLocation("Gwangju");
  }
  const location6 = () => {
    setLocation("Daejeon");
  }
  const location7 = () => {
    setLocation("Ulsan");
  }
  const location8 = () => {
    setLocation("Gyeong-gi");
  }
  const location9 = () => {
    setLocation("Gang-won");
  }
  const location10 = () => {
    setLocation("Chungbug");
  }
  const location11 = () => {
    setLocation("Chungnam");
  }
  const location12 = () => {
    setLocation("Jeonbug");
  }
  const location13 = () => {
    setLocation("Jeonnam");
  }
  const location14 = () => {
    setLocation("Gyeongbug");
  }
  const location15 = () => {
    setLocation("Gyeongnam");
  }
  const location16 = () => {
    setLocation("Jeju");
  }

function Locationlist(location){
switch (location){
//target="_blank" rel=”noopener noreferrer”
//rel=”noopener noreferrer”
case'Seoul':
return <>  <div class="zoneCont1 zone_cont on">
      {/*<div id="arearight">
      <div id="area-right" id="area3">
        <ul>
          <li class="obj1 clfix">
           <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div>
          </li>
          <li class="obj2 clfix">
            <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div>
          </li>
          <li class="obj2 clfix">
            <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div>4개일때
          </li>
        </ul>

      </div>

    </div> */}
    {/* <div id="arearight">
      <div id="area-right" id="area4">
        <ul>
          <li class="obj1 clfix">
            {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div>
          </li>
          <li class="obj2 clfix">
            <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div>
          </li>
          <li class="obj3 clfix">
            {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            {/* 5개일때
          </li>
        </ul>

      </div>

    </div> */}
    <div class="list_sub">
      <div class="inr">
        {/* <ul class="clfix" id="sigungulist">
          <li>
            <a href="https://www.gangnam.go.kr/office/gfac/main.do" target="blank" rel="noopener noreferrer" title="강남구 문화관광 홈페이지_새창">강남구
            </a>
          </li>
          <li>
            <a href="https://www.gangdong.go.kr/culture/" target="blank" rel="noopener noreferrer" title="강동구 문화관광 홈페이지_새창">강동구
            </a>
          </li>
          <li>
            <a href="https://www.gangbuk.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="강북구 문화관광 홈페이지_새창">강북구
            </a>
          </li>
          <li>
            <a href="http://www.gangseo.seoul.kr/site/munhwa/index.jsp" target="blank" rel="noopener noreferrer" title="강서구 문화관광 홈페이지_새창">강서구
            </a>
          </li>
          <li>
            <a href="http://www.gwanak.go.kr/site/gwanak/area/areaMain.do?cateCont=Area02" target="blank" rel="noopener noreferrer" title="관악구 문화관광 홈페이지_새창">관악구
            </a>
          </li>
          <li>
            <a href="https://www.gwangjin.go.kr/portal/main/contents.do?menuNo=200241" target="blank" rel="noopener noreferrer" title="광진구 문화관광 홈페이지_새창">광진구
            </a>
          </li>
          <li>
            <a href="https://www.guro.go.kr/www/selectBbsNttList.do?bbsNo=668&key=1796&" target="blank" rel="noopener noreferrer" title="구로구 문화관광 홈페이지_새창">구로구
            </a>
          </li>
          <li>
            <a href="https://www.geumcheon.go.kr/portal/contents.do?key=954" target="blank" rel="noopener noreferrer" title="금천구 문화관광 홈페이지_새창">금천구
            </a>
          </li>
          <li>
            <a href="https://www.nowon.kr/www/info/info1/info1_01.jsp" target="blank" rel="noopener noreferrer" title="노원구 문화관광 홈페이지_새창">노원구
            </a>
          </li>
          <li>
            <a href="https://tour.dobong.go.kr/" target="blank" rel="noopener noreferrer" title="도봉구 문화관광 홈페이지_새창">도봉구
            </a>
          </li>
          <li>
            <a href="http://www.ddm.go.kr/tour/main" target="blank" rel="noopener noreferrer" title="동대문구 문화관광 홈페이지_새창">동대문구
            </a>
          </li>
          <li>
            <a href="http://www.dongjak.go.kr/portal/main/contents.do?menuNo=201107" target="blank" rel="noopener noreferrer" title="동작구 문화관광 홈페이지_새창">동작구
            </a>
          </li>
          <li>
            <a href="https://www.mapo.go.kr/site/culture/home" target="blank" rel="noopener noreferrer" title="마포구 문화관광 홈페이지_새창">마포구
            </a>
          </li>
          <li>
            <a href="http://www.sdm.go.kr/culture/index.do" target="blank" rel="noopener noreferrer" title="서대문구 문화관광 홈페이지_새창">서대문구
            </a>
          </li>
          <li>
            <a href="https://www.seocho.go.kr/site/seocho/cultureCitySeocho.do" target="blank" rel="noopener noreferrer" title="서초구 문화관광 홈페이지_새창">서초구
            </a>
          </li>
          <li>
            <a href="https://www.sd.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="성동구 문화관광 홈페이지_새창">성동구
            </a>
          </li>
          <li>
            <a href="http://www.sb.go.kr/tour/mainPage.do" target="blank" rel="noopener noreferrer" title="성북구 문화관광 홈페이지_새창">성북구
            </a>
          </li>
          <li>
            <a href="https://www.songpa.go.kr/culture/index.do" target="blank" rel="noopener noreferrer" title="송파구 문화관광 홈페이지_새창">송파구
            </a>
          </li>
          <li>
            <a href="https://www.yangcheon.go.kr/site/yangcheon/ex/bbs/List.do?cbIdx=354" target="blank" rel="noopener noreferrer" title="양천구 문화관광 홈페이지_새창">양천구
            </a>
          </li>
          <li>
            <a href="https://www.ydp.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="영등포구 문화관광 홈페이지_새창">영등포구
            </a>
          </li>
          <li>
            <a href="https://www.yongsan.go.kr/site/ct/index.jsp" target="blank" rel="noopener noreferrer" title="용산구 문화관광 홈페이지_새창">용산구
            </a>
          </li>
          <li>
            <a href="https://www.ep.go.kr/CmsWeb/viewPage.req?idx=PG0000003320" target="blank" rel="noopener noreferrer" title="은평구 문화관광 홈페이지_새창">은평구
            </a>
          </li>
          <li>
            <a href="https://tour.jongno.go.kr/tourMain.do" target="blank" rel="noopener noreferrer" title="종로구 문화관광 홈페이지_새창">종로구
            </a>
          </li>
          <li>
            <a href="http://www.junggu.seoul.kr/tour/" target="blank" rel="noopener noreferrer" title="중구 문화관광 홈페이지_새창">중구
            </a>
          </li>
          <li>
            <a href="https://www.jungnang.go.kr/portal/main/contents.do?menuNo=200371" target="blank" rel="noopener noreferrer" title="중랑구 문화관광 홈페이지_새창">중랑구
            </a>
          </li>
        </ul> */}
      </div>
      <div class="area_left" id="arealeft">
      <span>
        "API"
      </span>
    </div>
      <div class="txt_info">
      </div>
      <div class="box_logo" id="boxLogo">
  <a href="https://korean.visitseoul.net/index" target="blank" rel="noopener noreferrer" class="logo" title="서울 홈페이지 새 창 열림">
    <strong class="name">서울</strong>
  </a><a href="https://korean.visitseoul.net/index" target="blank" rel="noopener noreferrer">너와 나의 서울</a></div>
  <div class="area_mid" id="areamid">
      {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
    "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
      <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
    </a>
    </div> */}
    </div>
    </div>
  </div></> ;

case 'Busan' :
  return <><div class="box_logo" id="boxLogo">
    <a href="https://www.visitbusan.net/kr/index.do" target="blank" rel="noopener noreferrer" class="logo" title="부산 홈페이지 새 창 열림">
      <strong class="name">부산</strong>
    </a><a href="https://www.visitbusan.net/kr/index.do" target="blank" rel="noopener noreferrer">너와 나의 부산</a></div><div class="zoneCont2 zone_cont on">
      <div class="area_mid" id="areamid">
        {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
    "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
      <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
    </a>
    </div> */}
      </div>
      <div class="area_left" id="arealeft">
        <span>
          "API"
        </span>
        <div class="txt_info">
        </div>
      </div>
      <div id="arearight">
        <div id="area-right" id="area3">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 4개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div id="arearight">
        <div id="area-right" id="area4">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj3 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 5개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div class="list_sub">
        <div class="inr">
          {/* <ul class="clfix" id="sigungulist">
            <li>
              <a href="https://www.bsgangseo.go.kr/visit/main.do" target="blank" rel="noopener noreferrer" title="강서구 문화관광 홈페이지_새창">강서구
              </a>
            </li>
            <li>
              <a href="https://www.geumjeong.go.kr/tour/index.geumj" target="blank" rel="noopener noreferrer" title="금정구 문화관광 홈페이지_새창">금정구
              </a>
            </li>
            <li>
              <a href="https://www.gijang.go.kr/tour/index.gijang" target="blank" rel="noopener noreferrer" title="기장구 문화관광 홈페이지_새창">기장구
              </a>
            </li>
            <li>
              <a href="https://www.bsnamgu.go.kr/index.namgu?menuCd=DOM_000000116000000000" target="blank" rel="noopener noreferrer" title="남구 문화관광 홈페이지_새창">남구
              </a>
            </li>
            <li>
              <a href="http://www.bsdonggu.go.kr/tour/index.donggu" target="blank" rel="noopener noreferrer" title="동구 문화관광 홈페이지_새창">동구
              </a>
            </li>
            <li>
              <a href="http://www.dongnae.go.kr/tour/index.dongnae" target="blank" rel="noopener noreferrer" title="동래구 문화관광 홈페이지_새창">동래구
              </a>
            </li>
            <li>
              <a href="https://www.busanjin.go.kr/" target="blank" rel="noopener noreferrer" title="부산진구 문화관광 홈페이지_새창">부산진구
              </a>
            </li>
            <li>
              <a href="https://www.bsbukgu.go.kr/tour/index.bsbukgu" target="blank" rel="noopener noreferrer" title="북구 문화관광 홈페이지_새창">북구
              </a>
            </li>
            <li>
              <a href="https://www.sasang.go.kr/tour/index.sasang" target="blank" rel="noopener noreferrer" title="사상구 문화관광 홈페이지_새창">사상구
              </a>
            </li>
            <li>
              <a href="http://www.saha.go.kr/tour/main.do" target="blank" rel="noopener noreferrer" title="사하구 문화관광 홈페이지_새창">사하구
              </a>
            </li>
            <li>
              <a href="https://www.bsseogu.go.kr/tour/index.bsseogu" target="blank" rel="noopener noreferrer" title="서구 문화관광 홈페이지_새창">서구
              </a>
            </li>
            <li>
              <a href="https://www.suyeong.go.kr/tour/index.suyeong" target="blank" rel="noopener noreferrer" title="수영구 문화관광 홈페이지_새창">수영구
              </a>
            </li>
            <li>
              <a href="http://www.yeonje.go.kr/tour/main.do" target="blank" rel="noopener noreferrer" title="연제구 문화관광 홈페이지_새창">연제구
              </a>
            </li><li>
              <a href="https://www.yeongdo.go.kr/tour.web" target="blank" rel="noopener noreferrer" title="영도구 문화관광 홈페이지_새창">영도구
              </a>
            </li>
            <li>
              <a href="http://www.bsjunggu.go.kr/tour/index.junggu" target="blank" rel="noopener noreferrer" title="중구 문화관광 홈페이지_새창">중구
              </a>
            </li>
            <li>
              <a href="https://www.haeundae.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="해운대구 문화관광 홈페이지_새창">해운대구
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div></> ;

case 'Daegu' :
  return <><div class="box_logo" id="boxLogo">
    <a href="https://tour.daegu.go.kr/" target="blank" rel="noopener noreferrer" class="logo" title="대구 홈페이지 새 창 열림">
      <strong class="name">대구</strong>
    </a><a href="https://tour.daegu.go.kr/" target="blank" rel="noopener noreferrer">너와 나의 대구</a></div><div class="zoneCont3 zone_cont on">
      <div class="area_mid" id="areamid">
        {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
    "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
      <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
    </a>
    </div> */}
      </div>
      <div class="area_left" id="arealeft">
        <span>
          "API"
        </span>
        <div class="txt_info">
        </div>
      </div>
      <div id="arearight">
        <div id="area-right" id="area3">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 4개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div id="arearight">
        <div id="area-right" id="area4">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj3 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 5개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div class="list_sub">
        <div class="inr">
          {/* <ul class="clfix" id="sigungulist">
            <li>
              <a href="https://www.nam.daegu.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="남구 문화관광 홈페이지_새창">남구
              </a>
            </li>
            <li>
              <a href="https://www.dalseo.daegu.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="달서구 문화관광 홈페이지_새창">달서구
              </a>
            </li>
            <li>
              <a href="https://www.dalseong.daegu.kr/culture/index.do" target="blank" rel="noopener noreferrer" title="달성구 문화관광 홈페이지_새창">달성구
              </a>
            </li>
            <li>
              <a href="https://www.dong.daegu.kr/main/page.htm?mnu_uid=52" target="blank" rel="noopener noreferrer" title="동구 문화관광 홈페이지_새창">동구
              </a>
            </li>
            <li>
              <a href="https://daegubukgu.noblapp.com/client/index.html" target="blank" rel="noopener noreferrer" title="북구 문화관광 홈페이지_새창">북구
              </a>
            </li>
            <li>
              <a href="https://www.dgs.go.kr/tour/" target="blank" rel="noopener noreferrer" title="서구 문화관광 홈페이지_새창">서구
              </a>
            </li>
            <li>
              <a href="https://www.suseong.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="수성구 문화관광 홈페이지_새창">수성구
              </a>
            </li>
            <li>
              <a href="https://www.jung.daegu.kr/new/culture/pages/main/" target="blank" rel="noopener noreferrer" title="중구 문화관광 홈페이지_새창">중구
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div></> ;
case "Incheon":
  return <><div class="box_logo" id="boxLogo">
    <a href="https://itour.incheon.go.kr/" target="blank" rel="noopener noreferrer" class="logo" title="인천 홈페이지 새 창 열림">
      <strong class="name">인천</strong>
    </a><a href="https://itour.incheon.go.kr/" target="blank" rel="noopener noreferrer">너와 나의 인천</a></div><div class="zoneCont4 zone_cont on">
      <div class="area_mid" id="areamid">
        {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
    "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
      <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
    </a>
    </div> */}
      </div>
      <div class="area_left" id="arealeft">
        <span>
          "API"
        </span>
        <div class="txt_info">
        </div>
      </div>
      <div id="arearight">
        <div id="area-right" id="area3">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 4개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div id="arearight">
        <div id="area-right" id="area4">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj3 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 5개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div class="list_sub">
        <div class="inr">
          {/* <ul class="clfix" id="sigungulist">
            <li>
              <a href="https://www.ganghwa.go.kr/open_content/tour/" target="blank" rel="noopener noreferrer" title="강화군 문화관광 홈페이지_새창">강화군
              </a>
            </li>
            <li>
              <a href="https://www.gyeyang.go.kr/open_content/tour/" target="blank" rel="noopener noreferrer" title="계양구 문화관광 홈페이지_새창">계양구
              </a>
            </li>
            <li>
              <a href="https://www.michuhol.go.kr/culture/main.do" target="blank" rel="noopener noreferrer" title="미추홀구 문화관광 홈페이지_새창">미추홀구
              </a>
            </li>
            <li>
              <a href="https://www.namdong.go.kr/main/area/culture/facility.jsp" target="blank" rel="noopener noreferrer" title="남동구 문화관광 홈페이지_새창">남동구
              </a>
            </li>
            <li>
              <a href="https://www.icdonggu.go.kr/open_content/culture/" target="blank" rel="noopener noreferrer" title="동구 문화관광 홈페이지_새창">동구
              </a>
            </li>
            <li>
              <a href="https://www.icbp.go.kr/tour/" target="blank" rel="noopener noreferrer" title="부평구 문화관광 홈페이지_새창">부평구
              </a>
            </li>
            <li>
              <a href="https://www.seo.incheon.kr/open_content/tour/" target="blank" rel="noopener noreferrer" title="서구 문화관광 홈페이지_새창">서구
              </a>
            </li>
            <li>
              <a href="https://www.yeonsu.go.kr/tour/" target="blank" rel="noopener noreferrer" title="연수구 문화관광 홈페이지_새창">연수구
              </a>
            </li>
            <li>
              <a href="https://www.ongjin.go.kr/open_content/tour/" target="blank" rel="noopener noreferrer" title="옹진구 문화관광 홈페이지_새창">옹진구
              </a>
            </li>
            <li>
              <a href="https://www.icjg.go.kr/tour/index" target="blank" rel="noopener noreferrer" title="중구 문화관광 홈페이지_새창">중구
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div></>;
 case "Gwangju" :
  return    <><div class="box_logo" id="boxLogo">
    <a href="https://www.gwangju.go.kr/culture/" target="blank" rel="noopener noreferrer" class="logo" title="광주 홈페이지 새 창 열림">
      <strong class="name">광주</strong>
    </a><a href="https://www.gwangju.go.kr/culture/" target="blank" rel="noopener noreferrer">너와 나의 광주</a></div><div class="zoneCont5 zone_cont on">
      <div class="area_mid" id="areamid">
        {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
    "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
      <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
    </a>
    </div> */}
      </div>
      <div class="area_left" id="arealeft">
        <span>
          "API"
        </span>
        <div class="txt_info">
        </div>
      </div>
      <div id="arearight">
        <div id="area-right" id="area3">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 4개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div id="arearight">
        <div id="area-right" id="area4">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj3 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 5개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div class="list_sub">
        <div class="inr">
          {/* <ul class="clfix" id="sigungulist">
            <li>
              <a href="https://www.gwangsan.go.kr/culture/index.php" target="blank" rel="noopener noreferrer" title="광산구 문화관광 홈페이지_새창">광산구
              </a>
            </li>
            <li>
              <a href="https://www.namgu.gwangju.kr/index.es?sid=a7" target="blank" rel="noopener noreferrer" title="남구 문화관광 홈페이지_새창">남구
              </a>
            </li>
            <li>
              <a href="https://www.donggu.kr/index.es?sid=a9" target="blank" rel="noopener noreferrer" title="동구 문화관광 홈페이지_새창">동구
              </a>
            </li>
            <li>
              <a href="https://bukgu.gwangju.kr/culture/" target="blank" rel="noopener noreferrer" title="북구 문화관광 홈페이지_새창">북구
              </a>
            </li>
            <li>
              <a href="http://www.seogu.gwangju.kr/culture/index.9is?contentUid=4028484950895ab20151186f742f0f8a" target="blank" rel="noopener noreferrer" title="서구 문화관광 홈페이지_새창">서구
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div></>

 case "Daejeon" :
  return       <><div class="box_logo" id="boxLogo">
    <a href="https://www.daejeon.go.kr/tou/index.do" target="blank" rel="noopener noreferrer" class="logo" title="대전 홈페이지 새 창 열림">
      <strong class="name">대전</strong>
    </a><a href="https://www.daejeon.go.kr/tou/index.do" target="blank" rel="noopener noreferrer">너와 나의 대전</a></div><div class="zoneCont6 zone_cont on">
      <div class="area_mid" id="areamid">
        {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
    "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
      <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
    </a>
    </div> */}
      </div>
      <div class="area_left" id="arealeft">
        <span>
          "API"
        </span>
        <div class="txt_info">
        </div>
      </div>
      <div id="arearight">
        <div id="area-right" id="area3">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 4개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div id="arearight">
        <div id="area-right" id="area4">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj3 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 5개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div class="list_sub">
        <div class="inr">
          {/* <ul class="clfix" id="sigungulist">
            <li>
              <a href="https://www.daedeok.go.kr/ect/ECT.do" target="blank" rel="noopener noreferrer" title="대덕구 문화관광 홈페이지_새창">대덕구
              </a>
            </li>
            <li>
              <a href="https://www.donggu.go.kr/dg/tour" target="blank" rel="noopener noreferrer" title="동구 문화관광 홈페이지_새창">동구
              </a>
            </li>
            <li>
              <a href="https://www.seogu.go.kr/tour/main.do" target="blank" rel="noopener noreferrer" title="서구 문화관광 홈페이지_새창">서구
              </a>
            </li>
            <li>
              <a href="https://www.yuseong.go.kr/tour/" target="blank" rel="noopener noreferrer" title="유성구 문화관광 홈페이지_새창">유성구
              </a>
            </li>
            <li>
              <a href="https://www.djjunggu.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="중구 문화관광 홈페이지_새창">중구
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div></>

case "Ulsan" :
  return      <><div class="box_logo" id="boxLogo">
    <a href="https://tour.ulsan.go.kr/index.ulsan" target="blank" rel="noopener noreferrer" class="logo" title="울산 홈페이지 새 창 열림">
      <strong class="name">울산</strong>
    </a><a href="https://tour.ulsan.go.kr/index.ulsan" target="blank" rel="noopener noreferrer">너와 나의 울산</a></div><div class="zoneCont7 zone_cont on">
      <div class="area_mid" id="areamid">
        {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
    "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
      <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
    </a>
    </div> */}
      </div>
      <div class="area_left" id="arealeft">
        <span>
          "API"
        </span>
        <div class="txt_info">
        </div>
      </div>
      <div id="arearight">
        <div id="area-right" id="area3">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 4개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div id="arearight">
        <div id="area-right" id="area4">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj3 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 5개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div class="list_sub">
        <div class="inr">
          {/* <ul class="clfix" id="sigungulist">
            <li>
              <a href="https://www.junggu.ulsan.kr/tour/index.ulsan" target="blank" rel="noopener noreferrer" title="중구 문화관광 홈페이지_새창">중구
              </a>
            </li>
            <li>
              <a href="https://www.ulsannamgu.go.kr/tour/main.do" target="blank" rel="noopener noreferrer" title="남구 문화관광 홈페이지_새창">남구
              </a>
            </li>
            <li>
              <a href="https://www.donggu.ulsan.kr/tour/cmm/main/mainPage.do" target="blank" rel="noopener noreferrer" title="동구 문화관광 홈페이지_새창">동구
              </a>
            </li>
            <li>
              <a href="https://www.bukgu.ulsan.kr/lay1/S1T203C306/contents.do" target="blank" rel="noopener noreferrer" title="북구 문화관광 홈페이지_새창">북구
              </a>
            </li>
            <li>
              <a href="https://tour.ulju.ulsan.kr/" target="blank" rel="noopener noreferrer" title="울주군 문화관광 홈페이지_새창">울주군
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div></>
  
case "Gyeong-gi" :
  return        <><div class="box_logo" id="boxLogo">
    <a href="https://www.ggtour.or.kr/" target="blank" rel="noopener noreferrer" class="logo" title="경기 홈페이지 새 창 열림">
      <strong class="name">경기</strong>
    </a><a href="https://www.ggtour.or.kr/" target="blank" rel="noopener noreferrer">너와 나의 경기</a></div><div class="zoneCont9 zone_cont on">
      <div class="area_mid" id="areamid">
        {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
    "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
      <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
    </a>
    </div> */}
      </div>
      <div class="area_left" id="arealeft">
        <span>
          "API"
        </span>
        <div class="txt_info">
        </div>
      </div>
      <div id="arearight">
        <div id="area-right" id="area3">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 4개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div id="arearight">
        <div id="area-right" id="area4">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj3 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 5개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div class="list_sub">
        <div class="inr">
          {/* <ul class="clfix" id="sigungulist">
            <li>
              <a href="https://www.gptour.go.kr/" target="blank" rel="noopener noreferrer" title="가평군 문화관광 홈페이지_새창">가평군
              </a>
            </li>
            <li>
              <a href="https://www.goyang.go.kr/visitgoyang/index.asp" target="blank" rel="noopener noreferrer" title="고양시 문화관광 홈페이지_새창">고양시
              </a>
            </li>
            <li>
              <a href="https://www.gccity.go.kr/dept/contents.do?mId=0801010000" target="blank" rel="noopener noreferrer" title="과천시 문화관광 홈페이지_새창">과천시
              </a>
            </li>
            <li>
              <a href="http://www.gm.go.kr/tr/index.do" target="blank" rel="noopener noreferrer" title="광명시 문화관광 홈페이지_새창">광명시
              </a>
            </li>
            <li>
              <a href="https://www.gjcity.go.kr/tour/main.do" target="blank" rel="noopener noreferrer" title="광주시 문화관광 홈페이지_새창">광주시
              </a>
            </li>
            <li>
              <a href="http://www.guri.go.kr/main/cul" target="blank" rel="noopener noreferrer" title="구리시 문화관광 홈페이지_새창">구리시
              </a>
            </li>
            <li>
              <a href="http://www.gunpo.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="군포시 문화관광 홈페이지_새창">군포시
              </a>
            </li>
            <li>
              <a href="https://www.gimpo.go.kr/culture/index.do" target="blank" rel="noopener noreferrer" title="김포시 문화관광 홈페이지_새창">김포시
              </a>
            </li>
            <li>
              <a href="https://www.nyj.go.kr/culture/223" target="blank" rel="noopener noreferrer" title="남양주시 문화관광 홈페이지_새창">남양주시
              </a>
            </li>
            <li>
              <a href="https://www.ddc.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="동두천시 문화관광 홈페이지_새창">동두천시
              </a>
            </li>
            <li>
              <a href="http://www.bucheon.go.kr/site/homepage/menu/viewMenu?menuid=148006001001001" target="blank" rel="noopener noreferrer" title="부천시 문화관광 홈페이지_새창">부천시
              </a>
            </li>
            <li>
              <a href="https://www.seongnam.go.kr/tour" target="blank" rel="noopener noreferrer" title="성남시 문화관광 홈페이지_새창">성남시
              </a>
            </li>
            <li>
              <a href="https://www.suwon.go.kr/web/visitsuwon/index.do" target="blank" rel="noopener noreferrer" title="수원시 문화관광 홈페이지_새창">수원시
              </a>
            </li><li>
              <a href="https://www.siheung.go.kr/portal/contents.do?mId=0801010000" target="blank" rel="noopener noreferrer" title="시흥시 문화관광 홈페이지_새창">시흥시
              </a>
            </li>
            <li>
              <a href="https://tourinfo.ansan.go.kr/main.do" target="blank" rel="noopener noreferrer" title="안산시 문화관광 홈페이지_새창">안산시
              </a>
            </li>
            <li>
              <a href="https://www.anseong.go.kr/tour/main.do" target="blank" rel="noopener noreferrer" title="안성시 문화관광 홈페이지_새창">안성시
              </a>
            </li>
            <li>
              <a href="https://www.anyang.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="얀양시 문화관광 홈페이지_새창">얀양시
              </a>
            </li>
            <li>
              <a href="https://www.yangju.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="양주시 문화관광 홈페이지_새창">양주시
              </a>
            </li>
            <li>
              <a href="https://tour.yp21.go.kr/www/index.do" target="blank" rel="noopener noreferrer" title="양평군 문화관광 홈페이지_새창">양평군
              </a>
            </li>
            <li>
              <a href="https://www.yeoju.go.kr/main/culture/" target="blank" rel="noopener noreferrer" title="여주시 문화관광 홈페이지_새창">여주시
              </a>
            </li>
            <li>
              <a href="https://www.yeoncheon.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="연천군 문화관광 홈페이지_새창">연천군
              </a>
            </li>
            <li>
              <a href="https://www.osan.go.kr/depart/contents.do?mId=0901010100" target="blank" rel="noopener noreferrer" title="오산시 문화관광 홈페이지_새창">오산시
              </a>
            </li>
            <li>
              <a href="https://www.yongin.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="용인시 문화관광 홈페이지_새창">용인시
              </a>
            </li>
            <li>
              <a href="http://www.uiwang.go.kr/culture/index" target="blank" rel="noopener noreferrer" title="의왕시 문화관광 홈페이지_새창">의왕시                      </a>
            </li>
            <li>
              <a href="https://www.ui4u.go.kr/tour/main.do" target="blank" rel="noopener noreferrer" title="의정부시 문화관광 홈페이지_새창">의정부시
              </a>
            </li>
            <li>
              <a href="https://www.icheon.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="이천시 문화관광 홈페이지_새창">이천시
              </a>
            </li>
            <li>
              <a href="https://tour.paju.go.kr/user/tour/main/index.do" target="blank" rel="noopener noreferrer" title="파주시 문화관광 홈페이지_새창">파주시
              </a>
            </li>
            <li>
              <a href="https://www.pyeongtaek.go.kr/tour/main.do" target="blank" rel="noopener noreferrer" title="평택시 문화관광 홈페이지_새창">평택시
              </a>
            </li>
            <li>
              <a href="https://www.pocheon.go.kr/ktour/index.do" target="blank" rel="noopener noreferrer" title="포천시 문화관광 홈페이지_새창">포천시
              </a>
            </li>
            <li>
              <a href="https://www.hanam.go.kr/www/contents.do?key=182" target="blank" rel="noopener noreferrer" title="하남시 문화관광 홈페이지_새창">하남시
              </a>
            </li>
            <li>
              <a href="https://tour.hscity.go.kr/NEW/0index/index.jsp" target="blank" rel="noopener noreferrer" title="화성시 문화관광 홈페이지_새창">화성시
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div></>

case "Gang-won" :
  return        <><div class="box_logo" id="boxLogo">
    <a href="https://www.gangwon.to/gwtour" target="blank" rel="noopener noreferrer" class="logo" title="강원 홈페이지 새 창 열림">
      <strong class="name">강원</strong>
    </a><a href="https://www.gangwon.to/gwtour" target="blank" rel="noopener noreferrer">너와 나의 강원</a></div><div class="zoneCont10 zone_cont on">
      <div class="area_mid" id="areamid">
        {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
    "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
      <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
    </a>
    </div> */}
      </div>
      <div class="area_left" id="arealeft">
        <span>
          "API"
        </span>
        <div class="txt_info">
        </div>
      </div>
      <div id="arearight">
        <div id="area-right" id="area3">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 4개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div id="arearight">
        <div id="area-right" id="area4">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj3 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 5개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div class="list_sub">
        <div class="inr">
          {/* <ul class="clfix" id="sigungulist">
            <li>
              <a href="https://www.gn.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="강릉시 문화관광 홈페이지_새창">강릉시
              </a>
            </li>
            <li>
              <a href="https://www.gwgs.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="고성군 문화관광 홈페이지_새창">고성군
              </a>
            </li>
            <li>
              <a href="https://www.dh.go.kr/tour/" target="blank" rel="noopener noreferrer" title="동해시 문화관광 홈페이지_새창">동해시
              </a>
            </li>
            <li>
              <a href="https://www.samcheok.go.kr/tour.web" target="blank" rel="noopener noreferrer" title="삼척시 문화관광 홈페이지_새창">삼척시
              </a>
            </li>
            <li>
              <a href="https://sokchotour.com/" target="blank" rel="noopener noreferrer" title="속초시 문화관광 홈페이지_새창">속초시
              </a>
            </li>
            <li>
              <a href="https://www.ygtour.kr/Home/index" target="blank" rel="noopener noreferrer" title="양구군 문화관광 홈페이지_새창">양구군
              </a>
            </li>
            <li>
              <a href="https://tour.yangyang.go.kr/tour" target="blank" rel="noopener noreferrer" title="양양군 문화관광 홈페이지_새창">양양군
              </a>
            </li>
            <li>
              <a href="https://www.yw.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="영월군 문화관광 홈페이지_새창">영월군
              </a>
            </li>
            <li>
              <a href="https://www.wonju.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="원주시 문화관광 홈페이지_새창">원주시
              </a>
            </li>
            <li>
              <a href="http://tour.inje.go.kr/tour" target="blank" rel="noopener noreferrer" title="인제군 문화관광 홈페이지_새창">인제군
              </a>
            </li>
            <li>
              <a href="http://www.jeongseon.go.kr/tour/jeongseontour/attractions" target="blank" rel="noopener noreferrer" title="정선군 문화관광 홈페이지_새창">정선군
              </a>
            </li>
            <li>
              <a href="https://www.cwg.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="철원군 문화관광 홈페이지_새창">철원군
              </a>
            </li>
            <li>
              <a href="http://tour.chuncheon.go.kr/" target="blank" rel="noopener noreferrer" title="춘천시 문화관광 홈페이지_새창">춘천시
              </a>
            </li><li>
              <a href="https://tour.taebaek.go.kr/tour" target="blank" rel="noopener noreferrer" title="태백시 문화관광 홈페이지_새창">태백시
              </a>
            </li>
            <li>
              <a href="http://tour.pc.go.kr/" target="blank" rel="noopener noreferrer" title="평창군 문화관광 홈페이지_새창">평창군
              </a>
            </li>
            <li>
              <a href="https://www.hongcheon.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="홍천군 문화관광 홈페이지_새창">홍천군
              </a>
            </li>
            <li>
              <a href="https://tour.ihc.go.kr/hb/portal" target="blank" rel="noopener noreferrer" title="화천군 문화관광 홈페이지_새창">화천군
              </a>
            </li>
            <li>
              <a href="https://www.hsg.go.kr/tour.web" target="blank" rel="noopener noreferrer" title="횡성군 문화관광 홈페이지_새창">횡성군
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div></>

case "Chungbug" :
  return      <><div class="box_logo" id="boxLogo">
    <a href="https://tour.chungbuk.go.kr/www/index.do" target="blank" rel="noopener noreferrer" class="logo" title="충북 홈페이지 새 창 열림">
      <strong class="name">충북</strong>
    </a><a href="https://tour.chungbuk.go.kr/www/index.do" target="blank" rel="noopener noreferrer">너와 나의 충북</a></div><div class="zoneCont11 zone_cont on">
      <div class="area_mid" id="areamid">
        {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
    "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
      <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
    </a>
    </div> */}
      </div>
      <div class="area_left" id="arealeft">
        <span>
          "API"
        </span>
        <div class="txt_info">
        </div>
      </div>
      <div id="arearight">
        <div id="area-right" id="area3">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 4개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div id="arearight">
        <div id="area-right" id="area4">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj3 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 5개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div class="list_sub">
        <div class="inr">
          {/* <ul class="clfix" id="sigungulist">
            <li>
              <a href="https://www.goesan.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="괴산군 문화관광 홈페이지_새창">괴산군
              </a>
            </li>
            <li>
              <a href="https://www.danyang.go.kr/tour/527" target="blank" rel="noopener noreferrer" title="단양군 문화관광 홈페이지_새창">단양군
              </a>
            </li>
            <li>
              <a href="http://www.tourboeun.go.kr/tour.do" target="blank" rel="noopener noreferrer" title="보은군 문화관광 홈페이지_새창">보은군
              </a>
            </li>
            <li>
              <a href="https://yd21.go.kr/tour/" target="blank" rel="noopener noreferrer" title="영동군 문화관광 홈페이지_새창">영동군
              </a>
            </li>
            <li>
              <a href="https://www.oc.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="옥천군 문화관광 홈페이지_새창">옥천군
              </a>
            </li>
            <li>
              <a href="https://www.eumseong.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="음성군 문화관광 홈페이지_새창">음성군
              </a>
            </li>
            <li>
              <a href="https://tour.jecheon.go.kr/base/main/view" target="blank" rel="noopener noreferrer" title="제천시 문화관광 홈페이지_새창">제천시
              </a>
            </li>
            <li>
              <a href="https://www.jincheon.go.kr/site/tour/main.do" target="blank" rel="noopener noreferrer" title="진천군 문화관광 홈페이지_새창">진천군
              </a>
            </li>
            <li>
              <a href="https://www.cheongju.go.kr/ktour/index.do" target="blank" rel="noopener noreferrer" title="청주시 문화관광 홈페이지_새창">청주시
              </a>
            </li>
            <li>
              <a href="https://www.chungju.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="충주시 문화관광 홈페이지_새창">충주시
              </a>
            </li>
            <li>
              <a href="https://www.jp.go.kr/tour.do" target="blank" rel="noopener noreferrer" title="증평군 문화관광 홈페이지_새창">증평군
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div></>

case "Chungnam" :
  return      <><div class="box_logo" id="boxLogo">
    <a href="https://tour.chungnam.go.kr/html/kr/#txt" target="blank" rel="noopener noreferrer" class="logo" title="충남 홈페이지 새 창 열림">
      <strong class="name">충남</strong>
    </a><a href="https://tour.chungnam.go.kr/html/kr/#txt" target="blank" rel="noopener noreferrer">너와 나의 충남</a></div><div class="zoneCont12 zone_cont on">
      <div class="area_mid" id="areamid">
        {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
    "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
      <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
    </a>
    </div> */}
      </div>
      <div class="area_left" id="arealeft">
        <span>
          "API"
        </span>
        <div class="txt_info">
        </div>
      </div>
      <div id="arearight">
        <div id="area-right" id="area3">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 4개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div id="arearight">
        <div id="area-right" id="area4">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj3 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 5개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div class="list_sub">
        <div class="inr">
          {/* <ul class="clfix" id="sigungulist">
            <li>
              <a href="http://www.gongju.go.kr/tour/" target="blank" rel="noopener noreferrer" title="공주시 문화관광 홈페이지_새창">공주시
              </a>
            </li>
            <li>
              <a href="https://www.geumsan.go.kr/tour/" target="blank" rel="noopener noreferrer" title="금산군 문화관광 홈페이지_새창">금산군
              </a>
            </li>
            <li>
              <a href="https://www.nonsan.go.kr/tour/" target="blank" rel="noopener noreferrer" title="논산시 문화관광 홈페이지_새창">논산시
              </a>
            </li>
            <li>
              <a href="http://www.dangjin.go.kr/tour.do" target="blank" rel="noopener noreferrer" title="당진시 문화관광 홈페이지_새창">당진시
              </a>
            </li>
            <li>
              <a href="https://www.brcn.go.kr/tour.do" target="blank" rel="noopener noreferrer" title="보령시 문화관광 홈페이지_새창">보령시
              </a>
            </li>
            <li>
              <a href="https://www.buyeo.go.kr/html/tour/index.html" target="blank" rel="noopener noreferrer" title="부여군 문화관광 홈페이지_새창">부여군
              </a>
            </li>
            <li>
              <a href="https://www.seosan.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="서산시 문화관광 홈페이지_새창">서산시
              </a>
            </li>
            <li>
              <a href="https://www.asan.go.kr/tour/" target="blank" rel="noopener noreferrer" title="아산시 문화관광 홈페이지_새창">아산시
              </a>
            </li>
            <li>
              <a href="http://www.yesan.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="예산군 문화관광 홈페이지_새창">예산군
              </a>
            </li>
            <li>
              <a href="https://www.cheonan.go.kr/tour.do" target="blank" rel="noopener noreferrer" title="천안시 문화관광 홈페이지_새창">천안시
              </a>
            </li>
            <li>
              <a href="http://tour.cheongyang.go.kr/" target="blank" rel="noopener noreferrer" title="청양군 문화관광 홈페이지_새창">청양군
              </a>
            </li>
            <li>
              <a href="http://www.taean.go.kr/tour.do" target="blank" rel="noopener noreferrer" title="태안군 문화관광 홈페이지_새창">태안군
              </a>
            </li>
            <li>
              <a href="https://www.hongseong.go.kr/tour/" target="blank" rel="noopener noreferrer" title="홍성군 문화관광 홈페이지_새창">홍성군
              </a>
            </li><li>
              <a href="https://www.gyeryong.go.kr/html/tour/index.html" target="blank" rel="noopener noreferrer" title="계룡시 문화관광 홈페이지_새창">계룡시
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div></>

case "Jeonbug" :
  return <><div class="box_logo" id="boxLogo">
    <a href="https://tour.jb.go.kr/index.do" target="blank" rel="noopener noreferrer" class="logo" title="전북 홈페이지 새 창 열림">
      <strong class="name">전북</strong>
    </a><a href="https://tour.jb.go.kr/index.do" target="blank" rel="noopener noreferrer">너와 나의 전북</a></div><div class="zoneCont13 zone_cont on">
      <div class="area_mid" id="areamid">
        {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
    "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
      <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
    </a>
    </div> */}
      </div>
      <div class="area_left" id="arealeft">
        <span>
          "API"
        </span>
        <div class="txt_info">
        </div>
      </div>
      <div id="arearight">
        <div id="area-right" id="area3">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 4개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div id="arearight">
        <div id="area-right" id="area4">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj3 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 5개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div class="list_sub">
        <div class="inr">
          {/* <ul class="clfix" id="sigungulist">
            <li>
              <a href="https://www.gochang.go.kr/tour/index.gochang" target="blank" rel="noopener noreferrer" title="고창시 문화관광 홈페이지_새창">고창시
              </a>
            </li>
            <li>
              <a href="https://www.gunsan.go.kr/tour/" target="blank" rel="noopener noreferrer" title="군산시 문화관광 홈페이지_새창">군산시
              </a>
            </li>
            <li>
              <a href="https://www.gimje.go.kr/tour/index.gimje" target="blank" rel="noopener noreferrer" title="김제시 문화관광 홈페이지_새창">김제시
              </a>
            </li>
            <li>
              <a href="https://www.namwon.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="남원시 문화관광 홈페이지_새창">남원시
              </a>
            </li>
            <li>
              <a href="https://tour.muju.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="무주군 문화관광 홈페이지_새창">무주군
              </a>
            </li>
            <li>
              <a href="https://www.buan.go.kr/tour/index.buan" target="blank" rel="noopener noreferrer" title="부안군 문화관광 홈페이지_새창">부안군
              </a>
            </li>
            <li>
              <a href="http://www.sunchang.go.kr/tour/index.sunchang" target="blank" rel="noopener noreferrer" title="순창군 문화관광 홈페이지_새창">순창군
              </a>
            </li>
            <li>
              <a href="https://www.wanju.go.kr/tour/index.wanju" target="blank" rel="noopener noreferrer" title="완주군 문화관광 홈페이지_새창">완주군
              </a>
            </li>
            <li>
              <a href="https://www.iksan.go.kr/tour/index.iksan" target="blank" rel="noopener noreferrer" title="익산시 문화관광 홈페이지_새창">익산시
              </a>
            </li>
            <li>
              <a href="https://tour.imsil.go.kr/" target="blank" rel="noopener noreferrer" title="임실군 문화관광 홈페이지_새창">임실군
              </a>
            </li>
            <li>
              <a href="http://www.jangsu.go.kr/tour/index.jangsu" target="blank" rel="noopener noreferrer" title="장수군 문화관광 홈페이지_새창">장수군
              </a>
            </li>
            <li>
              <a href="https://tour.jeonju.go.kr/index.9is" target="blank" rel="noopener noreferrer" title="전주시 문화관광 홈페이지_새창">전주시
              </a>
            </li>
            <li>
              <a href="http://www.jeongeup.go.kr/culture/index.jeongeup" target="blank" rel="noopener noreferrer" title="정읍시 문화관광 홈페이지_새창">정읍시
              </a>
            </li>
            <li>
              <a href="https://jinan.go.kr/tour/" target="blank" rel="noopener noreferrer" title="진안군 문화관광 홈페이지_새창">진안군
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div></>

case "Jeonnam" :
  return        <><div class="box_logo" id="boxLogo">
    <a href="https://www.namdokorea.com/" target="blank" rel="noopener noreferrer" class="logo" title="전남 홈페이지 새 창 열림">
      <strong class="name">전남</strong>
    </a><a href="https://www.namdokorea.com/" target="blank" rel="noopener noreferrer">너와 나의 전남</a></div><div class="zoneCont14 zone_cont on">
      <div class="area_mid" id="areamid">
        {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
    "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
      <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
    </a>
    </div> */}
      </div>
      <div class="area_left" id="arealeft">
        <span>
          "API"
        </span>
        <div class="txt_info">
        </div>
      </div>
      <div id="arearight">
        <div id="area-right" id="area3">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 4개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div id="arearight">
        <div id="area-right" id="area4">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj3 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 5개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div class="list_sub">
        <div class="inr">
          {/* <ul class="clfix" id="sigungulist">
            <li>
              <a href="https://www.gangjin.go.kr/culture/index.do" target="blank" rel="noopener noreferrer" title="강진군 문화관광 홈페이지_새창">강진군
              </a>
            </li>
            <li>
              <a href="http://tour.goheung.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="고흥군 문화관광 홈페이지_새창">고흥군
              </a>
            </li>
            <li>
              <a href="https://www.gokseong.go.kr/tour/" target="blank" rel="noopener noreferrer" title="곡성군 문화관광 홈페이지_새창">곡성군
              </a>
            </li>
            <li>
              <a href="https://www.gwangyang.go.kr/tour_culture/index.gwangyang" target="blank" rel="noopener noreferrer" title="광양시 문화관광 홈페이지_새창">광양시
              </a>
            </li>
            <li>
              <a href="https://www.gurye.go.kr/tour/main.do" target="blank" rel="noopener noreferrer" title="구례군 문화관광 홈페이지_새창">구례군
              </a>
            </li>
            <li>
              <a href="https://tour.naju.go.kr/" target="blank" rel="noopener noreferrer" title="나주시 문화관광 홈페이지_새창">나주시
              </a>
            </li>
            <li>
              <a href="http://www.damyang.go.kr/tour/index.damyang" target="blank" rel="noopener noreferrer" title="담양군 문화관광 홈페이지_새창">담양군
              </a>
            </li>
            <li>
              <a href="http://www.mokpo.go.kr/tour" target="blank" rel="noopener noreferrer" title="목포시 문화관광 홈페이지_새창">목포시
              </a>
            </li>
            <li>
              <a href="https://tour.muan.go.kr/" target="blank" rel="noopener noreferrer" title="무안군 문화관광 홈페이지_새창">무안군
              </a>
            </li>
            <li>
              <a href="https://tour.boseong.go.kr/" target="blank" rel="noopener noreferrer" title="보성군 문화관광 홈페이지_새창">보성군
              </a>
            </li>
            <li>
              <a href="https://www.suncheon.go.kr/tour/" target="blank" rel="noopener noreferrer" title="순천시 문화관광 홈페이지_새창">순천시
              </a>
            </li>
            <li>
              <a href="http://tour.shinan.go.kr/" target="blank" rel="noopener noreferrer" title="신안군 문화관광 홈페이지_새창">신안군
              </a>
            </li>
            <li>
              <a href="https://www.yeosu.go.kr/tour" target="blank" rel="noopener noreferrer" title="여수시 문화관광 홈페이지_새창">여수시
              </a>
            </li><li>
              <a href="https://tour.yeonggwang.go.kr/" target="blank" rel="noopener noreferrer" title="영광군 문화관광 홈페이지_새창">영광군
              </a>
            </li>
            <li>
              <a href="https://www.yeongam.go.kr/home/tour" target="blank" rel="noopener noreferrer" title="영암군 문화관광 홈페이지_새창">영암군
              </a>
            </li>
            <li>
              <a href="https://www.wando.go.kr/tour/" target="blank" rel="noopener noreferrer" title="완도군 문화관광 홈페이지_새창">완도군
              </a>
            </li>
            <li>
              <a href="https://www.jangseong.go.kr/home/tour" target="blank" rel="noopener noreferrer" title="장성군 문화관광 홈페이지_새창">장성군
              </a>
            </li>
            <li>
              <a href="https://www.jangheung.go.kr/tour" target="blank" rel="noopener noreferrer" title="장흥군 문화관광 홈페이지_새창">장흥군
              </a>
            </li>
            <li>
              <a href="https://www.jindo.go.kr/tour/main.cs" target="blank" rel="noopener noreferrer" title="진도군 문화관광 홈페이지_새창">진도군
              </a>
            </li>
            <li>
              <a href="https://www.hampyeong.go.kr/tour/" target="blank" rel="noopener noreferrer" title="함평군 문화관광 홈페이지_새창">함평군
              </a>
            </li>
            <li>
              <a href="http://www.haenam.go.kr/tour/index.9is?contentUid=18e3368f655bdbc60166192794d9237d" target="blank" rel="noopener noreferrer" title="해남군 문화관광 홈페이지_새창">해남군
              </a>
            </li>
            <li>
              <a href="http://www.hwasun.go.kr/index.do?S=S09" target="blank" rel="noopener noreferrer" title="화순군 문화관광 홈페이지_새창">화순군
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div></>

case "Gyeongbug" :
  return        <><div class="box_logo" id="boxLogo">
    <a href="https://tour.gb.go.kr/" target="blank" rel="noopener noreferrer" class="logo" title="경북 홈페이지 새 창 열림">
      <strong class="name">경북</strong>
    </a><a href="https://tour.gb.go.kr/" target="blank" rel="noopener noreferrer">너와 나의 경북</a></div><div class="zoneCont15 zone_cont on">
      <div class="area_mid" id="areamid">
        {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
    "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
      <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
    </a>
    </div> */}
      </div>
      <div class="area_left" id="arealeft">
        <span>
          "API"
        </span>
        <div class="txt_info">
        </div>
      </div>
      <div id="arearight">
        <div id="area-right" id="area3">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 4개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div id="arearight">
        <div id="area-right" id="area4">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj3 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 5개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div class="list_sub">
        <div class="inr">
          {/* <ul class="clfix" id="sigungulist">
            <li>
              <a href="https://www.gbgs.go.kr/open_content/tour/index.do" target="blank" rel="noopener noreferrer" title="경산시 문화관광 홈페이지_새창">경산시
              </a>
            </li>
            <li>
              <a href="https://www.gyeongju.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="경주시 문화관광 홈페이지_새창">경주시
              </a>
            </li>
            <li>
              <a href="http://tour.goryeong.go.kr/kor/" target="blank" rel="noopener noreferrer" title="고령군 문화관광 홈페이지_새창">고령군
              </a>
            </li>
            <li>
              <a href="https://www.gumi.go.kr/tour/main.do" target="blank" rel="noopener noreferrer" title="구미시 문화관광 홈페이지_새창">구미시
              </a>
            </li>
            <li>
              <a href="https://www.gunwi.go.kr/fun/tour/" target="blank" rel="noopener noreferrer" title="군위군 문화관광 홈페이지_새창">군위군
              </a>
            </li>
            <li>
              <a href="https://www.gc.go.kr/culture/main.do" target="blank" rel="noopener noreferrer" title="김천시 문화관광 홈페이지_새창">김천시
              </a>
            </li>
            <li>
              <a href="https://www.gbmg.go.kr/tour/main.do" target="blank" rel="noopener noreferrer" title="문경시 문화관광 홈페이지_새창">문경시
              </a>
            </li>
            <li>
              <a href="https://www.gbmg.go.kr/tour/main.do" target="blank" rel="noopener noreferrer" title="봉화군 문화관광 홈페이지_새창">봉화군
              </a>
            </li>
            <li>
              <a href="https://www.sangju.go.kr/tour/main.tc" target="blank" rel="noopener noreferrer" title="상주시 문화관광 홈페이지_새창">상주시
              </a>
            </li>
            <li>
              <a href="https://sj.go.kr/tour/main.do" target="blank" rel="noopener noreferrer" title="성주군 문화관광 홈페이지_새창">성주군
              </a>
            </li>
            <li>
              <a href="http://www.tourandong.com/public/" target="blank" rel="noopener noreferrer" title="안동시 문화관광 홈페이지_새창">안동시
              </a>
            </li>
            <li>
              <a href="https://tour.yd.go.kr/" target="blank" rel="noopener noreferrer" title="영덕군 문화관광 홈페이지_새창">영덕군
              </a>
            </li>
            <li>
              <a href="https://www.yyg.go.kr/tour" target="blank" rel="noopener noreferrer" title="영양군 문화관광 홈페이지_새창">영양군
              </a>
            </li><li>
              <a href="https://www.yeongju.go.kr/open_content/tour/index.do" target="blank" rel="noopener noreferrer" title="영주시 문화관광 홈페이지_새창">영주시
              </a>
            </li>
            <li>
              <a href="https://www.yc.go.kr/tour/" target="blank" rel="noopener noreferrer" title="영천시 문화관광 홈페이지_새창">영천시
              </a>
            </li>
            <li>
              <a href="https://www.ycg.kr/open.content/tour/" target="blank" rel="noopener noreferrer" title="예천군 문화관광 홈페이지_새창">예천군
              </a>
            </li>
            <li>
              <a href="http://www.ulleung.go.kr/tour/" target="blank" rel="noopener noreferrer" title="울릉군 문화관광 홈페이지_새창">울릉군
              </a>
            </li>
            <li>
              <a href="https://www.uljin.go.kr/tour/index.uljin" target="blank" rel="noopener noreferrer" title="울진군 문화관광 홈페이지_새창">울진군
              </a>
            </li>
            <li>
              <a href="https://www.usc.go.kr/tour/main.tc" target="blank" rel="noopener noreferrer" title="의성군 문화관광 홈페이지_새창">의성군
              </a>
            </li>
            <li>
              <a href="https://www.cheongdo.go.kr/open.content/tour/" target="blank" rel="noopener noreferrer" title="청도군 문화관광 홈페이지_새창">청도군
              </a>
            </li>
            <li>
              <a href="https://www.cs.go.kr/tour.web" target="blank" rel="noopener noreferrer" title="청송군 문화관광 홈페이지_새창">청송군
              </a>
            </li>
            <li>
              <a href="https://www.chilgok.go.kr/tour/main.do" target="blank" rel="noopener noreferrer" title="칠곡군 문화관광 홈페이지_새창">칠곡군
              </a>
            </li>
            <li>
              <a href="https://www.pohang.go.kr/phtour/index.do" target="blank" rel="noopener noreferrer" title="포항시 문화관광 홈페이지_새창">포항시
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div></>

case "Gyeongnam" :
  return       <><div class="box_logo" id="boxLogo">
    <a href="https://tour.gyeongnam.go.kr/index.gyeong" target="blank" rel="noopener noreferrer" class="logo" title="경남 홈페이지 새 창 열림">
      <strong class="name">경남</strong>
    </a><a href="https://tour.gyeongnam.go.kr/index.gyeong" target="blank" rel="noopener noreferrer">너와 나의 경남</a></div><div class="zoneCont16 zone_cont on">
      <div class="area_mid" id="areamid">
        {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
    "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
      <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
    </a>
    </div> */}
      </div>
      <div class="area_left" id="arealeft">
        <span>
          "API"
        </span>
        <div class="txt_info">
        </div>
      </div>
      <div id="arearight">
        <div id="area-right" id="area3">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 4개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div id="arearight">
        <div id="area-right" id="area4">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj3 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 5개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div class="list_sub">
        <div class="inr">
          {/* <ul class="clfix" id="sigungulist">
            <li>
              <a href="https://tour.geoje.go.kr/index.geoje" target="blank" rel="noopener noreferrer" title="거제시 문화관광 홈페이지_새창">거제시
              </a>
            </li>
            <li>
              <a href="https://www.geochang.go.kr/tour/Index.do" target="blank" rel="noopener noreferrer" title="거창군 문화관광 홈페이지_새창">거창군
              </a>
            </li>
            <li>
              <a href="https://visit.goseong.go.kr/index.goseong" target="blank" rel="noopener noreferrer" title="고성군 문화관광 홈페이지_새창">고성군
              </a>
            </li>
            <li>
              <a href="https://www.gimhae.go.kr/tour.web" target="blank" rel="noopener noreferrer" title="김해시 문화관광 홈페이지_새창">김해시
              </a>
            </li>
            <li>
              <a href="https://www.namhae.go.kr/tour/main.web" target="blank" rel="noopener noreferrer" title="남해군 문화관광 홈페이지_새창">남해군
              </a>
            </li>
            <li>
              <a href="https://www.miryang.go.kr/tur/index.do" target="blank" rel="noopener noreferrer" title="밀양시 문화관광 홈페이지_새창">밀양시
              </a>
            </li>
            <li>
              <a href="https://toursacheon.net/" target="blank" rel="noopener noreferrer" title="사천시 문화관광 홈페이지_새창">사천시
              </a>
            </li>
            <li>
              <a href="https://www.sancheong.go.kr/tour/index.do" target="blank" rel="noopener noreferrer" title="산청군 문화관광 홈페이지_새창">산청군
              </a>
            </li>
            <li>
              <a href="https://www.yangsan.go.kr/tour/main.do" target="blank" rel="noopener noreferrer" title="양산시 문화관광 홈페이지_새창">양산시
              </a>
            </li>
            <li>
              <a href="http://www.uiryeong.go.kr/tour/index.uiryeong" target="blank" rel="noopener noreferrer" title="의령군 문화관광 홈페이지_새창">의령군
              </a>
            </li>
            <li>
              <a href="https://www.jinju.go.kr/tour.web" target="blank" rel="noopener noreferrer" title="진주시 문화관광 홈페이지_새창">진주시
              </a>
            </li>
            <li>
              <a href="https://www.cng.go.kr/tour.web" target="blank" rel="noopener noreferrer" title="창녕군 문화관광 홈페이지_새창">창녕군
              </a>
            </li>
            <li>
              <a href="http://culture.changwon.go.kr/index.changwon?contentId=9" target="blank" rel="noopener noreferrer" title="창원시 문화관광 홈페이지_새창">창원시
              </a>
            </li><li>
              <a href="https://www.utour.go.kr/utour.web" target="blank" rel="noopener noreferrer" title="통영시 문화관광 홈페이지_새창">통영시
              </a>
            </li>
            <li>
              <a href="https://www.hadong.go.kr/tour.web" target="blank" rel="noopener noreferrer" title="하동군 문화관광 홈페이지_새창">하동군
              </a>
            </li>
            <li>
              <a href="https://www.haman.go.kr/tour.web" target="blank" rel="noopener noreferrer" title="함안군 문화관광 홈페이지_새창">함안군
              </a>
            </li>
            <li>
              <a href="https://www.hygn.go.kr/tour.web" target="blank" rel="noopener noreferrer" title="함양군 문화관광 홈페이지_새창">함양군
              </a>
            </li>
            <li>
              <a href="http://www.hc.go.kr/tour.web" target="blank" rel="noopener noreferrer" title="합천군 문화관광 홈페이지_새창">합천군
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div></>

case "Jeju" :
  return      <><div class="box_logo" id="boxLogo">
    <a href="https://www.visitjeju.net/kr" target="blank" rel="noopener noreferrer" class="logo" title="제주 홈페이지 새 창 열림">
      <strong class="name">제주</strong>
    </a><a href="https://www.visitjeju.net/kr" target="blank" rel="noopener noreferrer">너와 나의 제주</a></div><div class="zoneCont17 zone_cont on">
      <div class="area_mid" id="areamid">
        {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
    "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
      <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
    </a>
    </div> */}
      </div>
      <div class="area_left" id="arealeft">
        <span>
          "API"
        </span>
        <div class="txt_info">
        </div>
      </div>
      <div id="arearight">
        <div id="area-right" id="area3">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 4개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div id="arearight">
        <div id="area-right" id="area4">
          <ul>
            <li class="obj1 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj2 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
            </li>
            <li class="obj3 clfix">
              {/* <div>
      <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
      <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
      "필름카메라📷의 매력"
      </a>
    </div> */}
              {/* 5개일때 */}
            </li>
          </ul>

        </div>

      </div>
      <div class="list_sub">
        <div class="inr">
          {/* <ul class="clfix" id="sigungulist">
            <li>
              <a href="https://www.seogwipo.go.kr/field/tourist.htm" target="blank" rel="noopener noreferrer" title="서귀포시 문화관광 홈페이지_새창">서귀포시
              </a>
            </li>
            <li>
              <a href="https://www.visitjeju.net/kr" target="blank" rel="noopener noreferrer" title="제주시 문화관광 홈페이지_새창">제주시
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div></>

default : 
   return <div></div>
}  

}

  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/bg8.jpg").default + ")",
          }}
        >

</div>
        </div>
        <div class="zone_wrap">
         <div class="list_zone">
          <div class="tit">
            <h2 id="zoneTitle">{location}</h2>
          </div>
        {/* type0 클래스 수정 */}
        <div class="swiper-container2 type0" id="zoneArr">
          {/* dot 0개일경우 class type1, dot 1개일경우 class type1, dot 2개일경우 class type2,
          dot 3개일경우 class type3 */}
          {/* //type0 클래스 수정 */}
          <div class="swiper-wrapper">
            <div id="zone1" class="swiper-slide" data-areacode="1">
              <button type="button" onClick={location1}>서울</button>
              {/* <span class="selected_text blind">선택됨</span> */}
            </div>
          <div id="zone2" class="swiper-slide" data-areacode="6">
              <button type="button" onClick={location2}>부산</button>
          </div>
          <div id="zone3" class="swiper-slide" data-areacode="4">
              <button type="button" onClick={location3}>대구</button>
          </div>
          <div id="zone4" class="swiper-slide" data-areacode="2">
              <button type="button" onClick={location4}>인천</button>
          </div>
          <div id="zone5" class="swiper-slide" data-areacode="5">
              <button type="button" onClick={location5}>광주</button>
          </div>
          <div id="zone6" class="swiper-slide" data-areacode="3">
              <button type="button" onClick={location6}>대전</button>
          </div>
          <div id="zone7" class="swiper-slide" data-areacode="7">
              <button type="button" onClick={location7}>울산</button>
          </div>
          <div id="zone9" class="swiper-slide" data-areacode="31">
              <button type="button" onClick={location8}>경기</button>
          </div>
          <div id="zone10" class="swiper-slide" data-areacode="32">
              <button type="button" onClick={location9}>강원</button>
          </div>
          <div id="zone11" class="swiper-slide" data-areacode="33">
              <button type="button" onClick={location10}>충북</button>
          </div>
          <div id="zone12" class="swiper-slide" data-areacode="34">
              <button type="button" onClick={location11}>충남</button>
          </div>
          <div id="zone13" class="swiper-slide" data-areacode="37">
              <button type="button" onClick={location12}>전북</button>
          </div>
          <div id="zone14" class="swiper-slide" data-areacode="38">
              <button type="button" onClick={location13}>전남</button>
          </div>
          <div id="zone15" class="swiper-slide" data-areacode="35">
              <button type="button" onClick={location14}>경북</button>
          </div>
          <div id="zone16" class="swiper-slide" data-areacode="36">
              <button type="button" onClick={location15}>경남</button>
          </div>
          <div id="zone17" class="swiper-slide" data-areacode="39">
              <button type="button" onClick={location16}>제주</button>
          </div>
        </div>
        </div>
        <div class="zone_box">

            {/*
            1. 하나의 div.zone_cont 안에 각각의 데이터가 새로 적용 되는 방식
            2. 탭 메뉴 클릭시 해당되는 컨텐츠에 클래스 zoneCont1~15가 추가되면서
            display:block 이 된다.
            */}
            
            {Locationlist(location)}

          </div>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default TourPage;