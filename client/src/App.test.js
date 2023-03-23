import { render, screen } from "@testing-library/react";
import App from "./App";
import List from "./components/List";

test("If List component is rendered", () => {
  const { getByText } = render(<List />);
  expect(getByText("Todo List")).toBeInTheDocument();
});
