import { GET_PROFILE } from '../actions/index.js';

export default function (state={}, action){
  switch(action.type) {
    case GET_PROFILE :
    console.log('REDUCER:', action.payload.data);
    return action.payload.data;
    default: 
    return state;
  }
}