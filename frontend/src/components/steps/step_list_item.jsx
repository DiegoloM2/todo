import React from "react";

class StepListItem extends React.Component {
    constructor (props) {
        super(props);
        this.removeStep = this.removeStep.bind(this);
    }

    removeStep () {
        this.props.removeStep(this.props.step);
    }

    render () {
        return (
        <li className = "p-1">
            <p className = "d-inline">{this.props.step.body}</p>
            <a role = "button" onClick = {this.removeStep} className = "float-end me-5"><i className="fa fa-trash-o"></i></a>
        </li>)
    }
}

export default StepListItem;