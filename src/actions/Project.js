export  const ADD_PROJECT = 'ADD_PROJECT';

const Actions = {
    addProject(value) {
        return {
            type: ADD_PROJECT,
            value,
        }
    }
}

export default Actions;