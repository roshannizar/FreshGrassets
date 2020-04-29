import { SET_CURRENT_USER, INVALID_USER } from '../../shared/constants/constants';
import isEmpty from '../../utility/empty';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                uesr: action.payload
            };
        case INVALID_USER:
            return {
                ...state,
                isAuthenticated: false,
                user: action.payload
            };
        default:
            return state;
    }
}