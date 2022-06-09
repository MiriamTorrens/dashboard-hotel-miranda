import Bookings from './pages/Bookings';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Rooms from './pages/Rooms';
import Users from './pages/Users';
import NavBar from "./components/NavBar";
import MenuSup from "./components/MenuSup";
import EditUser from './pages/EditUser';
import NewUser from './pages/NewUser';
import NewRoom from './pages/NewRoom';
import {Routes, Route, useLocation, useNavigate, Navigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

function RequireAuth({children, authenticated}) {
  const auth = authenticated;
  const location = useLocation();
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

function App() {
  const isAuthenticated = localStorage.getItem('authenticated');
  const [authenticated, setAuthenticated] = useState(isAuthenticated);
  let navigate = useNavigate();

  useEffect(() => {
    if(authenticated){
        localStorage.setItem('authenticated', 'true');
        navigate('/dashboard', { replace: true });  
    }else{
        localStorage.removeItem('authenticated');
        navigate('/login', { replace: true });
    }
  }, [authenticated]);

  return (
    <>
      <div style={{display:'flex'}}>
        <NavBar authenticated={authenticated}/>
        <div style={{display:'block', width:'100%'}}>
          <MenuSup authenticated={authenticated} setAuthenticated={setAuthenticated}/>
          <Routes>
          <Route path="/" element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated} />}/>
              <Route path="login" element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated} />}/>
              <Route path="dashboard" element={<RequireAuth authenticated={authenticated}><Dashboard/></RequireAuth>}/>
              <Route path="bookings" element={<RequireAuth authenticated={authenticated}><Bookings/></RequireAuth>}/>
              <Route path="bookings/:bookingId" element={<RequireAuth authenticated={authenticated}><Bookings/></RequireAuth>}/>
              <Route path="contact" element={<RequireAuth authenticated={authenticated}><Contact/></RequireAuth>}/>
              <Route path="rooms" element={<RequireAuth authenticated={authenticated}><Rooms/></RequireAuth>}/>
              <Route path="rooms/newRoom" element={<RequireAuth authenticated={authenticated}><NewRoom/></RequireAuth>}/>
              <Route path="users" element={<RequireAuth authenticated={authenticated}><Users/></RequireAuth>}/>
              <Route path="users/newUser" element={<RequireAuth authenticated={authenticated}><NewUser/></RequireAuth>}/>
              <Route path="users/editUser" element={<RequireAuth authenticated={authenticated}><EditUser/></RequireAuth>}/>
              <Route path="*" element={<main>Not found</main>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
