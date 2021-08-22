import { createSelector } from 'reselect'


const getProfile = state => state.auth;

export const getAccessToken = createSelector(
    [getProfile],
    profile => (profile && profile.token ? profile.token : null),
);



export const isUserLoggedIn = createSelector(
    [getProfile],
    profile => profile && profile.token
);

