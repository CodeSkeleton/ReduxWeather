import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
  //constructor() {
  //  super();
  //  this.renderWeather = this.renderWeather.bind(this);
  //}

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
         { this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const temperature = cityData.list.map(item => item.main.temp);
    const pressure = cityData.list.map(item => item.main.pressure);
    const humidity = cityData.list.map(item => item.main.humidity);
    const {lat, lon} = cityData.city.coord;

    return (
      <tr key={cityName}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
          <div>{cityName}</div>
        </td>
        <td>
          <Chart data={temperature} unit="°C" width={250} height={100} min="-20" max="50" color="orange"/>
        </td>
        <td>
          <Chart data={pressure} unit="hPa" width={250} height={100} min="800" max="1050" color="green"/>
        </td>
        <td>
          <Chart data={humidity} unit="%" width={250} height={100} min="0" max="100" color="blue"/>
        </td>
      </tr>
    );
  }
}


function mapStateToProps({weather}) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
