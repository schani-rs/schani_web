import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Row, Col } from 'react-bootstrap';

export const TagComponent = ({ id, label, onClick }) => (
  <div
    style={{
      borderRadius: '5px',
      textAlign: 'left',
      padding: '3px',
      border: '1px solid lightgrey',
      width: '200px',
    }}
    key={id}
  >
    <Grid style={{ width: '170px' }}>
      <Row>
        <Col xs={8}>
          {label}
        </Col>
        <Col xs={4}>
          <Button onClick={() => onClick(id)} key={id}>
            edit
          </Button>
        </Col>
      </Row>
    </Grid>
  </div>
);

TagComponent.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TagComponent;
