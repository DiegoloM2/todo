import React from "react";
import createUniqueId  from "../../util/unique_id";
import onChangeTextInput from "../../util/onChangeTextInput";

class StepForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
                id: createUniqueId(),
                body: '', 
                todo_id: this.props.todo_id,
        }

        this.onChangeTextInput = onChangeTextInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm (e) {
        e.preventDefault();
        this.props.receiveStep(this.state);
    } 


    render () {
        return (
            <form onSubmit = {this.submitForm}>
                <label htmlFor = "body" >Step: </label>
                <input type="text" name = "body" placeholder = "enter step name" value = {this.state.body} onChange = {this.onChangeTextInput('body')} />
                <button type = "submit">Create</button>
            </form>
        )
    }
}

export default StepForm;