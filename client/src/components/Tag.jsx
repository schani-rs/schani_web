import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const TagComponent = ({ id, label, onClick }) => (
  <Button onClick={() => onClick(id)} key={id}>
    {label}
  </Button>
);

TagComponent.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TagComponent;
