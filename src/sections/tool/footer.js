import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './footer.scss'

export default class Footer extends React.Component {
  render() {
    return([
        <Row className={'footer'}>
          <Col xs={2}><strong>'Reserved'</strong></Col>
          <Col xs={10}>Legal activity that only regulated individuals and businesses can deliver</Col>
        </Row>,
        <Row>
          <Col xs={2}><strong>'Reserved Instruments'</strong></Col>
          <Col xs={10}>A technical term that relates primarily to conveyancing, you may need to take advice</Col>
        </Row>,
        <Row>
          <Col xs={2}><strong>'Professional Body'</strong></Col>
          <Col xs={6}l>A body that represents the interests of lawyers of different types
            (will have strong link with a regulator or be a regulator)</Col>
          <Col xs={4}>
            <Container className={'countries'}>
              <Row>
                { this.props.countries.map(country =>
                    <Col className={'country'}><div className={'block'} style={{background: country.colour}}>&nbsp;</div><div>{country.name}</div></Col>)
                }
              </Row>
            </Container>
          </Col>
        </Row>
    ])
  }
}