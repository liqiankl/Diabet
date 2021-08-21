const AuthReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMET':
            return state + 1

        default:
            return state
    }
}

export default AuthReducer