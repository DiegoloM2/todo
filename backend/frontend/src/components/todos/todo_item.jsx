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
        var doneClass = "fa-solid fa-square-check";
        if (this.props.todo.done) doneClass += " done";
        return (
            <li className ="list-group-item d-flex justify-content-between align-items-start">
                <div className = "ms-2 me-auto"> 
                    <a className = "fw-bold fs-3" role = "button" onClick = { this.show }>{this.props.todo.title} </a>
                    <RenderTodoDetail detail = {this.state.detail}/>
                </div>

                <div>
                    <a role = "button" onClick = { this.receiveTodo } className = "m-2"><i className={doneClass}></i></a>
                    <a role = "button"onClick = {this.removeTodo} className = "m-2"><i className="fa fa-trash-o"></i></a>
                </div>
            </li>
        )
    }
}

export default TodoItem;