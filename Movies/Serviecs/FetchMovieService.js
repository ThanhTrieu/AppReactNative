'use strict';
import {Platform} from 'react-native';

const getMoviesFromApi = async() => {
    const url = (Platform.OS === 'ios') ?
        'http://localhost:3000/movies' :
        'http://10.0.3.2:3000/movies';

    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    let responseJson = await response.json()
    return responseJson;
}
export const Api = {
    getMoviesFromApi
};
