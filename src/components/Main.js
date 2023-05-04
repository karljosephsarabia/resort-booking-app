import { Routes, Route } from "react-router-dom";
import LandingPage from "./MainComponent/LandingPage";
import ResortList from "./MainComponent/ResortList";

export default function Main() {
    

    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/resortList' element={<ResortList />} />
            </Routes>
        </>
    );
}