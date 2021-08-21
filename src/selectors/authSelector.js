import { createSelector } from 'reselct';


const getProfile = state => state.auth;

export const getAccessToken = createSelector(
    [getProfile],
    profile => (profile && profile.token ? profile.token : null),
);



export const isUserLoggedIn = createSelector(
    [getProfile],
    profile => profile && profile.token
);

