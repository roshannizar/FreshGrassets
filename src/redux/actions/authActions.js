import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { INVALID_USER, SET_CURRENT_USER } from '../../shared/constants/constants';
import keys from '../../utility/keys/keys';

export const loginUser = (data) => dispatch => {

    const headers = {
        'Content-Type': 'application/json'
    }

    axios
        .post(`${keys.url}/v1/signin`, data, headers)
        .then(res => {
            AsyncStorage.clear();
            AsyncStorage.setItem('user', res.data);
            dispatch(setCurrentUser(res.data))
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: INVALID_USER,
                payload: '400 Not Found'
            })
        });
}

export const logoutUser = () => dispatch => {
    AsyncStorage.removeItem('user');
    dispatch(setCurrentUser({}));
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};