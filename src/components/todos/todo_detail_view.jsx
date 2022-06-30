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
                <h4 className='mt-2'>{this.todo.body}</h4>
                <hr />
                <StepListContainer todo_id = {this.todo.id}/>

                {/* <button onClick = {this.removeTodo}>del</button>  */}
                
            </div>
        )
    }


}
export default TodoDetailView;