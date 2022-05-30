import Bookings from './pages/Bookings';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Rooms from './pages/Rooms';
import Users from './pages/Users';
import {Routes, Route, NavLink, useLocation, Navigate} from 'react-router-dom';
import {useState} from 'react';
import './App.css';

function RequireAuth({children, authenticated}) {
  let auth = authenticated;
  let location = useLocation();
  if (!auth) { //aqui esta el problema
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

function App() {
  const isAuthenticated = localStorage.getItem('authenticated');
  const [authenticated, setAuthenticated] = useState(isAuthenticated);
  
  return (
    <>
       <Routes>
          <Route path="login" element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated} />}/>
          <Route path="dashboard" element={<RequireAuth authenticated={authenticated}><Dashboard/></RequireAuth>}/>
          <Route path="bookings" element={<RequireAuth authenticated={authenticated}><Bookings/></RequireAuth>}/>
          <Route path="contact" element={<RequireAuth authenticated={authenticated}><Contact/></RequireAuth>}/>
          <Route path="rooms" element={<RequireAuth authenticated={authenticated}><Rooms/></RequireAuth>}/>
          <Route path="users" element={<RequireAuth authenticated={authenticated}><Users/></RequireAuth>}/>
      </Routes>
      <nav>
          <NavLink to="/dashboard">Dashboard</NavLink><br/>
          <NavLink to="/bookings">Bookings</NavLink><br/>
          <NavLink to="/rooms">Rooms</NavLink><br/>
          <NavLink to="/contact">Contact</NavLink><br/>
          <NavLink to="/users">Users</NavLink><br/>
      </nav>
    </>
  );
}

export default App;
