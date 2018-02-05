import { combineReducers } from 'redux'
import loginReducer from './login'
import homeReducer from './home'
//import routerReducer from 'react-router-redux'

const reducer = combineReducers({
  home:homeReducer,
  login:loginReducer
  //routing:routerReducer
});

export default reducer
