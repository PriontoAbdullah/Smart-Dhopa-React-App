import React, { Component } from 'react';
import './dashboard.css';
import Invoice from './Invoice';

class Download extends Component {
  render() {
    return (
      <div >
        <Invoice className="print"
			viewOrder={this.props.viewOrder}
			/>
      </div>
    );
  }
}

export default Download;