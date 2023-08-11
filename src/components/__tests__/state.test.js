import rootReducer, { initialState } from '../../store/reducers';
import { addUserData, ADD_USER_DATA } from '../../store/actions';

describe('rootReducer', () => {
    
    it('returns the initial state when no action is passed', () => {
        const state = rootReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    it('handles ADD_USER_DATA action correctly', () => {
        const userData = { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', message: 'Hello' };
        const state = rootReducer(initialState, addUserData(userData));

        expect(state.userData).toEqual([userData]);
    });
});

describe('actions', () => {
    
    it('addUserData returns the expected action', () => {
        const userData = { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', message: 'Hello' };
        const action = addUserData(userData);

        expect(action).toEqual({
            type: ADD_USER_DATA,
            payload: userData
        });
    });
});

// If you wish to test the store initialization as well:
// import store from './store';
// describe('store', () => {
    
//     it('initializes with the correct rootReducer', () => {
//         expect(store.getState()).toEqual(initialState);
//     });
// });
