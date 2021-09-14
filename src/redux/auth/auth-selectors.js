export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;

export const checkIfAuthPending = state => state.auth.isLoading;

export const getAuthError = state => state.auth.error;
