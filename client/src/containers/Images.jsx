import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { getAllImages, getAllTagsOfImage, selectImage, loadImageUri, addTagToImage } from '../actions/images';
import { ImageComponent } from '../components/Image';
import ImageEditable from '../components/ImageEditable';
import { getAllTags } from '../actions/tags';
import { TagComponent } from '../components/Tag';

class Images extends Component {
  componentDidMount() {
    if (this.props.images.length === 0) {
      this.props.loadImages();
    }
    if (this.props.tags.length === 0) {
      this.props.loadTags();
    }
  }
  render() {
    const getImageComponent = (i) => {
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
      <Grid>
        <Row>
          <Col xs={9}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {this.props.images.sort((t0, t1) => t0.title.localeCompare(t1.title)).map(i =>
                getImageComponent(i),
              )}
            </div>
          </Col>
          <Col xs={3}>
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
              {this.props.tags.sort((t0, t1) => t0.label.localeCompare(t1.label)).map(t =>
                (<TagComponent
                  onClick={() => this.props.onTagToImage(this.props.selected, t.id)}
                  key={t.id}
                  {...t}
                />),
              )}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Images.propTypes = {
  images: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  currTags: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  tags: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  loadImages: PropTypes.func.isRequired,
  loadTags: PropTypes.func.isRequired,
  selectImage: PropTypes.func.isRequired,
  loadTagsOfImage: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
  onTagToImage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  images: state.images.images,
  tags: state.tags.tags,
  currTags: state.images.currTags,
  selected: state.images.selected,
});

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(getAllImages()),
  loadTags: () => dispatch(getAllTags()),
  loadTagsOfImage: id => dispatch(getAllTagsOfImage(id)),
  selectImage: (id) => {
    dispatch(loadImageUri(id));
    dispatch(selectImage(id));
  },
  onTagToImage: (imageId, tagId) => {
    if (imageId >= 0) {
      dispatch(addTagToImage(imageId, tagId));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);
