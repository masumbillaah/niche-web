import {useEffect,useState} from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
// import "./Dashboard.css";
import './DeshBoard.css'
import AddService from "../../../Pages/AddService/AddService";
import Reviwe from "../../../Pages/Reviwe/Reviwe";
import MakeAdmin from "../../../Pages/MakeAdmin/MakeAdmin"
import Orders from "../../../Pages/Orders/Orders"
import AllOrder from "../../../Pages/AllOrders/AllOrder"
import MangeServices from "../../MagnegeService/MangeServices"
const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { user } = useFirebase();
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
      fetch(`https://fast-bastion-56494.herokuapp.com/checkAdmin/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data[0]?.role
            === "admin") {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }

          console.log(data);
        });
    }, [user?.email]);
    console.log(isAdmin);
    return (
        <div>
        <div className="dashboard-container ">
          <div className="row">
            <div className="col-md-3 ">
              <div className="dashboard">
                <h5>Dashboard</h5>
                
  
                <Link to={`${url}/BookingList`}>
                  <li className="dashboard-menu mt-5">Booking list</li>
                </Link>
  
                <Link to={`${url}/reviwe`}>
                  <li className="dashboard-menu mt-5">Review</li>
                </Link>
                <div className="admin-dashboard">
                  
  { isAdmin &&
    
    
    <div>
  <Link to={`${url}/mange`}>
                    <li className="dashboard-menu mt-5">Manage</li>
                    </Link>
                    <Link to={`${url}/orders`}>
                    <li className="dashboard-menu mt-5">Orders</li>
                    </Link>
                   
                    <Link to={`${url}/addservice`}>
                      <li className="dashboard-menu">Add Product</li>
                    </Link>
                    <Link to={`${url}/makeAdmin`}>
                    <li className="dashboard-menu">Make Admin</li>
                </Link>
                    <Link to={`${url}/allorder`}>
                    <li className="dashboard-menu">Manage Order</li>
                </Link>
  </div>}
  
                </div>
              </div>
            </div>
            <div className="col-md-9">
             <Switch>
                <Route path={`${path}/addservice`}>
              <AddService></AddService>
              </Route>
                <Route path={`${path}/reviwe`}>
                <Reviwe></Reviwe>
              </Route>
                <Route path={`${path}/orders`}>
                <Orders></Orders>
              </Route>
                <Route path={`${path}/mange`}>
                <MangeServices></MangeServices>
              </Route>
                
                <Route path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
                <Route path={`${path}/allorder`}>
                <AllOrder></AllOrder>
              </Route>
              </Switch>
            



            </div>
          </div>
        </div>
      </div>
    );
};

export default DashBoard;