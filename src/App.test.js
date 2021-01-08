import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import App from "./App";

describe("App", () => {

  test("check if submit button is default disabled", () => {
    const {getByText} = render(<App />);
    expect(getByText(/Submit/i).closest('button')).toBeDisabled();
  });

  test("check if submit button is enabled when form is valid", () => {
    const {getByText} = render(<App />);

    fireEvent.change(screen.getByLabelText(/Last name */i), {
      target: {value: 'Bond'},
    })
    fireEvent.change(screen.getByLabelText(/First name */i), {
      target: {value: 'James'},
    })
    fireEvent.change(screen.getByLabelText(/Email address */i), {
      target: {value: '007@mi6.co.uk'},
    })
    fireEvent.change(screen.getByLabelText(/Password */i), {
      target: {value: 'Bond12'},
    })
    fireEvent.change(screen.getByLabelText(/Re-enter passwd */i), {
      target: {value: 'Bond12'},
    })
    expect(getByText(/Submit/i).closest('button')).not.toBeDisabled();
  });

  test("check if submit button is disabled when address form is not filled", () => {
    const {getByText} = render(<App />);

    fireEvent.change(screen.getByLabelText(/Last name */i), {
      target: {value: 'Bond'},
    })
    fireEvent.change(screen.getByLabelText(/First name */i), {
      target: {value: 'James'},
    })
    fireEvent.change(screen.getByLabelText(/Email address */i), {
      target: {value: '007@mi6.co.uk'},
    })
    fireEvent.change(screen.getByLabelText(/Password */i), {
      target: {value: 'Bond12'},
    })
    fireEvent.change(screen.getByLabelText(/Re-enter passwd */i), {
      target: {value: 'Bond12'},
    })

    const radioButtonToggleAddress = screen.getByLabelText(/Show Address/i);
    fireEvent.change(radioButtonToggleAddress, {target: {checked: true}})

    expect(getByText(/Submit/i).closest('button')).toBeDisabled();
  });

  test("check if submit button is disabled when address form is not filled", () => {
    let {getByText} = render(<App showAddress={true} />);

    fireEvent.change(screen.getByLabelText(/Last name */i), {
      target: {value: 'Bond'},
    })
    fireEvent.change(screen.getByLabelText(/First name */i), {
      target: {value: 'James'},
    })
    fireEvent.change(screen.getByLabelText(/Email address */i), {
      target: {value: '007@mi6.co.uk'},
    })
    fireEvent.change(screen.getByLabelText(/Password */i), {
      target: {value: 'Bond12'},
    })
    fireEvent.change(screen.getByLabelText(/Re-enter passwd */i), {
      target: {value: 'Bond12'},
    })

    fireEvent.change(screen.getByLabelText(/Street */i), {
      target: {value: 'Kostromast. 11'},
    })
    fireEvent.change(screen.getByLabelText(/ZIP */i), {
      target: {value: '52078'},
    })
    fireEvent.change(screen.getByLabelText(/City */i), {
      target: {value: 'Aachen'},
    })

    expect(getByText(/Submit/i).closest('button')).not.toBeDisabled();
  });
});
