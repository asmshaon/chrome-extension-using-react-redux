export const selectUser = (user) => {
    console.log('You selected user : ' + user.name);

    return {
        type: "USER_SELECTED",
        payload: user
    };
};