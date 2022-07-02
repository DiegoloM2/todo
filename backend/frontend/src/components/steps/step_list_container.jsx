import StepList from "./step_list.jsx";
import { createStep, removeStep, fetchSteps } from '../../actions/step_actions.jsx';
import { stepsByTodoId } from "../../reducers/selectors.jsx";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    fetchSteps: (todoId) => dispatch(fetchSteps(todoId)),
    createStep: (step) =>  dispatch(createStep(step)), 
    removeStep: (step) => dispatch(removeStep(step))
})

const mapStateToProps = (state, ownProps) => {
    return ({
        steps: stepsByTodoId(state, ownProps.todo_id)
    })
}

const StepListContainer = connect(mapStateToProps, mapDispatchToProps)(StepList);
export default StepListContainer;