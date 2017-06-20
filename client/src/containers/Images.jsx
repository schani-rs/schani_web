import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllImages, selectImage, loadImageUri } from '../actions/images';
import { ImageComponent } from '../components/Image';
import ImageEditable from '../components/ImageEditable';

class Images extends Component {
  componentDidMount() {
    this.props.loadImages();
  }
  render() {
    const getComponent = (i) => {
      if (i.id === this.props.selected) {
        return <ImageEditable key={i.id} {...i} />;
      }
      return <ImageComponent onClick={this.props.selectImage} key={i.id} {...i} />;
    };
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {this.props.images.map(i =>
          getComponent(i),
        )}
      </div>
    );
  }
}

Images.propTypes = {
  images: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  loadImages: PropTypes.func.isRequired,
  selectImage: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  images: state.images.images,
  selected: state.images.selected,
});

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(getAllImages()),
  selectImage: (id) => {
    dispatch(loadImageUri(id));
    dispatch(selectImage(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);
