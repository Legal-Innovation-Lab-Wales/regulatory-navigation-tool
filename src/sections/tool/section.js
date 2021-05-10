import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Explainer from "./explainer";
import Tool from "./tool";
import Footer from "./footer";

export default class Section extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: [],
      regulators: [],
      countries: [],
      selected: null
    }
  }

  componentDidMount() {
    Promise.all([
        fetch('activities.json').then(response => response.json()),
        fetch('regulators.json').then(response => response.json()),
        fetch('countries.json').then(response => response.json())
    ]).then(([activities, regulators, countries]) => {
      this.setState({
        activities: activities,
        regulators: regulators,
        countries: countries,
        selected: null
      })
    })
  }

  selected(regulator) {
    if (this.state.selected) {
      return this.state.selected.regulators.includes(regulator.id)
    }

    return false;
  }

  country(regulator) {
    if (this.selected(regulator)) {
      return this.state.countries.find(country => country.id === regulator.country)
    }

    return null
  }

  render() {
    return (
      <section id="tool">
        <Container fluid className={'p-3'}>
          <h3><strong>Regulatory Navigation Tool</strong> - click an activity for details</h3>
          <Row>
            <Col xs={6}>
              <Tool parent={this} selected={this.state.selected} activities={this.state.activities}
                    regulators={this.state.regulators} countries={this.state.countries} />
            </Col>
            <Col xs={6}>
              <Explainer parent={this} selected={this.state.selected}
                         regulators={this.state.regulators} countries={this.state.countries} />
            </Col>
          </Row>
          <Footer countries={this.state.countries} />
        </Container>
      </section>
    )
  }
}