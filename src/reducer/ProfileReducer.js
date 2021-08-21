const ProfileReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMET':
            return state + 1
        default:
            return state + 1
    }
}

export default ProfileReducer