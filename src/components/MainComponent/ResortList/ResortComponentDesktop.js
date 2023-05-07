import ResortCard from "./ResortCard";
import { Col, Row } from "react-bootstrap";
import { useSelector } from 'react-redux';

export default function ResortComponentDesktop() {
    const resortList = useSelector(state => state.resortList);
    const search = useSelector(state => state.search);

    const searchResort = resortList.filter(resort => {
        return (
            resort.title.toLowerCase().includes(search.toLowerCase()) ||
            resort.location.toLowerCase().includes(search.toLowerCase())
        )
    })

    return (
        <>
            <Col sm={12} className="mb-5 w-75 d-flex justify-content-center rounded-3"
                style={{ position: "relative", top: "-20px", zIndex: "1", paddingTop: "5rem", paddingBottom: "4rem", boxShadow: "0px 0px 20px", background: "rgba(100, 184, 177, 0.3)" }}>
                <Row className="gy-4 mx-5">
                    {searchResort.map((resort, index) => <ResortCard key={index} resort={resort} />)}
                </Row >
            </Col>
        </>
    );
}