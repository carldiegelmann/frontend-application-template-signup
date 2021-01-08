import React, {useReducer} from "react";
import {ADD_VALUE, RESET_FORM_VALUES} from './redux/signUp/reducer/types';
import {validationCriteria} from './utils/validation';
import {initialStateFromLocalStorage} from './utils/index';
import {FormGroup} from './components/styles';
import Form from './components/FormContainer';

import {signUpReducer} from './redux/signUp/reducer/signUp.reducer';

export const App = ({showAddress}) => {
  const [state, dispatch] = useReducer(signUpReducer, initialStateFromLocalStorage);

  const handleChange = (event) => {
    event.persist();
    dispatch({type: ADD_VALUE, payload: {name: event.target.name, value: event.target.value}});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    var object = {};
    formData.forEach((value, key) => object[key] = value);

    var err = validationCriteria(object)
    if (Object.keys(err).length === 0) {
      // TODO: send data to API
      dispatch({type: RESET_FORM_VALUES});
      alert("Form was submitted.");
    } else {
      alert("Form has errors.");
    }
  }

  return (
    <FormGroup>
      <Form
        handleChange={handleChange}
        handleBlur={null}
        handleSubmit={handleSubmit}
        errors={state.errors}
        values={state.inputs}
        formIsValid={state.formIsValid}
        showAddress={showAddress ?? state.showAddress}
        dispatch={dispatch}
      />
    </FormGroup>);
}

export default App;
