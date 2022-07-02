import React from "react";
import createUniqueId  from "../../util/unique_id";
import onChangeTextInput from "../../util/onChangeTextInput";

class StepForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
                id: createUniqueId(),
                body: '', 
                todo: this.props.todo_id,
        }

        this.onChangeTextInput = onChangeTextInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm (e) {
        e.preventDefault();
        this.props.createStep(this.state);
    } 


    render () {
        return (
            <form onSubmit = {this.submitForm} className = "row mt-4 mb-1">
                <h6>Create a step</h6>
                <div className = "col-8">
                    <input type="text" name = "body" className ="form-control" placeholder = "enter step name" value = {this.state.body} onChange = {this.onChangeTextInput('body')} />
                </div>
                <button type = "submit" className = "btn btn-success col-3">Create</button>
            </form>
        )
    }
}

export default StepForm;