import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Image, ControlLabel, Grid, Row, Col } from 'react-bootstrap';
import { TagComponent } from './Tag';

const ImageEditable = ({ id, title, description, license, imgLink, tags }) => (
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
      border: '1px solid lightgrey',
    }}
    key={id}
  >
    <Grid style={{ maxWidth: '400px' }}>
      <Row>
        <Image
          style={{ margin: '10px', maxWidth: '90%', maxHeight: '90%' }}
          src={imgLink}
          rounded
        />
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
      <Row>
        {tags.map(t => <TagComponent key={t.id} onClick={() => 0} {...t} />)}
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
  tags: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  imgLink: state.images.currImageFile,
});

export default connect(mapStateToProps)(ImageEditable);
