import {ADD_VALUE, SHOW_ADDRESS, RESET_FORM_VALUES} from './types';
import {hasAllInputsPresent, minimumListOfProperties, maximumListOfProperties, initialStateFromLocalStorage, setLocalStorage, changePropsInLocalStorage} from './../../../utils';
import {validationCriteria} from './../../../utils/validation';

const signUpReducer = (state = initialStateFromLocalStorage, action) => {
  let formIsValid;
  switch (action.type) {
    case ADD_VALUE:
      state.inputs[action.payload.name] = action.payload.value;
      const errors = validationCriteria(state.inputs);
      formIsValid = hasAllInputsPresent(state.showAddress ? maximumListOfProperties : minimumListOfProperties, state.inputs) && Object.keys(errors).length === 0;
      setLocalStorage({inputs: state.inputs, showAddress: state.showAddress, formIsValid, errors});
      return {
        ...state,
        formIsValid,
        errors,
      };
    case SHOW_ADDRESS:
      formIsValid = hasAllInputsPresent(action.payload ? maximumListOfProperties : minimumListOfProperties, state.inputs) && Object.keys(validationCriteria(state.inputs)).length === 0;
      changePropsInLocalStorage({showAddress: action.payload, formIsValid});
      return {
        ...state,
        showAddress: action.payload,
        formIsValid
      };
    case RESET_FORM_VALUES:
      localStorage.removeItem('formData');
      return {
        ...state,
        inputs: {},
        showAddress: false,
        formIsValid: false
      };
    default:
      return state
  }
};
export {signUpReducer};
