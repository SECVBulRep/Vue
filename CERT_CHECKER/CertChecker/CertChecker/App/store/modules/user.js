import { AUTH_URL, GET_USER_URL } from "../../system/constants/urls";
import { SUCCESS, ERROR_AUTH_INCORRECT_LOGIN_PASSWORD,handleError } from "../../system/constants/errors";
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from "../actions/auth";
import { USER_REQUEST } from '../actions/user';
import http from "../../system/helpers/httpHelper";


const state = {
    token: localStorage.getItem('user-token') || '',
    status: ''
};

const mutations = {
    [AUTH_REQUEST]: (state) => {
        state.status = 'loading';
    },
    [AUTH_SUCCESS]: (state, token) => {
        state.status = 'success';
        state.token = token;
    },
    [AUTH_ERROR]: (state) => {
        state.status = 'error';
    }
};

const actions = {

    [AUTH_REQUEST]: ({ commit, dispatch }, payLoad) => {
        return new Promise((resolve, reject) => {
            commit(AUTH_REQUEST);

            http.post(AUTH_URL, payLoad)
                .then(function(response) {
                    debugger;
                    let data = response.data;
                    if (data.code == ERROR_AUTH_INCORRECT_LOGIN_PASSWORD) {
                        reject(data);
                    }
                });

        });
    }
};

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
};

export default {
    state,
    mutations,
    actions,
    getters
};