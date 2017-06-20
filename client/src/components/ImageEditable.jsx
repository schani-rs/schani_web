import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Image, ControlLabel, Grid, Row, Col } from 'react-bootstrap';

const ImageEditable = ({ id, title, description, license, imgLink }) => (
  <div
    style={{
      borderRadius: '5px',
      backgroundColor: 'aliceblue',
      margin: '3px',
      padding: '9px',
      textAlign: 'left',
      minWidth: '400px',
      maxWidth: '400px',
      minHeight: '100px',
      maxHeight: '300px',
      border: '1px solid lightgrey',
    }}
    key={id}
  >
    <Grid style={{ minWidth: '170px', maxWidth: '400px' }}>
      <Row>
        <Col xs={2} />
        <Col xs={8}>
          <Image style={{ maxWidth: '50%', maxHeight: '50%' }} src={imgLink} rounded />
        </Col>
        <Col xs={2} />
      </Row>
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
  </div>
);

ImageEditable.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  imgLink: state.images.currImageFile,
});

export default connect(mapStateToProps)(ImageEditable);
