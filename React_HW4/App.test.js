import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import Header from "./Header";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import EmojiResultRow from "./EmojiResultRow";
import SearchInput from "./SearchInput";

test("renders the header", () => {
  const { container: header } = render(<Header />);
  expect(header).toBeInTheDocument();
});

test("renders the EmojiResults", () => {
  const emojiData = filterEmoji("", 20);

  const { container: EmojiResultsComp } = render(
    <EmojiResults emojiData={emojiData} />
  );
  expect(EmojiResultsComp).toBeInTheDocument();
});

test("renders appropriate emojis that is matched the filter", () => {
  render(<App />);
  const input = screen.getByTestId("input");
  userEvent.type(input, 100);
  const text = screen.getByText("100");
  expect(text.innerHTML).toEqual("100");
});

test("copy text when the row is clicked", () => {
  render(<App />);
  const input = screen.getByTestId("input");
  const row = screen.getByText("1234");
  expect(row.parentElement.attributes[1].value).toEqual("🔢");
});
