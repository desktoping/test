
export interface ResultData {
    title: string
    latt_long: string
    location_type: string
    woeid: number
}

export interface TableComponentProps {
    data: ResultData[]
}
