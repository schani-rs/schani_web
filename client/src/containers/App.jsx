import React from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import Header from './Header';
import DevTools from './DevTools';
import Images from './Images';
import Collections from './Collections';
import Tags from './Tags';

const App = ({ store, currNav }) => (
  <Provider store={store} >
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          {currNav === 'images' ? (<Images />) : ''}
          {currNav === 'collections' ? (<Collections />) : ''}
          {currNav === 'tags' ? (<Tags />) : ''}
        </div>
      </div>
      <DevTools />
    </div>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  currNav: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currNav: state.navigation.currNav,
});

export default connect(mapStateToProps)(App);
