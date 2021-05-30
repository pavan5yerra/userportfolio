import InputField from '../components/InputField'
import Button from '../components/button';
import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../actions/UserActions';
import * as styles from './User.module.css';
const User = ()=> {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user.user)
    const data = useSelector(state=>state.user.data)
 
    console.log(data)
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
        <div className={styles.port}>
            <h1>USER PORTFOLIO</h1>
        
            <div className={styles.input}>
                <InputField compname="Name" changed = {(val)=>valueChange(val,"name")}/>
                <InputField compname="Email" changed = {(val)=>valueChange(val,"email")}/>
                <InputField compname="Password" changed = {(val)=>valueChange(val,"password")}/>
                <Button val="ADD" clicked = {addToDB}/>
            </div> 
            <div>

            </div>
            <Button val="DISPLAY USER" clicked = {showUsers}/>
            <div className={styles.display}>
            
                {data? data.map(item => (<p className={styles.user} key={item._id}> Name : {item.name}  <br></br> Email: {item.email}</p>) ):null}              
                
            </div>
            
        </div>
    )
}

export default User;