import Link from 'next/link';
import React, { Fragment } from 'react';
import { Box, Flex } from '@rebass/grid';
import styled from 'styled-components';
import { TableComponentProps } from '../interfaces';

// Ignore typescript looking for definition
// @ts-ignore
import { Hide } from '@rebass/hide';


const ResultTable = styled.div`
    position: relative;
    padding-top: 20px;
`

export default (props: TableComponentProps) => {
    const { data } = props;
    return (
        <ResultTable>
            <Flex>
                <Box width={[1 / 3, 1 / 3, 1 / 5]}>TITLE</Box>
                <Box width={[1 / 3, 1 / 3, 1 / 5]}>LATITUDE</Box>
                <Box width={[1 / 3, 1 / 3, 1 / 5]}>LONGITUDE</Box>
                <Box width={[0, 0, 1 / 5]}><Hide xsmall small>LOCATION TYPE</Hide></Box>
                <Box width={[0, 0, 1 / 5]}><Hide xsmall small>WOEID</Hide></Box>
            </Flex>
            <hr />
            {
                data.map(({ title, latt_long, woeid, location_type }, key) => {
                    const [lat, long] = latt_long.split(',')
                    return (
                        <Fragment key={`${woeid}-${key}`}>
                            <Flex>
                                <Box width={[1 / 3, 1 / 3, 1 / 5]}>
                                    <Link href={{ pathname: '/location', query: { woeid } }}>
                                        <a>{title}</a>
                                    </Link>
                                </Box>
                                <Box width={[1 / 3, 1 / 3, 1 / 5]}>{lat}</Box>
                                <Box width={[1 / 3, 1 / 3, 1 / 5]}>{long}</Box>
                                <Box width={[0, 0, 1 / 5]}><Hide xsmall small>{location_type}</Hide></Box>
                                <Box width={[0, 0, 1 / 5]}><Hide xsmall small>{woeid}</Hide></Box>
                            </Flex>
                            <hr />
                        </Fragment>
                    )
                })
            }
        </ResultTable>
    )
}
