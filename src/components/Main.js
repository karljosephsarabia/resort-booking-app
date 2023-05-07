import { Route, Routes } from "react-router-dom";
import LandingPage from "./MainComponent/LandingPage";
import ResortList from "./MainComponent/ResortList";
import Contact from "./MainComponent/ContactPage/Contact";
import About from "./MainComponent/AboutUsPage/About";
import Register from "../pages/Register";
import Login from "../pages/Login";

export default function Main() {


    return (
        <>
            <Routes>
                <Route path='/resort-booking-app' element={<LandingPage />} />
                <Route path='/resortList' element={<ResortList />} />
                <Route path='/ContactPage' element={<Contact />} />
                <Route path='/AboutUsPage' element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}