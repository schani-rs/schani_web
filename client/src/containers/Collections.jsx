import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllCollections } from '../actions/collections';

const Collections = () => (
  <div>
    Collections
  </div>
);

Collections.propTypes = {
  collections: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  collections: state.tags.tags,
});

const mapDispatchToProps = dispatch => ({
  loadCollections: () => dispatch(getAllCollections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
