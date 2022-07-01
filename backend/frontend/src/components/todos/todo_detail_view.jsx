import React from 'react';
import StepListContainer from '../steps/step_list_container';

class TodoDetailView extends React.Component {
    constructor (props) {
        super(props);
        this.todo = this.props.todo;
    }


    render () {

        return (
            <div>
                <h4 className='mt-2'>{this.todo.body}</h4>
                <hr />
                <StepListContainer todo_id = {this.todo.id}/>

                
            </div>
        )
    }


}
export default TodoDetailView;