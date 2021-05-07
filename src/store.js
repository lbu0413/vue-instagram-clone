import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 20,
            likes: 1,
            pressedLike: false,
            morePosts: {}
        }
    },
    mutations: {
        setMore(state, data) {
            state.morePosts = data
        },
        likesUpdate(state) {
            if(state.pressedLike === false) {
                state.likes++
                state.pressedLike = true
            }
            else {
                state.likes--;
                state.pressedLike = false
            }
        }
    },
    actions: {
        getData(context) {
            axios
            .get(`https://codingapple1.github.io/vue/more0.json`)
            .then((a) => {
                console.log(a.data)
                context.commit('setMore', a.data)
            })
        }
    }
})

export default store;