import React from 'react'
import { Box } from '@rebass/grid';
import styled from 'styled-components';
import { APIConsolidatedWeather } from '../interfaces';

const Image = styled.img`
    position: relative;
    width: 100px;
    height: 100px;
`;

const weatherImageMap: any = {
    // light rain
    lr: 'http://www.transparentpng.com/thumb/weather-report/biggest-hits-and-news-sport-icons-png-22.png',

    // showers
    s: 'https://cdn3.iconfinder.com/data/icons/chubby-weather/439/rain_snow-512.png',

    // heavy rain
    hr: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbz_j8cX55c9kkIIVj6xuL4GtaGTbTClDtWTz-JNbSPveLL-r',

    // heavy cloud
    hc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEv5Mc1Ga-UG2VkMMhJ6kkL2J8X6qr2w6xyLgYclgrPfmPgScu',

    // light cloud
    lc: 'https://www.freeiconspng.com/uploads/weather-icon-png-16.png',

    // thunder
    t: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7t99bYAXRK0kOj3paRAp9NnjfCEnfPkKcnkzWI38IjZrkiyCf'

}

export default ({
    weather_state_abbr,
    weather_state_name,
    applicable_date,
    the_temp,
    visibility,
    humidity,
    wind_speed,
    wind_direction_compass
}: APIConsolidatedWeather) => {
    console.log(weather_state_abbr, weather_state_name)
    return (
    <Box width={[1, 1 / 3]}>
        <Image src={`${weatherImageMap[weather_state_abbr]}`} />
        <p>Date: {applicable_date}</p>
        <p>Temperature: {the_temp.toFixed(2)}</p>
        <p>Visibility: {visibility.toFixed(2)}</p>
        <p>Humidity: {humidity.toFixed(2)}</p>
        <p>Wind Speed: {wind_speed.toFixed(2)}</p>
        <p>Wind Direction: {wind_direction_compass}</p>
    </Box>
)
}
