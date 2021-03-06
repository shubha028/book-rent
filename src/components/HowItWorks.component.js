import React, { Component } from 'react';
import {Row, Col, Card, CardText, CardTitle } from "reactstrap";
import Demo from './demo.component';

export default class HowItWorks extends Component {

  render() {
    return (
<div>
<div className="first">
        <h1>How It Works</h1>
      </div>
      <Row>
        <Col sm="6">
          <Card body className="box">
            <CardTitle className="guide" tag="h5">
              RENTERS GUIDE
            </CardTitle>
            <CardText className="lines">
              How to find book and rent <br />
              <br />
              1 User find book he likes from the users section
              <br />
              2 User find book he likes from the users section <br />
              3 User find book he likes from the users section
              <br />
              User find book he likes from the users section
              <br />
            </CardText>
          </Card>
        </Col>
        <Col sm="6">
          <Card body className="box">
            <CardTitle className="guide" tag="h5">
              LEASERS GUIDE
            </CardTitle>
            <CardText className="lines">
              How to put book on rent
              <br />
              <br />
              1 User find book he likes from the users section
              <br />
              2 User find book he likes from the users section
              <br />
              3 User find book he likes from the users section
              <br />
              User find book he likes from the users section
              <br />
            </CardText>
          </Card>
        </Col>
      </Row>
      <Demo></Demo>
    </div>
   );
}
}