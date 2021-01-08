export const minimumListOfProperties = ['lastName', 'firstName', 'email', 'password', 'password_re'];
export const minimumAddressProperties = ['street', 'zip', 'city'];
export const maximumListOfProperties = minimumListOfProperties.concat(minimumAddressProperties);
export const initialStateFromLocalStorage = localStorage.getItem('formData') ? JSON.parse(localStorage.getItem('formData')) : {inputs: {}, showAddress: false, errors: {}, formIsValid: false};

export const hasNumbersInPwd = value => {
  return new RegExp(/(?=(.*\d){2})/).test(value);
}

export const setLocalStorage = (data) => {
  localStorage.setItem('formData', JSON.stringify(data));
}

export const changePropsInLocalStorage = (data) => {
  let dataFromStorage = initialStateFromLocalStorage;
  if (data.showAddress !== undefined) dataFromStorage.showAddress = data.showAddress;
  if (data.formIsValid !== undefined) dataFromStorage.formIsValid = data.formIsValid;
  localStorage.setItem('formData', JSON.stringify(dataFromStorage));
}

export const hasAllInputsPresent = (minimumList, inputs) => {
  const notEmptyFieldsArray = Object.entries(inputs).filter(([k, v]) => v.length !== 0).map(([k, v]) => (k));
  const intersection = minimumList.filter(x => notEmptyFieldsArray.includes(x));

  return intersection.length === minimumList.length;
}