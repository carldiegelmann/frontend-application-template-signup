import React from 'react';
import {Label, Input} from "./styles";

const AddressForm = ({
  errors,
  handleBlur,
  handleChange,
  values
}) => {
  return (
    <div>
      <div className="form-group">
        <Label htmlFor="street-input">
          Street *
            <Input
            type="text"
            className="form-control"
            id="street-input"
            placeholder="Enter street"
            value={values.street || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            name="street"
            required
          />
          <div style={{color: 'red'}}>{errors.street}</div>
        </Label>
      </div>
      <div className="form-group">
        <Label htmlFor="house-input">
          House/Apartment
            <Input
            type="text"
            className="form-control"
            id="house-input"
            placeholder="Enter house/apartment"
            value={values.house || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            name="house"
          />
          <div style={{color: 'red'}}>{errors.house}</div>
        </Label>
      </div>
      <div className="form-group">
        <Label htmlFor="zip-input">
          ZIP *
            <Input
            type="number"
            className="form-control"
            id="zip-input"
            placeholder="Enter ZIP code"
            value={values.zip || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            name="zip"
            required
          />
          <div style={{color: 'red'}}>{errors.zip}</div>
        </Label>
      </div>
      <div className="form-group">
        <Label htmlFor="city-input">
          City *
            <Input
            type="text"
            className="form-control"
            id="city-input"
            placeholder="Enter city"
            value={values.city || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            name="city"
            required
          />
          <div style={{color: 'red'}}>{errors.city}</div>
        </Label>
      </div>
    </div>
  )
}

export default AddressForm;