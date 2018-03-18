import React from 'react';

class Project extends React.Component {
    render() {
        let input;
        const project = this.props.project;
        const listItems = project.map((item, i) =>
            <li key={i}>{item.name}</li>
        );
        return (
            <div>
                <input ref={node => {
                input = node
                }}/>
                <input type={'button'} value={'add'} onClick={ e => this.props.add(input.value) }/>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default Project;