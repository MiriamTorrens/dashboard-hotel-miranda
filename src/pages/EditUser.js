import { useContext } from 'react';
import { AuthContext } from '../App';

export default function EditUser(){
    const { state, dispatch } = useContext(AuthContext);
   
    return(
        <h1>Cambiar usuario</h1>
        // <form>
        //     <input type="text" value={state.name} onchange={(e) => dispatch({type:'changeName', name: e.target.value})} placeholder="Edit name"/>
        //     <input type="text"value={state.email} onchange={(e) => dispatch({type:'changeEmail', email: e.target.value})} placeholder="Edit email"/>
        // </form>
    )
}