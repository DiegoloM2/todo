import StepListItem from "./step_list_item";
import {removeStep, receiveStep } from "../../actions/step_actions"
import {connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    removeStep: (step) => dispatch(removeStep(step)),
    receiveStep: (step) => dispatch(receiveStep(step)),
})

const StepListItemContainer = connect(null, mapDispatchToProps)(StepListItem);
export default StepListItemContainer;