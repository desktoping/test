import React, { useState } from 'react'
import { apiCall } from '../helpers';

import SearchInput from '../components/search'
import ResultTable from '../components/table'
import { ResultData } from '../interfaces';
import { Flex, Box } from '@rebass/grid';

export default () => {
    const [input, setInput] = useState('');
    const [resultSet, setResultSet] = useState<ResultData[]>([]);
    const [isLoading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        const apiResult: ResultData[] = await apiCall(`location/search/?query=${input}`)
        setLoading(false);
        setResultSet(apiResult);
    }

    const renderComponent = () => {
        if (isLoading) {
            return 'Loading...'
        }

        if (resultSet.length) {
            return <ResultTable data={resultSet} />
        }

        return null
    }

    return (
        <>
            <Flex alignItems="center">
                <Box>
                    <SearchInput
                        id="search"
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Search Location"
                    />
                    <button onClick={handleSearch}>Search</button>
                </Box>
            </Flex>
            {renderComponent()}
        </>
    )
}
