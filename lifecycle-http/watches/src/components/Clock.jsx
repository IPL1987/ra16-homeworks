import { Component } from 'react';
import TimeZonesForm from './InputForm';
import TimeZonesClock from './Clocks';
import { nanoid } from 'nanoid';

export default class TimeZones extends Component {
  state = { clocks: [] };

  addClock = ({ title, zone }) => {
    this.setState(prevState => ({
      clocks: [...prevState.clocks, { id: nanoid(), title, zone }]
    }))
  }

  deleteClock = (id) => {
    return () => {
      this.setState(prevState => ({
        clocks: prevState.clocks.filter((clock) => clock.id !== id)
      }))
    }
  }

  render() {
    return (
      <div className="time-zones">
        <TimeZonesForm addClock={this.addClock} />
        <div className="time-zones-clockscontainer">
          {this.state.clocks.map((clock) =>
            <TimeZonesClock
              key={clock.id}
              title={clock.title}
              zone={+clock.zone}
            >
              <div
                className="time-zones-delete"
                onClick={this.deleteClock(clock.id)}
              />
            </TimeZonesClock>
          )}
        </div>
      </div>
    );
  }
}