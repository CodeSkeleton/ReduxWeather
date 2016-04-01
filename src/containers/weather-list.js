import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
    renderWeather(cityData) {
        let temperature = [];
        let pressure = [];
        let humidity = [];

        cityData.list.forEach((weather) => {
            temperature.push(weather.main.temp);
            pressure.push(weather.main.pressure);
            humidity.push(weather.main.humidity);
        });

        let name = cityData.city.name;
        let {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat} />
                </td>
                <td><Chart color='red' data={temperature} unit="C" /></td>
                <td><Chart color='green' data={pressure} unit="hPa" /></td>
                <td><Chart color='blue' data={humidity} unit="%" /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);