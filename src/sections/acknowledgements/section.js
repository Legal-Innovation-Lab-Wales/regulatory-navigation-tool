import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './section.scss'

export default class Section extends React.Component {
  render() {
    return (
        <section id="final">
          <Container fluid>
            <h3>Regulatory Navigation Tool</h3>
            <Row>
              <Col xs={8}>
                <h6>LawtechUK</h6>
                <p>
                  LawtechUK is a government backed initiative supporting the transformation of the legal sector
                  through technology, delivered through a collaboration between Tech Nation, the LawtechUK Panel and
                  the Ministry of Justice. Find out more at&nbsp;
                  <a href={'https://technation.io/lawtechuk/'}>technation.io/lawtechuk</a>
                </p>
                <h6>RRU</h6>
                <p>
                  The Regulatory Response Unit (RRU) was convened by LawtechUK alongside the Lawtech Sandbox.
                  The RRU brings together relevant regulators into a single, fast response forum, to make it easy for
                  lawtech pioneers pushing the boundaries in innovation, to navigate the rules and move forward
                  quickly and with confidence.
                </p>
                <h6>Regulatory Navigation Tool</h6>
                <p>
                  This tool was developed by LawtechUK in collaboration with the Regulatory Response Unit. Special
                  thanks go to Iain Miller at Kingsley Napley and Crispin Passmore for the pro bono support in
                  producing this.
                  We will continue to develop out this tool where needed, and would value your feedback.
                  You can submit feedback or register your interest to receive updates, by emailing&nbsp;
                  <a href={'mailto:lawtechuk@technation.io'}>lawtechuk@technation.io.</a>
                </p>
                <h6>Legal Innovation Lab Wales</h6>
                <p>
                  This version of the tool was created by the <a href={"https://legaltech.wales"}>Legal Innovation Lab
                  Wales</a>. All of the content remains theirs. This tool is just a reproduction&nbsp;
                  <a href={"https://35z8e83m1ih83drye280o9d1-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/Regulatory-Navigation-Tool.pdf"} rel={"nofollow"}>
                    the original</a> remains as the source of truth.
                </p>
              </Col>
              <Col xs={4} className={'logo'}>
                <a href={'https://technation.io/lawtechuk/'}>
                  <img src={'lawtech-uk.png'} alt={'Law Tech UK Logo'} />
                </a>
              </Col>
            </Row>
            <Row className={'rru-row'}>
              <Col className={'d-flex justify-content-center'}>
                <img src={'rru.png'} alt={'Regulatory Response Unit'} className={'rru'}/>
              </Col>
            </Row>
          </Container>
        </section>
    )
  }
}