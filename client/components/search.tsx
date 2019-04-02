import React from 'react'
import styled from 'styled-components';

const SearchInput = styled.input`
    position: relative;
    height: 40px;
    width: 200px;
    size: 18px;
`

interface IProps {
    onChange: (e: any) => void;
    id: string;
    type: string;
    placeholder: string;
    value: string;
}

export default (props: IProps) => <SearchInput {...props} />
