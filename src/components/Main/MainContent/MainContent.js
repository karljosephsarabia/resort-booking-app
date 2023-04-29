import { useSelector } from "react-redux";
import MainContentDesktop from "./MainContentDesktop";
import MainContentMobile from "./MainContentMobile";
import { Container } from "react-bootstrap";

export default function MainContent() {
    const responsive = useSelector(state => state.responsive);
    return (
        <>
            <Container fluid>
                {!responsive && <MainContentMobile />}
                {responsive && <MainContentDesktop />}
            </Container>
        </>
    );
}