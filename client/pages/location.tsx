import fetch from 'isomorphic-unfetch';
import { NextContext } from 'next';
import Link from 'next/link';
import React, { Component } from 'react';
import { LocationPageProps } from '../interfaces';
import { Flex, Box } from '@rebass/grid';
import WeatherCard from '../components/weather-card';

export default class LocationInformation extends Component<LocationPageProps> {
    static async getInitialProps({ query }: NextContext) {
        const { woeid } = query;
        const raw = await fetch(`https://www.metaweather.com/api/location/${woeid}`);
        const data = await raw.json();
        return { data }
    }

    render() {
        const { data } = this.props

        if (data) {
            const { title, location_type, latt_long, sun_rise, sun_set, timezone_name, consolidated_weather } = data;
            const [lat, long] = latt_long.split(',')
            return (
                <>
                    <Link href="/"><a>&lt;</a></Link>
                    <h3 style={{ textAlign: 'center' }}>{title}</h3>
                    <Flex>
                        <Box width={1 / 2}>Location Type: </Box>
                        <Box width={1 / 2}>{location_type}</Box>
                    </Flex>
                    <hr />
                    <Flex>
                        <Box width={1 / 2}>Latitude</Box>
                        <Box width={1 / 2}>{lat}</Box>
                    </Flex>
                    <hr />
                    <Flex>
                        <Box width={1 / 2}>Longitude</Box>
                        <Box width={1 / 2}>{long}</Box>
                    </Flex>
                    <hr />
                    <Flex>
                        <Box width={1 / 2}>Timezone</Box>
                        <Box width={1 / 2}>{timezone_name}</Box>
                    </Flex>
                    <hr />
                    <Flex>
                        <Box width={1 / 2}>Sunrise</Box>
                        <Box width={1 / 2}>{new Date(sun_rise).toLocaleTimeString()}</Box>
                    </Flex>
                    <hr />
                    <Flex>
                        <Box width={1 / 2}>Sunset</Box>
                        <Box width={1 / 2}>{new Date(sun_set).toLocaleTimeString()}</Box>
                    </Flex>
                    <hr />
                    <h2>Weather</h2>
                    <Flex>
                        {consolidated_weather.slice(0, 3).map((weather, key) => (
                            <WeatherCard {...weather} key={key} />
                        ))}
                    </Flex>
                </>
            )
        }

        return <div>No data found.</div>
    }
}
