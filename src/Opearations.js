import {ACTIONS} from './Actions.js';

// Exporting The OperationButton Function

export default function OperationButton({dispatch, operator}){
    return (
        <button onClick={ () => dispatch({type:ACTIONS.CHOOSE_OPERATION, payload : {operator}})}>
        {operator}
        </button>
    )
}