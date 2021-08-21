import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProfileReducer from "./ProfileReducer"

const appReducer = combineReducers({
    auth: AuthReducer,
    profile: ProfileReducer
})

export default appReducer