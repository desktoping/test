import React from 'react'
import styled from 'styled-components';

interface IProps {
    title: string
    value: string
}

const InformationCard = styled.div`
    position: relative;
    size: 18px;
`
export default ({ title, value }: IProps) => (
    <InformationCard>
        <h4>{title}</h4>
        <p>{value}</p>
    </InformationCard>
)
