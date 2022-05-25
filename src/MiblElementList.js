import Table from "react-bootstrap/Table";

import Accordion from "react-bootstrap/Accordion";

const MiblElementList = ({ data }) => {
    return (
        <>
            {data.map((d) => {
                return (
                    <>
                        <Accordion>
                            <Accordion.Item eventKey={d.name}>
                                <Accordion.Header>{d.name}</Accordion.Header>

                                <Accordion.Body>
                                    <Table striped responsive>
                                        <thead>
                                            <tr>
                                                <th>Parameter</th>
                                                <th>Value</th>
                                                <th>Unit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {d.variables.map((item) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>{item.parameter}</td>
                                                            <td>{item.value}</td>
                                                            <td>{item.unit}</td>
                                                        </tr>
                                                    </>
                                                );
                                            })}
                                        </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </>
                );
            })}
        </>
    );
};

export default MiblElementList;
