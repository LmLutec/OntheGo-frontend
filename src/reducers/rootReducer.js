import { combineReducers } from "redux";
import ownersReducer from './ownersReducer'
import foodiesReducer from './foodiesReducer'


const rootReducer = combineReducers({
    owners: ownersReducer,
    foodies: foodiesReducer
  })
   
 
   
  
    export default rootReducer
