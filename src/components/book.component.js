import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';

const Book = (props) => {
  return (
    <div>
    <Row>
    <Col md="6">
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>{props.description}</CardText>
          <Button>See More</Button>
        </CardBody>
      </Card>
    </Col>
    </Row>
    </div>
  );
};

export default Book;