const listReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_ITEM":
            return [...state.slice(0, action.id - 1),
                {
                    ...state[action.id - 1],
                    completed: !state.completed,
                },
                ...state.slice(action.id)
            ];
        default:
            return state;
    }
}

export default listReducer;