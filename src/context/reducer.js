export let data = {
    authUser: null,

}

export function reducer(state, action) {
    switch (action.type) {
        case "AUTH_USER": {
            return {
                ...state,
                authUser: action.payload
            }
        }

       

        // case "REGISTER_USER": {
        //     let usersClone = state.users.slice(0);
        //     usersClone.push(action.payload);
        //     return {
        //         ...state,
        //         users: usersClone
        //     }
        // }
        default:
            return state;

    }
}