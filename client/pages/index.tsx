import React, { Component, ChangeEvent } from 'react'
import fetch from 'isomorphic-unfetch';

import SearchInput from '../components/search'
import ResultTable from '../components/table'
import { ResultData } from '../components/table';

// @ts-ignore
import 'react-flexbox-grid/dist/react-flexbox-grid.css'
// @ts-ignore
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';

interface IState {
    input: string
    data: ResultData[]
}

export default class ListComponent extends Component<{}, IState> {
    state = { input: '', data: [] }

    handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.persist()
        this.setState(state => ({ ...state, input: e.target.value }))
    }

    handleSearch = async () => {
        const { input } = this.state;
        const raw = await fetch(`https://www.metaweather.com/api/location/search/?query=${input}`);
        const data = await raw.json();
        this.setState(state => ({ ...state, data }))
    }

    render() {
        const { input, data } = this.state
        return (
            <Grid fluid>
                <Row center="xs">
                    <Col>
                        <SearchInput
                            id="search"
                            type="text"
                            value={input}
                            onChange={this.handleSearchChange}
                            placeholder="Search Location"
                        />
                        <button onClick={this.handleSearch}>Search</button>
                    </Col>
                </Row>
                {!!data.length && <ResultTable data={data} />}
            </Grid>
        )
    }
}
