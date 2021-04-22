//so actions are basically functions only
//we need to specify a type and what else we want it to do

export const addUser = (user) => {
  
    return {
      type: 'ADD_USER',
      user
      
    };
  };
  