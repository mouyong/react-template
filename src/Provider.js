import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  Api: PropTypes.object,
  children: PropTypes.any
}

const childContextTypes = {
  Api: PropTypes.object
}

export class Provider extends React.Component {
  static propTypes = propTypes
  
  static childContextTypes = childContextTypes

  getChildContext () {
    return {
      Api: this.props.Api
    }
  }

  render() {
    return (<div>{this.props.children}</div>)
  }
}
