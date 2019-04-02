import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch';
import { NextContext } from 'next';

import InformationCard from '../components/card'

// @ts-ignore
import 'react-flexbox-grid/dist/react-flexbox-grid.css'
// @ts-ignore
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import Link from 'next/link';

interface ConsolidatedWeather {
    id: number;
    applicable_date: Date
    weather_state_name: string
    weater_state_abbr: string
    wind_speed: number;
    wind_direction: number;
    wind_direction_compass: string
    air_pressure: number;
    humidity: number;
    visibility: number
    predictability: number
    title: string
    url: string
}

interface DataInformation {
    title: string
    location_type: string
    latt_long: string
    time: Date
    sun_rise: Date
    sun_set: Date
    timezone_name: string
    parent: {
        title: string;
        location_type: string;
        latt_long: string;
        woeid: number;
    }
    consolidated_weather: ConsolidatedWeather[]
}

interface IProps {
    data?: DataInformation
}

export default class LocationInformation extends Component<IProps> {
    static async getInitialProps({ query }: NextContext) {
        const { woeid } = query;
        const raw = await fetch(`https://www.metaweather.com/api/location/${woeid}`);
        const data = await raw.json();
        return { data }
    }

    render() {
        const { data } = this.props

        if (data) {
            const { title, location_type, latt_long, sun_rise, sun_set, timezone_name } = data;
            const [lat, long] = latt_long.split(',')
            return (
                <Grid fluid>
                    <Link href="/"><a>&lt;</a></Link>
                    <h3 style={{ textAlign: 'center' }}>{title}</h3>
                    <Row>
                        <Col xs={12} md={6}><InformationCard title="Location Type" value={location_type} /></Col>
                        <Col xs={12} md={6}><InformationCard title="Timezone" value={timezone_name} /></Col>

                    </Row>
                    <Row>
                        <Col xs={12} md={6}><InformationCard title="Lattitude" value={lat} /></Col>
                        <Col xs={12} md={6}><InformationCard title="Longitude" value={long} /></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}><InformationCard title="Sunrise" value={new Date(sun_rise).toLocaleTimeString()} /></Col>
                        <Col xs={12} md={6}><InformationCard title="Sunset" value={new Date(sun_set).toLocaleTimeString()} /></Col>
                    </Row>
                </Grid>
            )
        }
        
        return <div>No data found.</div>
    }
}
