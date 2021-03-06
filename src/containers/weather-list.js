import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {

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
        let temperature = [];
        let pressure = [];
        let humidity = [];

        cityData.list.forEach((weather) => {
            temperature.push(weather.main.temp);
            pressure.push(weather.main.pressure);
            humidity.push(weather.main.humidity);
        });

        let cityName = cityData.city.name;
        let {lat, lon} = cityData.city.coord;

        return (
            <tr key={cityName}>
                <td>
                    <GoogleMap lat={lat} lon={lon}/>
                    <div>{cityName}</div>
                </td>
                <td>
                    <Chart data={temperature} unit="°C" width={250} height={100} min={-20} max={50} color="orange"/>
                </td>
                <td>
                    <Chart data={pressure} unit="hPa" width={250} height={100} min={800} max={1050} color="green"/>
                </td>
                <td>
                    <Chart data={humidity} unit="%" width={250} height={100} min={0} max={100} color="blue"/>
                </td>
            </tr>
        );
    }
}


function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
