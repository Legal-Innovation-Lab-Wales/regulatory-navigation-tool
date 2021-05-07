import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./section.scss"
import Text from "./text";
import Image from "./image";

export default class Section extends React.Component {
  render() {
    return (
        <section id="why">
          <Container fluid>
            <Row>
              <Col xs={8}>
                <Text />
              </Col>
              <Col xs={4} className={'d-flex align-items-center'}>
                <Image />
              </Col>
            </Row>
          </Container>
        </section>
    )
  }
}