import React, {Component} from 'react';
import Clock from 'react-live-clock';
import { Switch } from 'antd';
import moment from 'moment';
import './Clock.css'

class Time extends Component {
  render() {
  return (
    <div className="Time">
        <div>
            <h3> London Clock </h3>
        </div>
      <Clock format={'HH : mm : ss  A'} ticking={true} timezone={'Europe/London'} />
    </div>
  );
}
}

export default Time;