import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Row, Col, FormControl } from 'react-bootstrap';

export const TagNew = ({ postTag, changeNewTag, label }) => (
  <div
    style={{
      borderRadius: '5px',
      textAlign: 'left',
      padding: '3px',
      border: '1px solid lightgrey',
      width: '200px',
    }}
  >
    <Grid style={{ width: '170px' }}>
      <Row>
        <Col xs={8}>
          <FormControl
            placeholder="new tag"
            value={label}
            onChange={e => changeNewTag(e.target.value)}
          />
        </Col>
        <Col xs={4}>
          <Button onClick={() => postTag(label)} >
            Ok
          </Button>
        </Col>
      </Row>
    </Grid>
  </div>
);

TagNew.propTypes = {
  label: PropTypes.string.isRequired,
  postTag: PropTypes.func.isRequired,
  changeNewTag: PropTypes.func.isRequired,
};

export default TagNew;
