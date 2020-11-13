import React, { Component} from 'react';

class TodoItem  extends Component{
    render() {
        return (
            <div className="TodoItem">
                <h1>{ this.props.title}</h1>
            </div>
        );
    }
}

export default TodoItem;