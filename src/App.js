import Bookings from './pages/Bookings';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Rooms from './pages/Rooms';
import Users from './pages/Users';
import NavBar from "./components/NavBar.tsx";
import MenuSup from "./components/MenuSup.tsx";
import EditUser from './pages/EditUser';
import NewUser from './pages/NewUser';
import NewRoom from './pages/NewRoom';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AppWrapper, RoutesWrapper } from "./styles/Styles";
import { useEffect, createContext, useReducer } from 'react';
import  RequireAuth  from './services/RequireAuth.tsx';
import { useState } from 'react';

const initialUser = localStorage.getItem('authenticated') 
  ? JSON.parse(localStorage.getItem('authenticated')) 
  : { authenticated: false, name: null, email: null };

const userReducer = (state, action) => {
  switch(action.type){
    case 'login':
      localStorage.setItem('authenticated', "true");
      return{
        ...state,
        authenticated: true,
        name: action.user.userName,
        email: action.user.userEmail
      }
    case 'logout':
      localStorage.removeItem('authenticated');
      return {
        ...state,
        authenticated: false,
        name: null,
        email: null
      }
    case 'changeName':
      localStorage.setItem('authenticated', JSON.stringify(state));
      return {
        ...state,
        name: action.name
      }
    case 'changeEmail':
      localStorage.setItem('authenticated', JSON.stringify(state));
      return {
        ...state,
        email: action.email
      }
    default: 
      return state
  }
}
export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(userReducer, initialUser);
  let navigate = useNavigate();
  const [displayLat, setDisplayLat] = useState("block");

  useEffect(() => {
    if(state.authenticated){
      localStorage.setItem('authenticated', JSON.stringify(state));
      navigate('/dashboard', { replace: true });  
    }else{
      navigate('/login', { replace: true });
    }
  }, [state.authenticated]);

  return (
      <AuthContext.Provider value={{state, dispatch}}>
        <AppWrapper>
          <NavBar displayLat={displayLat} />
          <RoutesWrapper>
            <MenuSup displayLat={displayLat} setDisplayLat={setDisplayLat}/>
            <Routes>
            <Route path="/" element={<Login />}/>
                <Route path="login" element={<Login />}/>
                <Route path="dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}/>
                <Route path="bookings" element={<RequireAuth><Bookings/></RequireAuth>}/>
                <Route path="bookings/:bookingId" element={<RequireAuth><Bookings/></RequireAuth>}/>
                <Route path="contact" element={<RequireAuth><Contact/></RequireAuth>}/>
                <Route path="rooms" element={<RequireAuth><Rooms/></RequireAuth>}/>
                <Route path="rooms/newRoom" element={<RequireAuth><NewRoom/></RequireAuth>}/>
                <Route path="users" element={<RequireAuth><Users/></RequireAuth>}/>
                <Route path="users/newUser" element={<RequireAuth><NewUser/></RequireAuth>}/>
                <Route path="users/editUser" element={<RequireAuth><EditUser/></RequireAuth>}/>
                <Route path="*" element={<main>Not found</main>}/>
            </Routes>
          </RoutesWrapper>
        </AppWrapper>
      </AuthContext.Provider>
  );
}

export default App;
