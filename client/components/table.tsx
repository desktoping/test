import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'

// @ts-ignore
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'

export interface ResultData {
    title: string
    latt_long: string
    location_type: string
    woeid: number
}

interface IProps {
    data: ResultData[]
}

const ResultTable = styled.div`
    position: relative;
    padding-top: 20px;
`

export default (props: IProps) => {
    const { data } = props;
    return (
        <ResultTable>
            <Row>
                <Col xs={12} md={3}>TITLE</Col>
                <Col xs={12} md={2}>LATITUDE</Col>
                <Col xs={12} md={2}>LONGITUDE</Col>
                <Col xs={12} md={2}>LOCATION TYPE</Col>
                <Col xs={12} md={3}>WOEID</Col>
            </Row>
            <hr />
            {
                data.map(({ title, latt_long, woeid, location_type }, key) => {
                    const [lat, long] = latt_long.split(',')
                    return (
                        <>
                            <Row key={key}>
                                <Col xs={12} md={3}>
                                    <Link href={{ pathname: '/location', query: { woeid }}}>
                                        <a>{title}</a>
                                    </Link>
                                </Col>
                                <Col xs={12} md={2}>{lat}</Col>
                                <Col xs={12} md={2}>{long}</Col>
                                <Col xs={12} md={2}>{location_type}</Col>
                                <Col xs={12} md={3}>{woeid}</Col>
                            </Row>
                            <hr />
                        </>
                    )
                })
            }
        </ResultTable>
    )
}
