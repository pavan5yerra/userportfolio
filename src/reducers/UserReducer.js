const initialState={
    user:{
        name:null,
        email:null,
        password:null
    },
    data:null,

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
        case "GETUSERS":
    
            return{
                ...state,
                data:actions.users

            }
        default:
            return state;
  
    }
    }

export  default UserReducer;