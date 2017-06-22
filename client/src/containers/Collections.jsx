import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { CollectionComponent } from '../components/Collection';
import { ImageComponent } from '../components/Image';
import { getAllImages } from '../actions/images';
import { CollectionNew } from '../components/CollectionNew';
import { CollectionExpanded } from '../components/CollectionExpanded';
import {
  getAllCollections,
  addImageToCol,
  selectCollection,
  changeNewCollectionName,
  changeNewCollectionDesc,
  modeNewCollection,
  addNewCol,
} from '../actions/collections';

class Collections extends Component {
  componentDidMount() {
    if (this.props.collections.length === 0) {
      this.props.loadCollections();
    }
    if (this.props.images.length === 0) {
      this.props.loadImages();
    }
  }

  render() {
    const getCollectionComponent = (i) => {
      if (i.id === this.props.selected) {
        return <CollectionExpanded key={i.id} {...i} images={this.props.currImages} />;
      }
      return (<CollectionComponent onClick={() => this.props.onSelect(i.id)} key={i.id} {...i} />);
    };
    return (
      <Grid>
        <Row>
          <Col xs={9}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {this.props.modeNewCollection
                ? (<CollectionNew
                  name={this.props.inputNewName}
                  description={this.props.inputNewDescription}
                  onChangeName={this.props.onChangeName}
                  onChangeDesc={this.props.onChangeDesc}
                  postCollection={this.props.postCollection}
                />)
                : (<Button onClick={this.props.onAddCollection}>+</Button>)
              }
              {this.props.collections.sort((t0, t1) => t0.name.localeCompare(t1.name)).map(i =>
                getCollectionComponent(i),
              )}
            </div>
          </Col>
          <Col xs={3}>
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
              {this.props.images.sort((t0, t1) => t0.title.localeCompare(t1.title)).map(t =>
                (<ImageComponent
                  onClick={() => this.props.onImageToCollecction(this.props.selected, t.id)}
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

Collections.propTypes = {
  collections: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  images: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  selected: PropTypes.number.isRequired,
  currImages: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  inputNewName: PropTypes.string.isRequired,
  inputNewDescription: PropTypes.string.isRequired,
  modeNewCollection: PropTypes.bool.isRequired,
  loadCollections: PropTypes.func.isRequired,
  loadImages: PropTypes.func.isRequired,
  onImageToCollecction: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeDesc: PropTypes.func.isRequired,
  onAddCollection: PropTypes.func.isRequired,
  postCollection: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  collections: state.collections.collections,
  images: state.images.images,
  selected: state.collections.selected,
  currImages: state.collections.currImages,
  inputNewName: state.collections.inputNewName,
  inputNewDescription: state.collections.inputNewDescription,
  modeNewCollection: state.collections.modeNewCollection,
});

const mapDispatchToProps = dispatch => ({
  loadCollections: () => dispatch(getAllCollections()),
  loadImages: () => dispatch(getAllImages()),
  onImageToCollecction: (collectionId, imageId) => dispatch(addImageToCol(collectionId, imageId)),
  onSelect: id => dispatch(selectCollection(id)),
  onChangeName: name => dispatch(changeNewCollectionName(name)),
  onChangeDesc: desc => dispatch(changeNewCollectionDesc(desc)),
  onAddCollection: () => dispatch(modeNewCollection()),
  postCollection: (name, description) => dispatch(addNewCol(name, description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
