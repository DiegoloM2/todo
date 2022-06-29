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
        <div>
            <h4>{this.props.step.title}</h4>
            <p>{this.props.step.body}</p>
            <button onClick = {this.removeStep}>del</button>
        </div>)
    }
}

export default StepListItem;