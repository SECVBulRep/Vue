import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from '../actions/user';
import { AUTH_URL, GET_USER_URL } from "../../system/constants/urls";
import Vue from 'vue';
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from "../actions/auth";
import http from "../../system/helpers/httpHelper";

const state = { status: '', profile: {} }

const getters = {
    getProfile: state => state.profile,
    isProfileLoaded: state => !!state.profile.name
};

const actions = {
    [USER_REQUEST]: ({ commit, dispatch }) => {
        debugger;

        commit(USER_REQUEST);

        http.get(GET_USER_URL)
            .then(function (resp) {
                debugger;
                commit(USER_SUCCESS, resp.data);
            })
            .catch(resp => {
                commit(USER_ERROR);
                dispatch(AUTH_LOGOUT);
            });
    }
};

const mutations = {
    [USER_REQUEST]: (state) => {
        state.status = 'loading';
    },
    [USER_SUCCESS]: (state, resp) => {
        state.status = 'success';
        Vue.set(state, 'profile', resp);
    },
    [USER_ERROR]: (state) => {
        state.status = 'error';
    },
    [AUTH_LOGOUT]: (state) => {
        state.profile = {};
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};