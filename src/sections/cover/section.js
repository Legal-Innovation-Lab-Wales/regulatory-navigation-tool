import React from "react";
import {Container} from "react-bootstrap";
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
          <p>This page is a reproduction of a PDF tool originally created by&nbsp;
            <a href={"https://technation.io/lawtechuk/"}>LawtechUK</a>, created by the&nbsp;
            <a href={"https://legaltech.wales"}>Legal Innovation Lab Wales.</a></p>
          <p><a href={"https://35z8e83m1ih83drye280o9d1-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/Regulatory-Navigation-Tool.pdf"} rel={"nofollow"}>
              The original</a> is a wealth of knowledge and an incredible tool, however we discovered it had several
            compatibility issues in a range of browsers. This version is built using ReactJS and should work on all
            browsers. The Legal Innovation Lab Wales is grateful for the support of LawtechUK in allowing us to use
            their content in this recreation.</p>
          <h6>Accurate as at 30 April 2021</h6>
        </Container>
      </section>
    )
  }
}