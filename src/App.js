import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Pages/Blogs/Blogs';
import Contact from './components/Pages/Contact/Contact';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import UserOrder from './components/Pages/Dashboard/UserOrder/UserOrder';
import Footer from './components/Pages/Home/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import MyProfile from './components/Pages/MyProfile/MyProfile';
import NotFound from './components/Pages/NotFound/NotFound';
import Signup from './components/Pages/Signup/Signup';
import Header from './Shared/Header';
import Order from './Shared/Order/Order';
import Payment from './Shared/Payment/Payment';
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
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/myProfile' element={ <MyProfile></MyProfile> }></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route path='users' element={<Users></Users>}></Route>
            <Route path='order' element={<UserOrder></UserOrder>}></Route>
            <Route path='profile' element={<Profile></Profile>}></Route>
            <Route path='payment' element={<Payment></Payment>} />
          </Route>
          <Route path='/order/:id' element={
            <Required>
              <Order></Order>
            </Required>
          }></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;