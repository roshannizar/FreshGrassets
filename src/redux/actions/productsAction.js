import axios from 'axios';
import { PROGRAM_LOADING, GET_PRODUCTS } from '../../shared/constants/constants';
import keys from '../../utility/keys/keys';

export const getProducts = () => dispatch => {
    dispatch(setProgramLoading());

    axios.get(`${keys.url}/v1/products`).then(res => {
        console.log(res);
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        });
    }).catch(err => {
        console.log(err);
        dispatch({
            type: GET_PRODUCTS,
            payload: err
        })
    })
}

export const setProgramLoading = () => {
    return {
        type: PROGRAM_LOADING
    };
};