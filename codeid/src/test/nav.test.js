
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "../components/nav"
import MyApp from "../../pages/_app"
import { render,
  fireEvent,
} from "@testing-library/react"

it("renders navbar without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
})