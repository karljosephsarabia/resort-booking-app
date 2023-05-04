import { Col } from "react-bootstrap";
import CardContent from "./CardContent";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setResortList } from "../../../../store/ResponsiveSlice";


export default function CardContentDesktop() {
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
            <Col xs={7}>
                    <div className="d-flex justify-content-center gap-4">
                        { resortList.map((resort, index) => (<CardContent key={index} resort={resort} />)) }
                    </div>
            </Col >
        </>
    );
}