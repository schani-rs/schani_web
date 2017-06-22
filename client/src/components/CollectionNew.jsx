import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Row, Col, FormControl } from 'react-bootstrap';

export const CollectionNew = ({
  name,
  description,
  postCollection,
  onChangeName,
  onChangeDesc,
}) => (
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
            placeholder="name"
            value={name}
            onChange={e => onChangeName(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <FormControl
            placeholder="description"
            value={description}
            onChange={e => onChangeDesc(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Button onClick={() => postCollection(name, description)} >Ok</Button>
        </Col>
      </Row>
    </Grid>
  </div>
);

CollectionNew.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeDesc: PropTypes.func.isRequired,
  postCollection: PropTypes.func.isRequired,
};

export default CollectionNew;
