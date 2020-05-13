import {
    AUTH_LOGIN, AUTH_CHECK, AUTH_LOGOUT, SET_LOCALE, UPDATE_CONNECTION_STATUS
} from './action-types'


/**
 * Module internal initial state
 */
const initialState = {
    isAuthenticated: false,
};  


/**
 * Check dispatched action and update state accordingly
 * @param {Object} state 
 * @param {Object} action 
 * @returns {Function} 
 */

const reducer = (state = initialState, {type, payload = null}) => {
    switch (type) {
        default:
            return state;
    }
} 

export default reducer