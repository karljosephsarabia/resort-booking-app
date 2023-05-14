import InputField from "../components/LoginRegisterComponents/InputField";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/LoginRegisterComponents/Button";
import { useFormik } from 'formik';
import * as yup from "yup";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setUserToken } from "../store/ResponsiveSlice";

const validationSchema = yup.object({
    email: yup.string()
        .email("Invalid email format")
        .required("Email address is required"),
    password: yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long"),
});


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values) => {
            axios.post('http://127.0.0.1:8000/api/login', {
                email: values.email,
                password: values.password
            }).then((response) => {
                dispatch(setUserToken(response.data.token));
                navigate('/resort-booking-app');
            }).catch((err) => {
                console.log(err);
            });
        }
    });

    return (
        <>
            <div className="row container-fluid m-auto p-0 main ">
                <form onSubmit={formik.handleSubmit}>
                    <div className="col-md-5 m-auto">
                        <div className="m-auto d-flex justify-content-center login" >
                            <div className="login-container">
                                <div >
                                    <h1 className="text-center login-registration-text">Login</h1>
                                    <InputField id="email" label="Email Address" input="email" name="email" value={formik.values.name} onChange={formik.handleChange} />
                                    <InputField id="password" label="Password" input="password" name="password" value={formik.values.name} onChange={formik.handleChange} />
                                    <div className="mt-3 d-flex justify-content-center"><Button Value="Login" /></div>
                                    <Link to="/register" className="link" ><p className="text-center mt-3">Create Account</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;