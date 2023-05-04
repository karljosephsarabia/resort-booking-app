import { Row } from "react-bootstrap";
import ExploreContentMobile from "./ExploreContentMobile";
import CardContentMobile from "./CardContentMobile";

export default function MainContentMobile() {
    return (
        <>
            <Row className="d-flex justify-content-center">
                <ExploreContentMobile />
                <CardContentMobile />
            </Row>
        </>
    );
}