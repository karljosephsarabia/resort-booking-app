import { Route, Routes } from "react-router-dom";
import LandingPage from "./MainComponent/LandingPage";
import ResortList from "./MainComponent/ResortList";

export default function Main() {
    

    return (
        <>
            <Routes>
                <Route path='/resort-booking-app' element={<LandingPage />} />
                <Route path='/resort-booking-app/resortList' element={<ResortList />} />
            </Routes>
        </>
    );
}