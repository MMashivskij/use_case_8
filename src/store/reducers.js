import { ADD_USER_DATA } from './actions';

export const initialState = {
    userData: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER_DATA:
            return {
                ...state,
                userData: [...state.userData, action.payload]
            };
        default:
            return state;
    }
}

export default rootReducer;
