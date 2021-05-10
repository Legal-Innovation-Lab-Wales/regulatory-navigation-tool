import React from "react";
import {Container, Row, Col, Table, Button} from "react-bootstrap";
import './explainer.scss'
import ReactHtmlParser from 'react-html-parser';

class Regulator extends React.Component {
  render() {
    const selected = this.props.parent.selected(this.props.regulator),
          country = this.props.parent.country(this.props.regulator)

    const cells = [
      <td>{ this.props.regulator.profession }</td>,
      <td>{ this.props.regulator.professional_body }</td>
    ]

    return country ?
        <tr className={`${selected ? 'selected' : ''}`}>
          <td style={{color: country.colour}}>{ this.props.regulator.name }</td>
          { cells }
        </tr> :
        <tr>
          <td>{ this.props.regulator.name }</td>
          { cells }
        </tr>;
  }
}

export default class Explainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show_table: false
    }
  }

  render() {
    let body = ''

    if (this.props.selected) {
      if (this.state.show_table) {
        body =
            <Table striped>
              <thead>
                <tr>
                  <th scope={'col'}><strong>Regulatory Body</strong></th>
                  <th scope={'col'}><strong>Profession</strong></th>
                  <th scope={'col'}><strong>Professional Body</strong></th>
                </tr>
              </thead>
              <tbody>
                { this.props.regulators.map(regulator => {
                  if (typeof regulator.profession === 'string') {
                    return <Regulator regulator={regulator} parent={this.props.parent} />
                  } else {
                    const regulators = []

                    for (let i = 0; i < regulator.profession.length; i++) {
                      const new_regulator = {
                        id: regulator.id,
                        country: regulator.country,
                        name: regulator.name,
                        profession: regulator.profession[i],
                        professional_body: regulator.professional_body[i]
                      }

                      regulators.push(<Regulator regulator={new_regulator} parent={this.props.parent} />)
                    }

                    return regulators
                  }
                }) }
              </tbody>
            </Table>
      } else {
        body = <Row>
          <Col>
            { this.props.selected.heading ? <h5>{this.props.selected.heading}</h5> : ''}
            { this.props.selected.subheading ? <h6>{this.props.selected.subheading}</h6> : ''}
            { this.props.selected.text ? ReactHtmlParser(this.props.selected.text) : ''}
          </Col>
        </Row>
      }
    }

    return (
        <Container className={'explainer p-3'}>
          { this.props.selected ? [
              body,
              <Row className={'mt-auto justify-content-center'}>
                <Button variant={'outline-primary'} onClick={() => this.setState({ show_table: !this.state.show_table })}>
                  { this.state.show_table ? 'Back' : 'View regulators' }
                </Button>
              </Row>
          ] : '' }
        </Container>
    )
  }
}