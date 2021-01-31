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
import DriveEtaIcon from '@material-ui/icons/DriveEta';
//import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import Car from "views/Car/Car";
import SpendingNew from "views/Spending/Spending";
import CarProfile from "views/Car/Car";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import logList from "views/Logs/logs";



const dashboardRoutes = [
  {
    path: "/dashboard/:id",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/Car",
    name: "Car add-edit",
    rtlName: "ملف تعريفي للمستخدم",
    icon: DriveEtaIcon,
    component: Car,
    layout: "/admin"
  },
   {
     path: "/Spending/:id",
     name: "Add spending",
     rtlName: "ملف تعريفي للمستخدم",
     icon: MonetizationOnIcon,
     component: SpendingNew,
     layout: "/admin"
   },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/logs",
    name: "Log List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: logList,
    layout: "/admin"
  }

];

export default dashboardRoutes;
