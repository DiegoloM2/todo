import React from "react";
import TodoItem from "./todo_item.jsx";
import TodoForm from "./todo_form";

class TodoList extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        return (
        <div>
            <TodoForm receiveTodo = {this.props.receiveTodo} />

            <ul>
                
                {this.props.todos.map(
                    (todo, idx) => {
                        return (
                            <TodoItem key = {idx} todo = {todo}/>
                        )
                    }
                )}
            </ul>
        </div>
        )
    }
}
export default TodoList;