import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectNavigation } from '../actions/navigation';
import { Header } from '../components/Header';

const HeaderContainer = ({ doNav }) => (
  <Header
    navImages={() => doNav('images')}
    navCollections={() => doNav('collections')}
    navTags={() => doNav('tags')}
  />
);

const mapDispatchToProps = dispatch => ({
  doNav: value => dispatch(selectNavigation(value)),
});

HeaderContainer.propTypes = {
  doNav: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(HeaderContainer);
