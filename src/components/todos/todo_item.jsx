import React from 'react'; 
import ConnectedTodoDetailView from "./todo_detail_container";

class TodoItem extends React.Component {
    constructor (props) {
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
        this.receiveTodo = this.receiveTodo.bind(this);
        this.state = {
            detail: false, 
        }
        this.show = this.show.bind(this);
    }

    receiveTodo (e) {
        e.preventDefault();
        let buffer = { ...this.props.todo };
        buffer.done = !this.props.todo.done
        this.props.receiveTodo(buffer);
    }

    show (e) {
        e.preventDefault();
        this.setState({
            detail: !this.state.detail,
        })
    }

    removeTodo () {
        this.props.removeTodo(this.props.todo);
    }

    render () {
        const RenderTodoDetail = ({ detail }) => (detail ? <ConnectedTodoDetailView todo = {this.props.todo} />: '')
        return (
            <li>
                <p className = "todo-title" onClick = {this.show}>{this.props.todo.title}</p> 
                <button onClick = { this.receiveTodo }>{this.props.todo.done ? "undo": "done" }</button>
                <RenderTodoDetail detail = {this.state.detail} />
            </li>
        )
    }
}

export default TodoItem;