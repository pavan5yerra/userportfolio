import InputField from '../components/InputField'
import Button from '../components/button';
import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../actions/UserActions';
const User = ()=> {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user.user)
   //console.log(user)

    const valueChange=(val,comp)=>{
        return  comp==='name'? dispatch(actions.changeName(val))
            :  comp==='email'? dispatch(actions.changeEmail(val))
            : comp==='password'? dispatch(actions.changePassword(val)):null;
    }

    const addToDB = ()=> {
        dispatch(() => actions.addtoMongo(user,dispatch))
    }

    const showUsers = () => {
        dispatch(() => actions.displayUsers(dispatch))
    }
    return(
        <div>
            <h1>USER PORTFOLIO</h1>
            <div>
                <p>Name:</p><InputField changed = {(val)=>valueChange(val,"name")}/>
                <p>Email:</p><InputField changed = {(val)=>valueChange(val,"email")}/>
                <p>Password:</p><InputField changed = {(val)=>valueChange(val,"password")}/>
                <Button clicked = {addToDB}/>
            </div> 
            <div>
                Display User
                <Button clicked = {showUsers}/>
            </div>
        </div>
    )
}

export default User;