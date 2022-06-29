import React from 'react'; 

class TodoItem extends React.Component {
    constructor (props) {
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
        this.receiveTodo = this.receiveTodo.bind(this);

    }

    receiveTodo (e) {
        e.preventDefault();
        let buffer = { ...this.props.todo };
        buffer.done = !this.props.todo.done
        this.props.receiveTodo(buffer);
    }

    removeTodo () {
        this.props.removeTodo(this.props.todo);
    }

    render () {
        return (
            <li>
                <p className = "todo-title">{this.props.todo.title}</p> 
                <button onClick = {this.removeTodo}>del</button> 
                <button onClick = { this.receiveTodo }>{this.props.todo.done ? "undo": "done" }</button>
            </li>
        )
    }
}

export default TodoItem;