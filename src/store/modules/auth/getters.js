export default {
    token(state) {
        return state.token;
    },
    is_authenticated(state) {
        return !!state.token;
    }
}