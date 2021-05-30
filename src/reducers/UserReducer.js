const initialState={
    user:{
        name:null,
        email:null,
        password:null
    }
}
const UserReducer = (state=initialState,actions) => {

    switch(actions.type){
        case "CHANGENAME":
            return {
               ...state,
               user: {...state.user,name:actions.value}     
            }
        case "CHANGEEMAIL":
            return {
                ...state,
                user: {...state.user,email:actions.value}     
             }
        case "CHANGEPASSWORD":
            return {
                ...state,
                user: {...state.user,password:actions.value}     
             }
        default:
            return state;
  
    }
    }

export  default UserReducer;