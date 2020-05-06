import { PROGRAM_LOADING, GET_PRODUCTS } from '../../shared/constants/constants';

const initialState = {
    products: null,
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PROGRAM_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        default:
            return state;
    }
}