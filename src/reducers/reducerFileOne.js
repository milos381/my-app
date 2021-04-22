//reducer is a function. Plain and simple
//in reducer the starting state is empty so it's not undefined
//no imports are necessary
export default function reducerFn(state = {
    user: ''
  }, action) {
    
    switch (action.type) {
        
      case 'ADD_USER':
        
        return {
            //we are setting up a global state!!!!!!!
            user: action.user
        }
  
      default:
        return state;
  
    }
  };