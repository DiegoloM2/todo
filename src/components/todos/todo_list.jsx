import React from "react";
import TodoItem from "./todo_item.jsx";
import TodoForm from "./todo_form";

class TodoList extends React.Component {
    constructor (props) {
        super(props);
        this.showForm = this.showForm.bind(this);
    }
    

    showForm (e) {
        this.props.toggleForm();
    }

    render () {
        return (
        <div>
            {this.props.form ? <TodoForm receiveTodo = {this.props.receiveTodo} toggleForm = {this.props.toggleForm} submit = {this.submit}/>: ''}

            <ul className = {this.props.form ? "blurred list-group": "list-group"}>
                <h2 className = "m-2">Todo List
                    <a className = "text-end fw-bold fs-2 float-end me-3" role = "button" 
                    onClick = {(e) => {this.showForm(e)}}>{this.props.form ? "x": "+"}</a>
                </h2>
                
                {this.props.todos.map(
                    (todo, idx) => {
                        return (
                            <TodoItem key = {idx} todo = {todo} removeTodo = {this.props.removeTodo } receiveTodo = {this.props.receiveTodo}/>
                        )
                    }
                )}
            </ul>
        </div>
        )
    }
}
export default TodoList;