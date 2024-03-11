import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function() {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function () {
    const { getByLabelText, queryByText } = render(<BoxList />);
  
    // no items yet
    expect(queryByText("backgroundColor: pink")).not.toBeInTheDocument();
  
    // Use placeholder text for finding labels
    const heightInput = getByLabelText(/Height:/);
    const widthInput = getByLabelText(/Width:/);
    const backgroundColorInput = getByLabelText(/Color:/);
    const submitBtn = queryByText("Create");
  
    // fill out the form
    fireEvent.change(heightInput, { target: { value: "150" } });
    fireEvent.change(widthInput, { target: { value: "150" } });
    fireEvent.change(backgroundColorInput, { target: { value: "pink" } });
    fireEvent.click(submitBtn);
  
    // item exists!
    expect(queryByText("pink")).toBeInTheDocument();
  }
  
  
  );

  it("can delete a  box", function () {
    const { getByLabelText, queryByText } = render(<BoxList />);
  
    // no items yet
    expect(queryByText("backgroundColor: pink")).not.toBeInTheDocument();
  
    // Use placeholder text for finding labels
    const heightInput = getByLabelText(/Height:/);
    const widthInput = getByLabelText(/Width:/);
    const backgroundColorInput = getByLabelText(/Color:/);
    const submitBtn = queryByText("Create");
  
    // fill out the form
    fireEvent.change(heightInput, { target: { value: "150" } });
    fireEvent.change(widthInput, { target: { value: "150" } });
    fireEvent.change(backgroundColorInput, { target: { value: "pink" } });
    fireEvent.click(submitBtn);
  
    // item exists!
    expect(queryByText("pink")).toBeInTheDocument();
  }
  
  );


test("can delete a box", () => {
    // Render the BoxList component
    const { getByLabelText, getByText, queryByText } = render(<BoxList />);
  
    // Use placeholder text for finding labels
    const backgroundColorInput = getByLabelText(/Color:/);
    const submitBtn = queryByText("Create");

    fireEvent.change(backgroundColorInput, { target: { value: "pink" } });
    fireEvent.click(submitBtn);
  
    // Check if the box is present in the DOM
    expect(queryByText("pink")).toBeInTheDocument();
  
    // Delete the box
    fireEvent.click(getByText("X"));
  
    // Check if the box is no longer present in the DOM
    expect(queryByText("pink")).not.toBeInTheDocument();
  });