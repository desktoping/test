import React from 'react'
import styled from 'styled-components';
import { SearchComponentProps } from '../interfaces';

const SearchInput = styled.input`
    position: relative;
    height: 40px;
    width: 200px;
    size: 18px;
`

export default (props: SearchComponentProps) => <SearchInput {...props} />
