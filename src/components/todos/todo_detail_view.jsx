import React from 'react';
import StepListContainer from '../steps/step_list_container';

class TodoDetailView extends React.Component {
    constructor (props) {
        super(props);
        this.todo = this.props.todo;
        this.removeTodo = this.removeTodo.bind(this);
    }

    removeTodo () {
        this.props.removeTodo(this.props.todo);
    }


    render () {

        return (
            <div>
                <p>{this.todo.body}</p>

                <StepListContainer todo_id = {this.todo.id}/>

                <button onClick = {this.removeTodo}>del</button> 
                
            </div>
        )
    }


}
export default TodoDetailView;