import fetch from 'isomorphic-unfetch';

const baseUrl = 'https://www.metaweather.com/api'

export const apiCall = async (endpoint: string): Promise<any> => {
    const raw = await fetch(`${baseUrl}/${endpoint}`);
    return raw.json();
}
