const initialState = {
    project: [
        {name: 'test1'},
        {name: 'test3'},
        {name: 'test3'},
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            return {
                project: state.project.concat({name: action.value})
            }
        default:
            return state;
    }
}