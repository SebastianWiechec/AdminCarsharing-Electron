/* eslint-disable no-unused-vars */
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
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
//import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
//import DashboardPage from "views/Dashboard/DashboardAdmin.js";
import { default as UserDashboard } from "views/Dashboard/DashboardUser.js";
import { default as AdminDashboard } from "views/Dashboard/DashboardAdmin.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import Car from "views/Car/CarList";
import SpendingNew from "views/Spending/Spending";
import CarProfile from "views/Car/Car";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import logList from "views/Logs/logs";
import SignInSide from "views/SignIn/SignIn";
import CarList from "views/Car/CarList";
import CarAvailable from "views/Car/CarAvialable";

localStorage.setItem("role", "user");
const role = localStorage.getItem("role");

const dashboardRoutes = [
  {
    path: "/dashboard/:id",
    name: "Dashboard",
    rtlName: "???????? ??????????????",
    icon: Dashboard,
    component: role == "admin" ? AdminDashboard : UserDashboard,
    layout: "/admin",
  },
  role == "admin"
    ?  {
        path: "/CarList/:id",
        name: "Car List",
        rtlName: "?????? ???????????? ????????????????",
        icon: DriveEtaIcon,
        component: CarList,
        layout: "/admin",
      }:
      {
        path: "/user/:id",
        name: "User Profile",
        rtlName: "?????? ???????????? ????????????????",
        icon: Person,
        component: UserProfile,
        layout: "/admin",
      },
  {
    path: "/Spending/:id",
    name: "Add spending",
    rtlName: "?????? ???????????? ????????????????",
    icon: MonetizationOnIcon,
    component: SpendingNew,
    layout: "/admin",
  },
  {
    path: "/table/:id",
    name: "Table List",
    rtlName: "?????????? ????????????",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  }
  ,
  {
    path: "/Car/:id",
    name: "Car",
    rtlName: "?????? ???????????? ????????????????",
    icon: DriveEtaIcon,
    component: CarProfile,
    layout: "/admin",
  },
  role == "admin"
    ? {
        path: "/SignIn/:id",
        name: "Log In",
        rtlName: "?????????? ????????????",
        icon: "content_paste",
        component: SignInSide,
        layout: "/admin",
      }
    : {
        path: "/logs/:id",
        name: "Log List",
        rtlName: "?????????? ????????????",
        icon: "content_paste",
        component: logList,
        layout: "/admin",
      },
      {
        path: "/CarAvailable/:id",
        name: "Available cars",
        rtlName: "?????????? ??????CarAvailable??????",
        icon: "content_paste",
        component: CarAvailable,
        layout: "/admin",
      }
      
];

export default dashboardRoutes;
