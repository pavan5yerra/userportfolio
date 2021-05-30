export const changeName = (val) =>{
    
    return{
        type:"CHANGENAME",
        value:val,
       
    }
}
export const changeEmail = (val) =>{
    
    return{
        type:"CHANGEEMAIL",
        value:val,
      
    }
}
export const changePassword = (val) =>{
    
    return{
        type:"CHANGEPASSWORD",
        value:val,
     
    }
}

const addUser = (user)=> {
   

        fetch('/adduser',{method: "POST"
        ,body: JSON.stringify(user)
        , headers: {
            "Content-type": "application/json; charset=UTF-8"
        }}).then(console.log("data added"))
  
       

        return{
            type:"ADDTODB",
            value:user,
        }
      
        
}

const showUser = ()=> {
    fetch('/showusers').then(res => res.json()).then(data=> console.log(data))
}
export const addtoMongo = (user,dispatch) => {
    dispatch(addUser(user))
   
}

export const displayUsers = (dispatch) => {
    dispatch(showUser)
}