import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllTags, selectTag } from '../actions/tags';
import { TagComponent } from '../components/Tag';
import { TagEditable } from '../components/TagEditable';

class Tags extends Component {
  componentDidMount() {
    this.props.loadTags();
  }
  render() {
    const getComponent = (i) => {
      if (i.id === this.props.selected) {
        return <TagEditable key={i.id} {...i} />;
      }
      return <TagComponent onClick={this.props.selectTag} key={i.id} {...i} />;
    };
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {this.props.tags.map(i =>
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
};

const mapStateToProps = state => ({
  tags: state.tags.tags,
  selected: state.tags.selected,
});

const mapDispatchToProps = dispatch => ({
  loadTags: () => dispatch(getAllTags()),
  selectTag: id => dispatch(selectTag(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
