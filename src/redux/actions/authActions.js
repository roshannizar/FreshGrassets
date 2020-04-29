import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { INVALID_USER, SET_CURRENT_USER } from '../../shared/constants/constants';
import keys from '../../utility/keys/keys';

export const loginUser = (userData) => dispatch => {
    const headers = {
        'Content-Type':'application/x-www-form-urlencoded'
    };

    axios
    .post(`${keys.auth}/v1/signin`,headers)
    .then(res => {
        console.log(res);
    })
    .catch(err => dispatch({
        type: INVALID_USER,
        payload:'400 Not Found'
    }));
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};