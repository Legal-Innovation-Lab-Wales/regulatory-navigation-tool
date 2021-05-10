import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './tool.scss'

class Activity extends React.Component {
  render() {
    const selected = this.props.parent.state.selected === this.props.activity;

    return (
        <Row onClick={() => this.props.parent.setState({ selected: this.props.activity })}
             className={`activity ${selected ? 'selected' : ''}`}>
          <div className={'name align-right'}>{ this.props.activity.name }</div>
          <div className={'bar'}>&nbsp;</div>
        </Row>
    )
  }
}

class Regulator extends React.Component {
  render() {
    let selected = this.props.parent.selected(this.props.regulator),
        country = this.props.parent.country(this.props.regulator)

    return (
      <Row className={`${selected ? 'selected' : ''}`}>
        { country ? [
            <div className={'bar'} style={{background: country.colour}}>&nbsp;</div>,
            <div className={'name'} style={{color: country.colour}}>{ this.props.regulator.name }</div>
          ] : [
            <div className={'bar'}>&nbsp;</div>,
            <div className={'name'}>{ this.props.regulator.name }</div>
          ]
        }
      </Row>
    )
  }
}

class Activities extends React.Component {
  render() {
    return (
      <Container className={'activities'}>
        <Row>
          <Col xs={1} className={'marker'}>
            <div>{ this.props.reserved ? '' : 'Not ' }Reserved</div>
          </Col>
          <Col xs={10}>
            <Container>
              { this.props.activities.filter(activity => activity.reserved === this.props.reserved )
                  .map(activity => <Activity parent={this.props.parent} activity={activity} />) }
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default class Tool extends React.Component {
  render() {
    return (
        <Container className={'tool'}>
          <Row>
            <Col xs={7}>
              <Activities activities={this.props.activities} parent={this.props.parent} reserved={true} />
              <Activities activities={this.props.activities} parent={this.props.parent} reserved={false} />
            </Col>
            <Col xs={5}>
              <Container>
                <Row>
                  <Col className={'activities'}>
                    <Container>
                      { this.props.regulators.map(regulator => <Regulator regulator={regulator} parent={this.props.parent}/>) }
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
    );
  }
}