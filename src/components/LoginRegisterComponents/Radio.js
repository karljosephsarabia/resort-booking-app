function Radio(props){
    return(
        <>
            <div className="form-check">
                <input className="form-check-input" type="radio" name={props.name} id={props.id} value={props.value} checked={props.checked} onChange={props.onChange}/>
                <label className="form-check-label " for={props.value}>
                    <p className="radio-text">{props.labeltext}</p>
                </label>
            </div>
        </>
    )
}

export default Radio;