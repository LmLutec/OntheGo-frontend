import { combineReducers } from "redux";
import ownersReducer from './ownersReducer'
import foodtrucksReducer from './trucksReducer'


const rootReducer = combineReducers({
    owners: ownersReducer
    // foodtrucks: foodtrucksReducer
  })
   
 
   
  
    export default rootReducer
