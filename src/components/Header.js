import { useEffect } from "react";
import HeaderDesktopView from "./Header/HeaderDesktopView";
import HeaderMobileView from "./Header/HeaderMobileView";
import { useDispatch, useSelector } from "react-redux";
import { setResponsive } from "../store/ResponsiveSlice";



export default function Header() {
    const responsive = useSelector(state => state.responsive);
    const dispatch = useDispatch();
    

    // const [responsive, setResponsive] = useState(window.matchMedia("(min-width: 572px)").matches);

    useEffect(() => {
        window.matchMedia("(min-width: 572px)").addEventListener('change', e => dispatch(setResponsive(e.matches)));
    }, [dispatch]);
    return (
        <>
            {!responsive && <HeaderMobileView />}
            {responsive && <HeaderDesktopView />}
        </>
    );
}