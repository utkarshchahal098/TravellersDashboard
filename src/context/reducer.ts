import { appAction, appState } from "./type";

export const initialState: appState = {
    userName: '',
    isLoggedIn:  false
}

export const appReducer = (state: appState, action: appAction): appState => {
  switch(action.type){
    case 'SET_USERNAME':
        return{...state, userName: action.username};
    default:
        return state;    
  }
}