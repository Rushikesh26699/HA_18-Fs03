const initialData={
    comp1:" ",
    comp2:" "
}

const myReducer = (state=initialData, action) => {

    // eslint-disable-next-line default-case
    switch(action.type){
        case "comp1":
            state = {
                ...state,
                comp1:action.payload
            }
            break;
         case "comp2":
            state = {
                ...state,
                comp2:action.payload
            } 
          break; 
    }
  return state;
};

export default myReducer;
