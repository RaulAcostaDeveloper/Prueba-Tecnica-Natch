import { combineReducers } from "redux";

const initialCredenciales = {
    userName:'admin',
    password:'admin'
}
const initialLogged = false;

export const credencialesReducer = (state = initialCredenciales, action) =>{
    switch (action.type) {
      case 'credenciales/get':
        return state;
      default:
        return state;
    }
}
export const loggedReducer = (state = initialLogged, action) =>{
  switch (action.type) {
    case 'logged/true':
      return state = true;
    case 'logged/false':
      return state = false;
    case 'logged/get':
      return state;
    default:
      return state;
  }
}
export const reducer = combineReducers({
    credenciales: credencialesReducer,
    logged: loggedReducer,
})
