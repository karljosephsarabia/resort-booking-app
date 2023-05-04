import { Container } from "@mui/material";
import HeroBannerMobile from "./HeroBannerMobile";
import HeroBannerDesktop from "./HeroBannerDesktop";
import { useSelector } from "react-redux";

export default function HeroBanner() {
    const responsive = useSelector(state => state.responsive);

    return (
        <>
        <Container fluid>
            { !responsive && <HeroBannerMobile /> }
            { responsive && <HeroBannerDesktop /> }
        </Container>
        </>
    )
}