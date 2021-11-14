import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Booking from "./Pages/Booking/Booking/Booking";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import LoginMain from "./Pages/Login/LoginMain/LoginMain";
import Header from "./Pages/Shared/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AddService from "./Pages/AddService/AddService";
import MangeServices from "./Pages/MagnegeService/MangeServices";
import Footer from "./Pages/Footer/Footer";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Orders from "./Pages/Orders/Orders";
import AllOrder from "./Pages/AllOrders/AllOrder";
import Reviwe from "./Pages/Reviwe/Reviwe";
import ReviweShow from "./Pages/Reviwe/ReviweShow";
import Expoler from "./Pages/Expoler/Expoler";

import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route  path="/loginmain">
              <LoginMain></LoginMain>
            </Route>
            <Route  path="/reviwe">
              <Reviwe></Reviwe>
            </Route>
            <Route  path="/expoler">
            <Expoler></Expoler>
            </Route>
            <Route  path="/about">
            <About></About>
            </Route>
            <Route  path="/addSReview/:id">
              <ReviweShow></ReviweShow>
            </Route>
            
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/mange">
              <MangeServices></MangeServices>
            </PrivateRoute>
            <PrivateRoute path="/order/:id">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute exact path="/allOrders">
              <AllOrder></AllOrder>
            </PrivateRoute>
            <PrivateRoute  path="/deshboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
