import React from 'react';

export default React.createClass({

  displayName: 'Artist',

  render() {
    return (
        <span>Artist name: {this.props.name}</span>
    );
  }

});