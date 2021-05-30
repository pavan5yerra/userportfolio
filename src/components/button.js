import * as styles from './button.module.css';
const button = (props) => {
    return (
        <button className={styles.button} onClick ={props.clicked}>{props.val}</button>
    )
}
export default button;