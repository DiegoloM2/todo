import StepListItem from "./step_list_item";
import {deleteStep, receiveStep } from "../../actions/step_actions"
import {connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    deleteStep: (id) => dispatch(deleteStep(id)),
    receiveStep: (step) => dispatch(receiveStep(step)),
})

const StepListItemContainer = connect(null, mapDispatchToProps)(StepListItem);
export default StepListItemContainer;