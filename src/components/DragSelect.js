import React from 'react';

/*

FEATURESET:
* single click to select individual items
* click drag to select multiple
* each new selection resets

*/
class DragSelect extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  render() {
    const { children } = this.props;

    return <>{children}</>;
  }
}

export default DragSelect;
