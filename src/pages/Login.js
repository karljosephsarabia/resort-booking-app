import InputField from "../components/LoginRegisterComponents/InputField";
import {Link} from "react-router-dom"
import Button from "../components/LoginRegisterComponents/Button";


function Login(){
    return(
        <>
      
        <div className="row container-fluid m-auto p-0 main ">
            <div className="col-md-5 m-auto">
                <div className="m-auto d-flex justify-content-center login" >
                    <div className="login-container">
                        <div >
                        <h1 className="text-center login-registration-text">Login</h1>
                        <InputField id="email" label="Email Address" input="email"/>
                        <InputField id="password" label="Password" input="password"/>
                        <div className="mt-3 d-flex justify-content-center"><Button Value="Login"/></div>
                        <Link to="/register" className="link" ><p className="text-center mt-3">Create Account</p></Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default Login;