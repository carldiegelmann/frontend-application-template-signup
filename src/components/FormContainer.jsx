import React from "react";
import AddressForm from './AddressForm';
import {Label, Input, Textarea} from "./styles";
import {SHOW_ADDRESS} from './../redux/signUp/reducer/types';

const FormContainer = ({
  errors,
  handleChange,
  handleSubmit,
  values,
  formIsValid,
  handleBlur,
  showAddress,
  dispatch
}) => {

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <Label htmlFor="last-name-input">
            Last name *
            <Input
              type="text"
              className="form-control"
              id="last-name-input"
              placeholder="Enter last name"
              value={values.lastName || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              name="lastName"
              required
            />
            <div style={{color: 'red'}}>{errors.lastName}</div>
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="first-name-input">
            First Name *
            <Input
              type="text"
              className="form-control"
              id="first-name-input"
              placeholder="Enter first name"
              value={values.firstName || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              name="firstName"
              required
            />
            <div style={{color: 'red'}}>{errors.firstName}</div>
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="nick-name-input">
            Nick Name
            <Input
              type="text"
              className="form-control"
              id="nick-name-input"
              placeholder="Enter nick name"
              value={values.nickName || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              name="nickName"
            />
            <div style={{color: 'red'}}>{errors.nickName}</div>
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="email">
            Email address *
            <Input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={values.email || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              required
            />
            <div style={{color: 'red'}}>{errors.email}</div>
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="password">
            Password *
            <Input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={values.password || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              required
            />
            <div style={{color: 'red'}}>{errors.password}</div>
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="password_re">
            Re-enter passwd *
            <Input
              type="password"
              className="form-control"
              id="password_re"
              placeholder="Re-enter password"
              value={values.password_re || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password_re"
              required
            />
            <div style={{color: 'red'}}>{errors.password_re}</div>
          </Label>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="test">Show Address
            <input type="checkbox"
              checked={showAddress}
              onChange={() => dispatch({type: SHOW_ADDRESS, payload: !showAddress})}
            />
            <span></span>
          </label>
        </div>
        <br />
        {showAddress ? <AddressForm handleBlur={handleBlur} handleChange={handleChange} errors={errors} values={values} /> : null}
        <br />
        <div className="form-group">
          <Label htmlFor="additional-info-input">
            Additional information
            <Textarea
              className="form-control"
              id="additional-info-input"
              value={values.additionalInfo || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              name="additionalInfo"
              rows="5"
            />
            <div style={{color: 'red'}}>{errors.additionalInfo}</div>
          </Label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" disabled={!formIsValid}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormContainer;
