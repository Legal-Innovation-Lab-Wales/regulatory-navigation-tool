import React from "react";
import {Col, Container} from "react-bootstrap";
import './section.scss'

export default class Section extends React.Component {
  render() {
    return (
      <section id="cover">
        <Container fluid>
          <a href={'https://technation.io/lawtechuk/'}>
            <img src={'lawtech-uk.png'} alt={'Law Tech UK Logo'} className={'law-tech-uk-logo'} />
          </a>
          <h1>Regulatory Navigation Tool</h1>
          <h3>A quick reference guide for tech companies innovating in law</h3>
          <h6>Accurate as at 30 April 2021</h6>
        </Container>
      </section>
    )
  }
}