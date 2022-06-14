import { useLocation, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './App';

export default function RequireAuth({children}) {
    const { state } = useContext(AuthContext);
    const auth = state.authenticated;
    const location = useLocation();
    if (!auth) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  }