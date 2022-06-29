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
        this.props.receiveTodo(this.state);
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
        let CheckBox = () => (this.state.done ? <input type = "checkbox" name = "done" value = "done" onChange = { this.onChangeDone } checked />: <input type = "checkbox" name = "done" value = "done" onChange = { this.onChangeDone } />);
        return (
            <form method = "POST" onSubmit = {this.onSubmitForm}>
                <input type = "text" placeholder="title" name = "title" value = {this.state.title} onChange = {this.onChangeTextInput('title')} required/>
                <input type = "text" placeholder = "body" name = "body" value = { this.state.body } onChange = {this.onChangeTextInput("body")} required/>
                <CheckBox /> 

                <button type = "submit">Create</button>

            </form>
        )
    }


}

export default TodoForm;