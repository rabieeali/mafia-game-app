import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import RolesChoose from "./RolesChoose";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [role, setRole] = useState();
  const navigate = useNavigate();

  const renderComponent = [
    { color: "primary", side: "شهروند" },
    { color: "danger", side: "مافیا" },
    { color: "info", side: "مستقل" },
    { color: "secondary", side: "خاکستری" },
  ];

  localStorage.setItem("myData", JSON.stringify(role));

  return (
    <>
      <Container className="my-3">
        <Row className="g-3">
          {renderComponent.map((comp, index) => (
            <Col key={index} md="3">
              <RolesChoose
                color={comp.color}
                side={comp.side}
                allSelected={(role) => {
                  setRole(role);
                }}
              />
            </Col>  
          ))}
        </Row>
      </Container>
      <Container className="mt-20">
        <Button
          variant="warning"
          className="d-block m-auto"
          onClick={() => {
            navigate("/choosecard");
          }}
        >
          تایید میشه
        </Button>
      </Container>
    </>
  );
};

export default Home;
