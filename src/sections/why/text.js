import React from "react";
import {Container, Row, Col, Table} from "react-bootstrap";

export default class Text extends React.Component {
  render() {
    return (
      [
        <h3>Why a Regulatory Navigation Tool?</h3>,
        <h6>This tool is to help those innovating in law to navigate the regulatory landscape and quickly see which
        activities require regulatory exemption.</h6>,
        <Container>
          <Row>
            <Col>
              <p>There are six categories of legal services that are&nbsp;
                <a href={'https://www.legislation.gov.uk/ukpga/2007/29/section/12'}>'reserved activities'</a>&nbsp;
                under the Legal Services Act 2007. These activities can only be carried out by people who are
                authorised or exempt under the legislation:</p>
              <Table striped>
                <thead>
                  <tr>
                    <th><strong>Reserved Activity</strong></th>
                    <th><strong>Activity description in tool</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Exercise of a right of audience</td>
                    <td>Speaking and addressing a court</td>
                  </tr>
                  <tr>
                    <td>Conduct of litigation</td>
                    <td>Preparing and filing court documents</td>
                  </tr>
                  <tr>
                    <td>Reserved instrument activities</td>
                    <td>Transfer documents</td>
                  </tr>
                  <tr>
                    <td>Probate activities</td>
                    <td>Probate / Confirmation</td>
                  </tr>
                  <tr>
                    <td>Notarial activities</td>
                    <td>Authentication (of documents)</td>
                  </tr>
                  <tr>
                    <td>The administration of oaths</td>
                    <td>Oaths (making sworn legal statements)</td>
                  </tr>
                </tbody>
              </Table>
              <p>These activities fall into two categories:</p>
              <ol>
                <li>Those that must be carried out by an authorised person and cannot be delegated. The exercise of a
                  right of audience, notarial activities and the administration of oaths fall within this category.</li>
                <li>Those that can also be undertaken at the direction of or under supervision of an authorised person.
                  The conduct of litigation, reserved instrument activities and probate activities fall within this
                  category.</li>
              </ol>
              <p>We hope this tool helps you quickly determine if any activity you are considering is regulated under
                legal services regulation</p>
            </Col>
            <Col>
              <p>and if so by which regulators. If your activity is not listed as a reserved activity, it means it is
                not caught by the Legal Services Act 2007.</p>
              <p>We have also included a few activities that are not ‘reserved’ activities, but that are common
                questions for tech companies in law, for example ownership of legal businesses. These activities
                are not exhaustive and may be iterated on based on user feedback.</p>
              <p>If your activity is caught, you can consider:</p>
              <ul>
                <li>Partnering with a regulated legal services provider.</li>
                <li>Applying to become a regulated legal services provider with one of the legal services regulators
                  listed.</li>
                <li>Adjusting your services and innovating with the regulation – help can be found within the RRU and
                  the Lawtech Sandbox, as well as directly with specific regulators.</li>
              </ul>
              <p>Whether or not your activity is ‘reserved’, other regulations and best practice may apply, for
                example data protection legislation and sector specific regulations such as financial and immigration
                services, money laundering and insurance.</p>
              <p>This tool is intended as a signposting tool and a general starting point to support your own research.
                This tool should not be taken as legal advice and cannot replace specific analysis of and
                consultation on your plans and circumstances.</p>
              <p><em>If you have feedback, suggestions or discover inaccuracies,
                please do <a href={'#'}>let us know.</a></em></p>
            </Col>
          </Row>
        </Container>
      ]
    )
  }
}