import React from 'react';

class TodoDetailView extends React.Component {
    constructor (props) {
        super(props);
        this.todo = this.props.todo;
        this.removeTodo = this.removeTodo.bind(this);
        console.log(this.props);
    }

    removeTodo () {
        this.props.removeTodo(this.props.todo);
    }


    render () {

        return (
            <div>
                <p>{this.todo.body}</p>

                <button onClick = {this.removeTodo}>del</button> 
                
            </div>
        )
    }


}
export default TodoDetailView;