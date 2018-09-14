import axios from 'axios';
import { url_list } from "../../system/constants/urls";

const state = {
    token: localStorage.getItem('user-token') || '',
    status: ''
};

const mutations = {
    //[AUTH_REQUEST]: (state) => {
    //    state.status = 'loading';
    //},
    //[AUTH_SUCCESS]: (state, token) => {
    //    state.status = 'success';
    //    state.token = token;
    //},
    //[AUTH_ERROR]: (state) => {
    //    state.status = 'error';
    //}
};

const actions = {
    auth({ commit }, { email, password, repassword }) {
        console.log('email, password = ', email, password);

        debugger;
        console.log(url_list);

        //axios.post('/api/Account/auth',
        //    {
        //        email,
        //        password
        //    }).then((res) => {
        //    console.log(res);
        //}).catch((err) => {
        //    console('error /api/auth', err);
        //});
    }

    //[AUTH_REQUEST]: ({ commit, dispatch }, user) => {
    //    return new Promise((resolve, reject) => { // The Promise used for router redirect in login
    //        commit(AUTH_REQUEST);
    //        axios({ url: '/api/Account/auth', data: user, method: 'POST' })
    //            .then(resp => {
    //                const token = resp.data.token;
    //                localStorage.setItem('user-token', token); // store the token in localstorage
    //                commit(AUTH_SUCCESS, token);
    //                // you have your token, now log in your user :)
    //                dispatch(USER_REQUEST);
    //                resolve(resp);
    //            })
    //            .catch(err => {
    //                commit(AUTH_ERROR, err);
    //                localStorage
    //                    .removeItem('user-token') // if the request fails, remove any possible user token if possible
    //                reject(err);
    //            });
    //    });
    //}
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