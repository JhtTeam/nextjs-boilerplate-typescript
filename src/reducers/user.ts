import * as ActionTypes from 'actions/actionTypes';
import { getActionSuccess, getActionFailed } from 'actions';
const userInitialState = {
    loading: false,
    error: null,
    data: null, 
};

function user(state = userInitialState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}

export default user;
