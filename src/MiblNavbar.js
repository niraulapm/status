import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import MiblElementList from "./MiblElementList";

const MiblNavBar = ({ data }) => {
    const [component, setComponent] = useState("accelerator");



    return (
        <>
            <Navbar bg='light' expand='lg'>
                <Container>
                    <Navbar.Brand>MIBL Staus Display</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link onClick={() => setComponent("accelerator")}>
                                Accelerators
                            </Nav.Link>
                            <Nav.Link onClick={() => setComponent("source")}>
                                Ion sources
                            </Nav.Link>

                            <Nav.Link onClick={() => setComponent("beamline")}>
                                Beamlines
                            </Nav.Link>

                            <Nav.Link onClick={() => setComponent("mics")}> Mics </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <MiblElementList data={data.filter((d) => d.type === component)} />

        </>
    );
};

export default MiblNavBar;
