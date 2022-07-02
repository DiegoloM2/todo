import React from "react";
import StepForm from "./step_form";
import StepListItemContainer from "./step_list_item_container";

class StepList extends React.Component {
    constructor (props) {
        super(props);
    }

    componentWillMount(){
        this.props.fetchSteps(this.props.todo_id);
    }

    render () {
        return (
        <div className = "">
            <ol>
                {this.props.steps.map(
                    (step, idx) => (
                    <StepListItemContainer key = {idx} step = {step} />)
                )}
            </ol>

            <StepForm createStep = {this.props.createStep} todo_id = {this.props.todo_id} />
        </div>)
    }
}

export default StepList;