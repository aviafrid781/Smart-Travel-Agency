
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';

import AuthProvider from './Contaxt/authProvider';
import MyOrder from './Pages/MyOrder/MyOrder';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import Booking from './Pages/Booking/Booking/Booking';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import { Spinner } from 'react-bootstrap';



function App() {

  return (
    <div className="app">
      <AuthProvider>

        <BrowserRouter>
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


            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/manageOrder">
              <ManageOrder></ManageOrder>
            </Route>

            <Route path="/addServices">
              <AddService></AddService>
            </Route>


            <PrivateRoute path="/booking/:serviceId">

              <Booking></Booking>
            </PrivateRoute>






            <Route path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>
          <Footer></Footer>
        </BrowserRouter>



      </AuthProvider>
    </div >
  );
}

export default App;
