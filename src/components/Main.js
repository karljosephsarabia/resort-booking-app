import { Routes, Route } from "react-router-dom";

export default function Main() {
    

    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/resortList' element={<ResortList />} />
            </Routes>
        </>
    )
}