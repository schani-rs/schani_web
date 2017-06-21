import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getAllTags, selectTag, changeNewTag, addNewTag, postTag } from '../actions/tags';
import { TagComponent } from '../components/Tag';
import { TagEditable } from '../components/TagEditable';
import { TagNew } from '../components/TagNew';

class Tags extends Component {
  componentDidMount() {
    if (this.props.tags.length === 0) {
      this.props.loadTags();
    }
  }
  render() {
    const getComponent = (i) => {
      if (i.id === this.props.selected) {
        return <TagEditable key={i.id} {...i} />;
      }
      return <TagComponent onClick={this.props.selectTag} key={i.id} {...i} />;
    };
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
        {this.props.inputNewTag
          ? (<TagNew
            label={this.props.newTagLabel}
            postTag={this.props.postTag}
            changeNewTag={this.props.changeNewTag}
          />)
          : (<Button onClick={this.props.addNewTag}>+</Button>)
        }
        {this.props.tags.sort((t0, t1) => t0.label.localeCompare(t1.label)).map(i =>
          getComponent(i),
        )}
      </div>
    );
  }
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  loadTags: PropTypes.func.isRequired,
  selectTag: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
  addNewTag: PropTypes.func.isRequired,
  changeNewTag: PropTypes.func.isRequired,
  postTag: PropTypes.func.isRequired,
  newTagLabel: PropTypes.string.isRequired,
  inputNewTag: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  tags: state.tags.tags,
  selected: state.tags.selected,
  newTagLabel: state.tags.newTagLabel,
  inputNewTag: state.tags.inputNewTag,
});

const mapDispatchToProps = dispatch => ({
  loadTags: () => dispatch(getAllTags()),
  selectTag: id => dispatch(selectTag(id)),
  changeNewTag: label => dispatch(changeNewTag(label)),
  addNewTag: () => dispatch(addNewTag()),
  postTag: label => dispatch(postTag(label)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
