import InputField from "../components/LoginRegisterComponents/InputField";
import PageButton from "../components/LoginRegisterComponents/Button";
import Radio from "../components/LoginRegisterComponents/Radio";
import './login-register.css';

function Register(){
    return(
        <>
        <div className=" container-fluid m-auto p-0 main"> 
            <div className=" align-self-center register m-auto register-container">
                    <h1 className="text-center login-registration-text">Registration</h1>
                    <div className="d-flex justify-content-evenly">
                        <Radio id="register-partner" labeltext="Partner"/>
                        <Radio id="register-customer" labeltext="Customer"/>                       
                    </div>
                <InputField id="register-email" label="Email Address" input="email"/>
                <InputField id="register-password" label="Password" input="password"/>
                <InputField id="confirm-password" label="Confirm Password" input="password"/>
                <div className="d-flex justify-content-between m-0 p-0">
                    <InputField id="firstName" label="First Name" input="text"/>
                    <InputField id="lasttName" label="Last Name" input="text"/>
                </div>
                <InputField id="phoneNumber" label="Phone Number" input="tel"/>      
                <div className="d-flex justify-content-center"><PageButton Value="Register" class="mt-3 "/></div>
                <p className="mt-3 text-center radio-text">Already have an account?  <a className="link" href="/login">Login</a></p>
            </div>
        </div>      
        </>
    );
}

export default Register;