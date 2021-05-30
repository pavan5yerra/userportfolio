const InputField = (props) => {
    return (
        <div>
            <input type="text" onChange = {(event)=> props.changed(event.target.value)}value ={props.val}/>
        </div>
    )
}

export default InputField;