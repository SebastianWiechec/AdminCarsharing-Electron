/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import SignInSide from "views/SignIn/SignIn";
import SignUp from "views/SignIn/Register";
import CarProfile from "views/Car/Car";

// core components
import Admin from "layouts/Admin.js";
import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();


ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin/:id" component={Admin} />
      <Route path="/SignIn/" component={SignInSide} />
      <Route path="/Register/" component={SignUp} />
      <Route path="/Car/:idCar" component={CarProfile} />
      {/* <Redirect exact from="/" to="/SignIn/" /> */}
      <Redirect exact from="/" to="/admin/dashboard/2391ec09-dd54-4203-9f5c-bedf69e263c6" />
      {/* <Redirect from="/" to="/admin/dashboard/" /> */}


      {/* <Redirect from="/" to="/admin/dashboard/:id" /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
