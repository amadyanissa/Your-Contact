
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "../components/nav"
import MyApp from "../../pages/_app"
import { render,
  fireEvent,
} from "@testing-library/react"
import renderer from 'react-test-renderer';

describe('Navbar testing', () => {
  it('correctly renders', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toMatchSnapshot();
  });
});