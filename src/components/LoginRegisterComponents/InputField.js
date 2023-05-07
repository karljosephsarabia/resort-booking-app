function InputField(props) {
    return(
        <>
            <div className="mt-2">
                <label htmlFor={props.id} className="form-label form-text mt-1" >{props.label}</label>
                <input type={props.input} className="form-control label-text mt-1" id={props.id} ></input>
            </div>
        </>
    );
}

export default InputField;