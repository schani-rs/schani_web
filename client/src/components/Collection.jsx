import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const CollectionComponent = ({ id, name, description, onClick }) => (
  <Button onClick={() => onClick(id)} key={id}>
    {name}
    {description}
  </Button>
);

CollectionComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CollectionComponent;
