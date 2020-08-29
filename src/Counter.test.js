import React from "react";
import { render, cleanup } from "@testing-library/jest-dom/extend-expect";
import Counter from "./Counter";

test("<Counter />", () => {
  const wrapper = render(<Counter />);
  wrapper.debug();
});
