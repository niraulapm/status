import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import MiblElementList from "./MiblElementList";

const MiblNavBar = ({ data }) => {
    const [component, setComponent] = useState("accelerator");
    const filterdData = (component, data) => {
        if (component === "accelerator") {
            return data.filter((d) => d.type === "accelerator");
        } else if (component === "source") {
            return data.filter((d) => d.type === "source");
        } else if (component === "beamline") {
            return data.filter((d) => d.type === "beamline");
        } else {
            return data.filter(
                (d) =>
                    d.type !== "accelerator" &&
                    d.type !== "source" &&
                    d.type !== "beamline"
            );
        }
    };

    return (
        <>
            <Navbar bg='light' expand='lg'>
                <Container>
                    <Navbar.Brand>MIBL Staus Display</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav variant='tabs'>
                            <Nav.Item>
                                <Nav.Link onClick={() => setComponent("accelerator")}>
                                    Accelerators
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link onClick={() => setComponent("source")}>
                                    Ion sources
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link onClick={() => setComponent("beamline")}>
                                    Beamlines
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link onClick={() => setComponent("mics")}> Mics </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <br></br>
                <MiblElementList data={filterdData(component, data)} />
            </Container>
        </>
    );
};

export default MiblNavBar;
