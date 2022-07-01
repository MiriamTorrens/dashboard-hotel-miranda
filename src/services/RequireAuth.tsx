import { useLocation, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../App';

export default function RequireAuth({children}) {
    const { state } = useContext(AuthContext);
    const location = useLocation();
    if (!state.authenticated) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  }