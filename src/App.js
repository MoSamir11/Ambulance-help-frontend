import "./App.css";
import { Button, Drawer, Grid } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import React, { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { Navbar } from "./component/Dashboard/DashboardComponent/Navbar";
import { Feed } from "./component/Dashboard/DashboardComponent/Feed";
import { Rightbar } from "./component/Dashboard/DashboardComponent/Rightbar";
import { Leftbar } from "./component/Dashboard/DashboardComponent/Leftbar";
import { Add } from "./component/Dashboard/DashboardComponent/Add";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FeedTwo } from "./component/Dashboard/DashboardComponent/FeedTwo";
import { ConsumerTemplate } from "./component/Consumer/ConsumerTemplate";
import { Dashboard } from "./component/Dashboard/Dashboard";
import { AdminTemplate } from "./component/Admin/AdminTemplate";
import { Navbar1 } from "./component/Landing/Navbar";
import { Landing } from "./component/Landing/Landing";
import { AdminDashboard } from "./component/Admin/AdminDashboard/AdminDashboard";

import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import {PrivateRoute} from './component/PrivateRoute/PrivateRoute';
import { ConsumerDashboard } from "./component/Consumer/ConsumerDashboard/ConsumerDashboard";
import { Expanding } from "./component/Carousel/expand";
import { AnExpand } from "./component/Carousel/anexpand";
import ResponsiveDrawer from "./component/Consumer/Drawer";

// import { Carousel } from "./component/Carousel/carousel";
function App() {
  const useStyles = makeStyles((theme) => ({
    button: {
      ...theme.myButton,
    },
    right: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    container: {
      paddingTop: theme.spacing(10),
    },
  }));
  const classes = useStyles();
  // const [hospital,sethospital] = useState('');

    // useEffect(()=>{
    //     const data = localStorage.getItem("Admin");
    //     console.log("72-->",data)
    //     const decoded = jwt_decode(data);
    //     console.log("74-->",decoded.data.hospitalName)
    //     sethospital(decoded.data.hospitalName)
    // },[])
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/second" component={Dashboard} />
          <Route exact path="/consumer-signup" component={ConsumerTemplate} />
          <Route exact path="/consumer-login" component={ConsumerTemplate} />
          <Route exact path="/admin-login" component={AdminTemplate} />
          <Route exact path="/admin-signup" component={AdminTemplate} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/admin-dashboard" component={AdminDashboard}/>
          <Route exact path="/admin-dashboard/add-ambulance" component={AdminDashboard}/>
          <PrivateRoute exact path="/admin-dashboard/add-staff"><AdminDashboard /></PrivateRoute>
          <Route exact path="/admin-dashboard" component={AdminDashboard} />
          <Route exact path="/consumer-dashboard" component={ConsumerDashboard} />
          <Route exact path="/consumer-dashboard/home" component={ConsumerDashboard} />
          <Route exact path="/comsumer-dashboard/aboutus" component={ConsumerDashboard} />
          <Route exact path="/consumer-dashboard/aboutus" component={ConsumerDashboard} />
          <Route exact path="/consumer-dashboard/blog" component={ConsumerDashboard} />
          <Route exact path="/drawer" component={ResponsiveDrawer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
