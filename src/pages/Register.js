import InputField from "../components/LoginRegisterComponents/InputField";
import PageButton from "../components/LoginRegisterComponents/Button";
import Radio from "../components/LoginRegisterComponents/Radio";
import './login-register.css';
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";


const validationSchema = yup.object({
    name: yup.string()
        .required("Email address is required")
        .min(4, "Name must be at least 4 characters long"),
    email: yup.string()
        .email("Invalid email format")
        .required("Email address is required"),
    password: yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long"),
});


function Register() {

    const formik = useFormik({
        initialValues: {
            user_type: '',
            name: '',
            password: '',
            address: '',
            email: '',
            contact_number: ''
        },
        validationSchema,
        onSubmit: (values) => {
            axios.post('http://127.0.0.1:8000/api/register', {
                user_type: values.user_type,
                name: values.name,
                password: values.password,
                address: values.address,
                email: values.email,
                contact_number: values.contact_number
            }).then((response) => {
                console.log(response);
            }).catch((err) => {
                console.error(err);
            });
        }
    });

    return (
        <>
            <div className=" container-fluid m-auto p-0 main">
                <form onSubmit={formik.handleSubmit}>
                    <div className=" align-self-center register m-auto register-container">
                        <h1 className="text-center login-registration-text">Registration</h1>
                        <div className="d-flex justify-content-evenly">
                            <Radio id="resort-owner" labeltext="Resort Owners" name='user_type' value='resort-owner' checked={formik.values.value} onChange={formik.handleChange} />
                            <Radio id="customer" labeltext="Customer" name='user_type' value='customer' checked={formik.values.value} onChange={formik.handleChange} />
                        </div>
                        <InputField id="email" label="Email Address" input="email" name='email' value={formik.values.email} onChange={formik.handleChange} />
                        <InputField id="password" label="Password" input="password" name='password' value={formik.values.password} onChange={formik.handleChange} />
                        <InputField id="confirm-password" label="Confirm Password" input="password" />
                        <InputField id="name" label="Name" input="text" name='name' value={formik.values.name} onChange={formik.handleChange} />
                        <InputField id="address" label="Address" input="text" name='address' value={formik.values.address} onChange={formik.handleChange} />
                        <InputField id="contact_number" label="Contact Number" input="tel" name='contact_number' value={formik.values.contact_number} onChange={formik.handleChange} />
                        <div className="d-flex justify-content-center"><Button variant="contained" className="mt-3" type="submit">Register</Button></div>
                        <p className="mt-3 text-center radio-text">Already have an account?  <a className="link" href="/login">Login</a></p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;