export interface UserAuthenticated{
  authenticated: boolean,
  name: string | null
  email: string | null
}

type UserReducerAction = {
  type: 'login'
  payload: UserAuthenticated
} | {
  type: 'logout'
  payload: UserAuthenticated
} | {
  type: 'changeName'
  payload: UserAuthenticated
} | {
  type: 'changeEmail'
  payload: UserAuthenticated
}


const userReducer = (state: UserAuthenticated, action: UserReducerAction) => {
  switch(action.type){
    case 'login':
      localStorage.setItem('authenticated', "true");
      return{
        ...state,
        authenticated: true,
        name: action.payload.name,
        email: action.payload.email
      }
    case 'logout':
      localStorage.removeItem('authenticated');
      return {
        ...state,
        authenticated: false,
         name: action.payload.name,
        email: action.payload.email
      }
    case 'changeName':
      localStorage.setItem('authenticated', JSON.stringify(state));
      return {
        ...state,
        name: action.payload.name,
      }
    case 'changeEmail':
      localStorage.setItem('authenticated', JSON.stringify(state));
      return {
        ...state,
        email: action.payload.email
      }
    default: 
      return state
  }
}

export default userReducer