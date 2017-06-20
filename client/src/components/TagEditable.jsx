import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

export const TagEditable = ({ id, label }) => (
  <FormControl style={{ maxWidth: '100px' }} key={id} type="text" value={label} />
);

TagEditable.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default TagEditable;
