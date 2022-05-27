import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import UserOrder from './components/Pages/Dashboard/UserOrder/UserOrder';
import Footer from './components/Pages/Home/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Signup from './components/Pages/Signup/Signup';
import Header from './Shared/Header';
import Order from './Shared/Order/Order';
import Profile from './Shared/Profile/Profile';
import Required from './Shared/Required/Required';
import Users from './Shared/Users/Users';

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/signin' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route path='users' element={<Users></Users>}></Route>
            <Route path='order' element={<UserOrder></UserOrder>}></Route>
            <Route path='profile' element={<Profile></Profile>}></Route>
          </Route>
          <Route path='/order/:id' element={
            <Required>
              <Order></Order>
            </Required>
          }></Route>
        </Routes>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;