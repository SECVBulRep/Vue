import axios from 'axios';
import { AUTH_URL } from "../../system/constants/urls";
import { ERROR_AUTH_INCORRECT_LOGIN_PASSWORD, ERROR_SERVER } from "../../system/constants/errors";
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from "../actions/auth";
import { USER_REQUEST } from '../actions/user';


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
            axios({ url: AUTH_URL, data: payLoad, method: 'POST' })
                .then(resp => {
                    let result = resp.data;

                    //если как нибудь ошибка 
                    if ([ERROR_AUTH_INCORRECT_LOGIN_PASSWORD, ERROR_SERVER].indexOf(result.code) >= 0) {
                        alert('error');
                    }


                    //const token = resp.data.token;
                    //localStorage.setItem('user-token', token); // store the token in localstorage
                    //commit(AUTH_SUCCESS, token);
                    //// you have your token, now log in your user :)
                    //dispatch(USER_REQUEST);
                    //resolve(resp);
                })
                .catch(err => {
                    //commit(AUTH_ERROR, err);
                    //localStorage
                    //    .removeItem('user-token') // if the request fails, remove any possible user token if possible
                    //reject(err);
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