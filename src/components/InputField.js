import * as styles from './InputField.module.css'
const InputField = (props) => {
    return (
        <div className={styles.div}>
            <div className={styles.comp}>{props.compname} </div>
            <input className = {styles.input} type={props.compname}  onChange = {(event)=> props.changed(event.target.value)} value = {props.val}/>
        </div>
    )
}

export default InputField;