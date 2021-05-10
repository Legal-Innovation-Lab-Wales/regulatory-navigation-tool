import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./section.scss"
import Text from "./text";

export default class Section extends React.Component {
  render() {
    return (
        <section id="why">
          <Container fluid>
            <Row>
              <Col xs={8} className={'text'}>
                <Text />
              </Col>
              <Col xs={4} className={'image'}>
                <Container>
                  <Row>
                    <div className={'outer-circle'}>
                      <div>Not Reserved</div>

                      <div className={'inner-circle'}>
                        <div>Reserved</div>
                      </div>
                    </div>
                  </Row>
                  <Row>
                    Only a small portion of legal services are regulated. This document provides you with guidance on where to go.
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </section>
    )
  }
}