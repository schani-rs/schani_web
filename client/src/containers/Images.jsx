import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllImages, getAllTagsOfImage, selectImage, loadImageUri } from '../actions/images';
import { ImageComponent } from '../components/Image';
import ImageEditable from '../components/ImageEditable';

class Images extends Component {
  componentDidMount() {
    this.props.loadImages();
  }
  render() {
    const getComponent = (i) => {
      if (i.id === this.props.selected) {
        return <ImageEditable key={i.id} {...i} tags={this.props.currTags} />;
      }
      return (<ImageComponent
        onClick={() => {
          this.props.selectImage(i.id);
          this.props.loadTagsOfImage(i.id);
        }}
        key={i.id}
        {...i}
      />);
    };
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {this.props.images.sort((t0, t1) => t0.title.localeCompare(t1.title)).map(i =>
          getComponent(i),
        )}
      </div>
    );
  }
}

Images.propTypes = {
  images: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  currTags: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  loadImages: PropTypes.func.isRequired,
  selectImage: PropTypes.func.isRequired,
  loadTagsOfImage: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  images: state.images.images,
  currTags: state.images.currTags,
  selected: state.images.selected,
});

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(getAllImages()),
  loadTagsOfImage: id => dispatch(getAllTagsOfImage(id)),
  selectImage: (id) => {
    dispatch(loadImageUri(id));
    dispatch(selectImage(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);
