export interface APIConsolidatedWeather {
    id: number;
    applicable_date: Date
    weather_state_name: string
    weather_state_abbr: string
    wind_speed: number;
    wind_direction: number;
    wind_direction_compass: string
    air_pressure: number;
    humidity: number;
    visibility: number
    predictability: number
    title: string
    url: string
    min_temp: number
    max_temp: number
    the_temp: number
}

export interface APIDataInformation {
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
    consolidated_weather: APIConsolidatedWeather[]
}
