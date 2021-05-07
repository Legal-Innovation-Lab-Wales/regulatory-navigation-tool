import React from "react";
import { Container } from "react-bootstrap";
import "./cover.scss"

export default class Cover extends React.Component {
  render() {
    return (
      <section id="cover">
        <Container fluid>
          <h1>Regulatory Navigation Tool</h1>
          <h3>A quick reference guide for tech companies innovating in law</h3>
          <h6>Accurate as at 30 April 2021</h6>
        </Container>
      </section>
    )
  }
}