import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllTags } from '../actions/tags';

const Tags = () => (
  <div>
    Tags
  </div>
);

Tags.propTypes = {
  tags: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  tags: state.tags.tags,
});

const mapDispatchToProps = dispatch => ({
  loadTags: () => dispatch(getAllTags()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
