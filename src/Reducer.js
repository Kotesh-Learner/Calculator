export function reducer(state, {type, payload}){

    // #Intalising Switch Cases
    switch(type) {
      // #Switch Case For ACTIONS.ADD_DIGIT
      case ACTIONS.ADD_DIGIT:
        // # Conditions for OverWrite State
        if(state.overWrite){
          return{
            ...state,
            currentOperand : payload.digit,
            overWrite : false
          }
        }
        if (payload.digit === '0' && state.currentOperand === '0'){
          return state;
        }
        if (payload.digit === '.' && state.currentOperand.includes('.')){
          return state;
        }
          return{
            ...state, 
            currentOperand : `${state.currentOperand ||''}${payload.digit }`,
          }
  
        // #Switch Case For ACTIONS.CHOOSE_OPERATION
      case ACTIONS.CHOOSE_OPERATION:
        // # Conditions for ACTIONS.CHOOSE_OPERATION
        if (state.currentOperand == null && state.firstOperand == null){
          return state;
        }
        if(state.currentOperand == null) {
         return{
          ...state,
          operator: payload.operator
         }
        }
        if(state.firstOperand == null){
          return{
            ...state,
            operator : payload.operator,
            firstOperand : state.currentOperand,
            currentOperand : null,
          }
        }
        return{
          ...state,
          firstOperand : evaluate(state),
          operator : payload.operator,
          currentOperand : null
        }
         // #Switch Case For ACTIONS.ALL_CLEAR
  
      case ACTIONS.ALL_CLEAR:
        return {};
          // #Switch Case For ACTIONS.DELETE_DIGIT
      case ACTIONS.DELETE_DIGIT:
        // # Conditions for ACTIONS.DELETE_DIGIT
        if(state.overWrite){
          return{
            ...state,
            currentOperand : null,
            overWrite : false
          }
        }
        if(state.currentOperand == null) return state;
        if(state.currentOperand.length === 1){
          return {
            ...state,
            currentOperand : null
          }
        }
        return{
          ...state,
          currentOperand : state.currentOperand.slice(0,-1)
        }
      
         // #Switch Case For ACTIONS.EVALUATE
      case ACTIONS.EVALUATE:
        // # Conditions for ACTIONS EVALUATE
          if(state.operator == null || state.firstOperand == null || state.currentOperand == null) {
            return state;
          }
          return {
            ...state,
            overWrite : true,
            firstOperand: null,
            operator : null,
            currentOperand : evaluate(state)
          }
  
      }
    }