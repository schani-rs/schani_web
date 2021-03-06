import React from 'react';
import PropTypes from 'prop-types';
import { Button, ControlLabel, Grid, Row, Col } from 'react-bootstrap';

export const ImageComponent = ({ id, title, description, license, onClick }) => (
  <Button
    onClick={() => onClick(id)}
    style={{
      margin: '3px',
      textAlign: 'left',
      minWidth: '400px',
      maxWidth: '400px',
      minHeight: '100px',
      maxHeight: '100px',
    }}
    key={id}
  >
    <Grid style={{ minWidth: '170px', maxWidth: '400px' }}>
      <Row>
        <Col xs={2}><ControlLabel>Title: </ControlLabel></Col>
        <Col xs={10}>{title}</Col>
      </Row>
      <Row>
        <Col xs={2}><ControlLabel>Desc: </ControlLabel></Col>
        <Col xs={10}>{description}</Col>
      </Row>
      <Row>
        <Col xs={2}><ControlLabel>License: </ControlLabel></Col>
        <Col xs={10}>{license}</Col>
      </Row>
    </Grid>
  </Button>
);

ImageComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageComponent;
