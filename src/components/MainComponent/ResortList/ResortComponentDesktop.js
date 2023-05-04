import ResortCart from "./ResortCard";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { setResortList } from "../../../store/ResponsiveSlice";
import { useEffect } from "react";

export default function ResortComponentDesktop() {
    const resortList = useSelector(state => state.resortList);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/resorts')
            .then(res => res.json())
            .then(data => {
                const { resorts } = data;
                dispatch(setResortList(resorts));
            });
    }, [dispatch]);

    return (
        <>
            <Col sm={12} className="mb-5">
                <Row className="gy-4 mx-5">
                   { resortList.map((resort, index) => <ResortCart key={index} resort={resort} />)} 
                </Row >
            </Col>
        </>
    );
}