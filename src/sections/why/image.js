import React from "react";
import { Container, Row } from "react-bootstrap";
import './image.scss'

export default class Image extends React.Component {
  render() {
    return (
      <Container className={'image'}>
        <Row className={'justify-content-center'}>
          <div className={'outer-circle'}>
            <div className={'text'}><strong>Not Reserved</strong></div>
            <div className={'inner-circle'}>
              <div className={'text'}><strong>Reserved</strong></div>
            </div>
          </div>
        </Row>
        <Row className={'text-center'}>
          Only a small portion of legal services are regulated. This document provides you with guidance on where to go.
        </Row>
      </Container>


    )
  }
}