import axios from 'axios';

const state = {
    user: null
};

const mutations = {

};

const actions = {
    auth({ commit }, { email, password, repassword }) {
        console.log('email, password = ', email, password);

        axios.post('/api/SampleData/auth',
            {
                email,
                password

            }).then((res) => {
                debugger;

            }).catch((err) => {
                console('error /api/auth', err);
            });
    }
};

const getters = {

};


export default {
    state,
    mutations,
    actions,
    getters
}