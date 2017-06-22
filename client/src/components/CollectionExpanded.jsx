import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { ImageComponent } from './Image';

export const CollectionExpanded = ({ name, description, images }) => (
  <div>
    <Grid>
      <Row>
        <Col xs={12}><h3>{name}</h3></Col>
      </Row>
      <Row>
        <Col xs={12}>{description}</Col>
      </Row>
      <Row>
        {images.map(t => <ImageComponent key={t.id} onClick={() => 0} {...t} />)}
      </Row>
    </Grid>
  </div>
);

CollectionExpanded.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired, // eslint-disable-line react/forbid-prop-types
  images: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default CollectionExpanded;
