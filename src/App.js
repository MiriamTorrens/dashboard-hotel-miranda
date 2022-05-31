import Bookings from './pages/Bookings';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Rooms from './pages/Rooms';
import Users from './pages/Users';
import NavBar from "./components/NavBar";
import {Routes, Route, useLocation, Navigate} from 'react-router-dom';
import {useState} from 'react';

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
    <div style={{display:'flex'}}>
      <NavBar authenticated={authenticated}/>
       <Routes>
       <Route path="/" element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated} />}/>
          <Route path="login" element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated} />}/>
          <Route path="dashboard" element={<RequireAuth authenticated={authenticated}><Dashboard/></RequireAuth>}/>
          <Route path="bookings" element={<RequireAuth authenticated={authenticated}><Bookings/></RequireAuth>}/>
          <Route path="bookings/:bookingId" element={<RequireAuth authenticated={authenticated}><Bookings/></RequireAuth>}/>
          <Route path="contact" element={<RequireAuth authenticated={authenticated}><Contact/></RequireAuth>}/>
          <Route path="rooms" element={<RequireAuth authenticated={authenticated}><Rooms/></RequireAuth>}/>
          <Route path="users" element={<RequireAuth authenticated={authenticated}><Users/></RequireAuth>}/>
          <Route path="*" element={<main>There's nothing here!</main>}/>
      </Routes>
    </div>
  );
}

export default App;
