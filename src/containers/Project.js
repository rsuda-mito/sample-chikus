import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/Project';

import Project from '../components/Project';

const mapStateToProps = (state) => ({
    project: state.project,
});

const mapDispatchToProps = (dispatch) => {
    return {
        add(value) {
            dispatch(Actions.addProject(value));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Project);