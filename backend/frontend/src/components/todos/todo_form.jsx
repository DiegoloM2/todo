import React from "react";
import createUniqueId from "../../util/unique_id";
import onChangeTextInput from "../../util/onChangeTextInput"; 


class TodoForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            id: createUniqueId(), 
            title: "", 
            body: "", 
            done: false
        };
        this.onChangeDone = this.onChangeDone.bind(this);
        this.onChangeTextInput = onChangeTextInput.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onSubmitForm (e) {
        e.preventDefault();
        this.props.createTodo(this.state);
        this.props.toggleForm();
        this.setState({
            id: createUniqueId(), 
            title: "", 
            body: "", 
            done: false
        });
        
    }

    onChangeDone (e) {
        e.preventDefault();
        let done = e.target.checked;
        this.setState({
            done: done,
        })
        
    }

    render () {
        let CheckBox = () => {
            if (this.state.done) return <input type = "checkbox" name = "done" value = "done" onChange = { this.onChangeDone } checked />
            return  <input type = "checkbox" name = "done" value = "done" onChange = { this.onChangeDone } />
        }
        return (
            <div className = "todo-form-container">
                <h3 className = "ms-3 mt-3 mb-0 me-0">Create a Todo Item</h3>
                <form method = "POST" onSubmit = {this.onSubmitForm} className = "container p-3">
                    <div className = "mb-2">
                        <label htmlFor = "title" className = "fw-bold  fs-4">Title</label>
                        <input type = "text" className = "form-control" placeholder="title" name = "title" value = {this.state.title} onChange = {this.onChangeTextInput('title')} required/>
                    </div>

                    <div className = "mb-2">
                        <label htmlFor = "body" className = "fw-bold fs-4">Body</label>
                        <input type = "text" placeholder = "body" className = "form-control" name = "body" value = { this.state.body } onChange = {this.onChangeTextInput("body")} required/>
                    </div>
                    <div className = "form-check p-0 mb-3">
                        <label htmlFor="done" className = "form-check-label me-2 fw-bold fs-4">Done?</label>
                        <CheckBox className = "form-check-input fs-4" /> 
                    </div>

                    <button type = "submit" className = "btn btn-primary float-end mb-3">Create</button>

                </form>
            </div>
        )
    }


}

export default TodoForm;