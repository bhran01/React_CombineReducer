import { intialState } from "./initialState";

export const MulDivRedFunc = (oldState=intialState,action)=>{
    console.log('action.payload---->',action.payload);
    let newState = oldState;
    switch(action.type){
      case 'MULBY2':
        return {
          ...newState,
          value:newState.value*action.payload
        };
      case 'MULBY5':
        return {
          ...newState,
          value:newState.value*action.payload
        };
        case 'DIVBY2':
        return {
          ...newState,
          value:newState.value/action.payload
        };
      case 'DIVBY5':
        return {
          ...newState,
          value:newState.value/action.payload
        };
      case 'RESET':
        return {
          ...newState,
          value:action.payload
        };
      default:
        return newState;
    }
  
}