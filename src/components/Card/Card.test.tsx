import { render, fireEvent } from "@testing-library/react";
import React from "react";

import Card, { CardProps } from "./";

const DEFAULT_PROPS: CardProps = {
  title: "Title Text",
  value: "123",
  bottomText: "Bottom Text",
};

jest.mock("../Skeleton", () => {
  return function MockSkeleton(props: any) {
    return <span {...props}>Skeleton</span>;
  };
});

const renderComponent = (props?: CardProps) => render(<Card {...props} />);

test("should work with synchronous data", () => {
  const { getByText } = renderComponent(DEFAULT_PROPS);
  expect(getByText("Title Text")).toBeInTheDocument();
  expect(getByText("123")).toBeInTheDocument();
  expect(getByText("Bottom Text")).toBeInTheDocument();
});

test("should show skeleton when loading asynchronous data", () => {
  const { getByText } = renderComponent({ ...DEFAULT_PROPS, value: { isLoading: true } });
  expect(getByText("Skeleton")).toBeInTheDocument();
});

test("should show asynchronous value when data has loaded", () => {
  const { getByText, queryByText } = renderComponent({
    ...DEFAULT_PROPS,
    value: { isLoading: false, text: "Async Data" },
  });
  expect(queryByText("Skeleton")).toBeNull();
  expect(getByText("Async Data")).toBeInTheDocument();
});
