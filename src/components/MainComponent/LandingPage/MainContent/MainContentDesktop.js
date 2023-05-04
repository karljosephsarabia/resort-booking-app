import { Row } from "react-bootstrap";
import ExploreContentDesktop from "./ExploreContentDesktop";
import CardContentDesktop from "./CardContentDesktop";

export default function MainContentDesktop() {
    return (
        <>
            <Row className="d-flex justify-content-center mx-5">
                <ExploreContentDesktop />
                <CardContentDesktop />
            </Row>
        </>
    );
}