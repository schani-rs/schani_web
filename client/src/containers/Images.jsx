import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllImages } from '../actions/images';

const Images = () => (
  <div>
    Images
  </div>
);

Images.propTypes = {
  images: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  images: state.tags.tags,
});

const mapDispatchToProps = dispatch => ({
  loadTags: () => dispatch(getAllImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);
