function Radio(props){
    return(
        <>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="register-as" id={props.id}/>
                <label className="form-check-label " for={props.id}>
                    <p className="radio-text">{props.labeltext}</p>
                </label>
            </div>
        </>
    )
}

export default Radio;