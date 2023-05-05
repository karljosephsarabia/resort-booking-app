import { Routes, Route } from "react-router-dom";
import LandingPage from "./MainComponent/LandingPage";
import ResortList from "./MainComponent/ResortList";
import Register from "../pages/Register";
import Login from "../pages/Login";

export default function Main() {
    

    return (
        <>
            <Routes>
                <Route path='/resort-booking-app' element={<LandingPage />} />
                <Route path='/resort-booking-app/resortList' element={<ResortList />} />
                < Route path = "/register" element={<Register/>}/>
                < Route path = "/login" element={<Login/>}/>
            </Routes>
        </>
    );
}