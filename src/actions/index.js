import axios from 'axios';

const API_KEY = '93975a3e3a261a7912d9e832ac465899';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    let url = `${ROOT_URL}&q=${city},fr`;
    let request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}