import React from 'react';
import { shallow } from 'enzyme';
import Nav from "../src/components/nav"
import renderer from 'react-test-renderer';
describe('quick maffs test suite', () => {
    test('2 + 2 is 4', () => {
      expect(2 + 2).toBe(4);
    });
  });

describe("testing nav bar", () => {
  it("properly renders", () => {
    const navbar = renderer.create(
      <Nav></Nav>
    )
    let navbarTest = navbar.toJSON()
    expect(navbar).toMatchSnapshot() 
  })
})