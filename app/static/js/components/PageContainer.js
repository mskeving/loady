import React, { Component, PropTypes } from 'react';

export class CustomComponent extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  }

  render() {
    const { message } = this.props;
    return <div>{ message }</div>;
  }
}

export class PageContainer extends Component {
  render() {
    return (
      <CustomComponent message="Your new app" />
    );
  }
}
