import { useEffect } from "react";
import HeaderDesktopView from "./HeaderComponent/HeaderDesktopView";
import HeaderMobileView from "./HeaderComponent/HeaderMobileView";
import { useDispatch, useSelector } from "react-redux";
import { setResponsive } from "../store/ResponsiveSlice";



export default function Header() {
    const responsive = useSelector(state => state.responsive);
    const dispatch = useDispatch();

    useEffect(() => {
        window.matchMedia("(min-width: 572px)").addEventListener('change', e => dispatch(setResponsive(e.matches)));
    }, [dispatch]);
    return (
        <div style={{backgroundColor: "transparent"}}>
            {!responsive && <HeaderMobileView />}
            {responsive && <HeaderDesktopView />}
        </div>
    );
}