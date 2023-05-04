import { Container, Row } from "react-bootstrap";
import React from "react";
import SearchComponentMobile from "./ResortList/SearchComponentMobile";
import SearchComponentDesktop from "./ResortList/SearchComponentDesktop";
import { useSelector } from "react-redux";


import ResortComponentDesktop from "./ResortList/ResortComponentDesktop";
import ResortComponentMobile from "./ResortList/ResortComponentMobile";


export default function ResortList() {
    const responsive = useSelector(state => state.responsive);

    return (
        <>
            <Container fluid>
                <Row>
                    {!responsive && <SearchComponentMobile />}
                    {responsive && <SearchComponentDesktop />}
                    {!responsive && <ResortComponentMobile />}
                    {responsive && <ResortComponentDesktop />}  
                </Row>
            </Container >

           
        </>
    );
}
