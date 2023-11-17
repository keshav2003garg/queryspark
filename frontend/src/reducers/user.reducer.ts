const initialState = {
    user: null,
    loading: false,
    error: null,
};

interface UserAction {
    type: string;
    payload: any;
}

const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default userReducer;
