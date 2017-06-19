import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, Grid, Row, Col, Thumbnail } from 'react-bootstrap';

export const ImageEditable = ({ id, title, description, license }) => (
  <div
    style={{
      borderRadius: '5px',
      backgroundColor: 'aliceblue',
      margin: '3px',
      padding: '7px',
      textAlign: 'left',
      minWidth: '200px',
      maxWidth: '200px',
      minHeight: '200px',
      border: '1px solid lightgrey',
    }}
    key={id}
  >
    <Grid style={{ minWidth: '170px', maxWidth: '170px' }}>
      <Row>
        <Thumbnail style={{ minHeight: '170px', minWidth: '170px', maxWidth: '170px', backgroundColor: 'lightgrey' }} src="daff" />
      </Row>
      <Row>
        <Col xs={6}><ControlLabel>Title: </ControlLabel></Col>
        <Col xs={6}>{title}</Col>
      </Row>
      <Row>
        <Col xs={6}><ControlLabel>Desc: </ControlLabel></Col>
        <Col xs={6}>{description}</Col>
      </Row>
      <Row>
        <Col xs={6}><ControlLabel>License: </ControlLabel></Col>
        <Col xs={6}>{license}</Col>
      </Row>
    </Grid>
  </div>
);

ImageEditable.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
};

export default ImageEditable;
