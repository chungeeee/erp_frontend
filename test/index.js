/*
=========================================================
* Now UI Kit React - v1.5.0
=========================================================
* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)
* Designed by www.invisionapp.com Coded by www.creative-tim.com
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
// import "assets/demo/demo.css?v=1.5.0";
// import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import LoginPage from "views/examples/LoginPage.js";
import JoinPage from "views/examples/JoinPage";
import BoardPage from "views/examples/BoardPage.js";
import TestPage from "views/examples/TestPage.js";
import Calendars from "views/examples/Calendars";
import TestResultPage from "views/examples/TestResultPage.js";
import SuggestDetail from "views/examples/SuggestDetail.js";
import Custom from "views/examples/Custom.js";
import BoardInput from "views/examples/BoardInput.js";
import BoardRead from "views/examples/BoardRead.js";
import TourPage from "views/examples/TourPage.js";
import CampingPage from "views/examples/CampingPage.js";
import FoodPage from "views/examples/FoodPage.js";
import MusicPage from "views/examples/MusicPage.js";
import PicchungPage from "views/examples/PicchungPage.js";
import PicturePage from "views/examples/PicturePage.js";
import WalkingPage from "views/examples/WalkingPage.js";
import QnaPage from "views/examples/QnaPage.js";
import QnaInput from "views/examples/QnaInput.js";
import QnaRead from "views/examples/QnaRead.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/calendars"
          render={(props) => <Calendars {...props} />}
        />
        <Route
          path="/board-page"
          render={(props) => <BoardPage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          path="/test-page"
          render={(props) => <TestPage {...props} />}
        />
        <Route
          path="/join-page"
          render={(props) => <JoinPage {...props} />}
        />     
        <Route
        path="/result-page/:testresult"
        render={(props) => <TestResultPage {...props} />}
        />
         <Route
        path="/suggestdetail/:word"
        render={(props) => <SuggestDetail {...props} />}
        />
         <Route
        path="/custom/:mode"
        render={(props) => <Custom {...props} />}
        />
        <Route
        path="/boardinput/:mode"
        render={(props) => <BoardInput {...props} />}
        />
        <Route
        path="/boardread/:num"
        render={(props) => <BoardRead {...props} />}
        />
        <Route
        path="/tour-page"
        render={(props) => <TourPage {...props} />}
        />
        <Route
        path="/camping-page"
        render={(props) => <CampingPage {...props} />}
        />
        <Route
        path="/food-page"
        render={(props) => <FoodPage {...props} />}
        />
        <Route
        path="/music-page"
        render={(props) => <MusicPage {...props} />}
        />
        <Route
        path="/picchung-page"
        render={(props) => <PicchungPage {...props} />}
        />
        <Route
        path="/picture-page"
        render={(props) => <PicturePage {...props} />}
        />
        <Route
        path="/walking-page"
        render={(props) => <WalkingPage {...props} />}
        />
        <Route
        path="/qna-page"
        render={(props) => <QnaPage {...props} />}
        />
                <Route
        path="/qna-input/:mode"
        render={(props) => <QnaInput {...props} />}
        />
        <Route
        path="/qna-read/:num"
        render={(props) => <QnaRead {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);