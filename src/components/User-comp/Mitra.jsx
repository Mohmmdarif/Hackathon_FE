import React from "react";
import "../../custom_style/custom.css";
import {
  Card,
  Row,
  Col,
  Table,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import Graphic from "../../assets/img/graphic.png";

const Mitra = () => {
  return (
    <>
      {/* =========== MITRA ============= */}
      <Row className="my-4 gotham-book">
        <Col sm={8}>
          <Card className="shadow-sm border-0 p-3">
            <Card.Body>
              <Card.Title className="gotham-medium fw-semibold">
                Mitra <span className="text-color">Workfrom</span>
              </Card.Title>
              <Card.Text>
                <Table responsive className="mt-3">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Mitra</th>
                      <th>Location</th>
                      <th className="text-center">Activity Log</th>
                      <th className="text-center">Contract Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>101 Space</td>
                      <td>Jakarta</td>
                      <td className="text-center">
                        <button className="border-1 rounded-2 bg-transparent">
                          See Detail
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="border-1 rounded-2 bg-transparent">
                          See Detail
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>101 Space</td>
                      <td>Jakarta</td>
                      <td className="text-center">
                        <button className="border-1 rounded-2 bg-transparent">
                          See Detail
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="border-1 rounded-2 bg-transparent">
                          See Detail
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>101 Space</td>
                      <td>Jakarta</td>
                      <td className="text-center">
                        <button className="border-1 rounded-2 bg-transparent">
                          See Detail
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="border-1 rounded-2 bg-transparent">
                          See Detail
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* =========== PENGAJUAN MITRA ============= */}
        <Col sm={4}>
          <Card className="shadow-sm border-0 p-3">
            <Card.Body>
              <Card.Title className="gotham-medium fw-semibold">
                Persebaran Mitra
              </Card.Title>
              <Card.Text>
                <img
                  src={Graphic}
                  alt="grafik-img"
                  style={{ height: "208px" }}
                />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* =========== PENGAJUAN MITRA ============= */}
      <Row className="my-4 gotham-book">
        <Col sm={8}>
          <Card className="shadow-sm border-0 p-3">
            <Card.Body>
              <Card.Title className="gotham-medium fw-semibold">
                Pengajuan Mitra
              </Card.Title>
              <Card.Text>
                <Table responsive="md" className="mt-3">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Company Name</th>
                      <th>Location</th>
                      <th>Document</th>
                      <th className="text-center">Verification Status</th>
                      <th className="text-center">Approval Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>101 Space</td>
                      <td>Jakarta</td>
                      <td>
                        <a href="#/">Proposal</a>
                      </td>
                      <td className="text-center">
                        <span className="text-color badge bg-success">
                          Verified
                        </span>
                      </td>
                      <td className="text-center">
                        <DropdownButton
                          as={ButtonGroup}
                          key="action"
                          id="dropdown-variants-Secondary"
                          title="Action"
                          size="sm"
                        >
                          <Dropdown.Item eventKey="1" as="button">
                            Approved
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="2" as="button">
                            Not Approved
                          </Dropdown.Item>
                        </DropdownButton>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>101 Space</td>
                      <td>Jakarta</td>
                      <td>
                        <a href="#/">Proposal</a>
                      </td>
                      <td className="text-center">
                        <span className="text-color badge bg-success">
                          Verified
                        </span>
                      </td>
                      <td className="text-center">
                        <DropdownButton
                          as={ButtonGroup}
                          key="action"
                          id="dropdown-variants-Secondary"
                          title="Action"
                          size="sm"
                        >
                          <Dropdown.Item eventKey="1" as="button">
                            Approved
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="2" as="button">
                            Not Approved
                          </Dropdown.Item>
                        </DropdownButton>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>101 Space</td>
                      <td>Jakarta</td>
                      <td>
                        <a href="#/">Proposal</a>
                      </td>
                      <td className="text-center">
                        <span className="text-color badge bg-danger">
                          Not Verified
                        </span>
                      </td>
                      <td className="text-center">
                        <DropdownButton
                          as={ButtonGroup}
                          key="action"
                          id="dropdown-variants-Secondary"
                          title="Action"
                          size="sm"
                        >
                          <Dropdown.Item eventKey="1" as="button">
                            Approved
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="2" as="button">
                            Not Approved
                          </Dropdown.Item>
                        </DropdownButton>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Mitra;
