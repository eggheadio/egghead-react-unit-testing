import React from 'react';
import Artist from '../src/Artist';

import ReactTestUtils from 'react-addons-test-utils';

describe('Artist', () => {
  var component, contents;

  beforeEach(() => {
    // React Changed test utils in 0.14.x
    // https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html
    component = ReactTestUtils.renderIntoDocument( <Artist name="Run the Jewels" /> );
    contents = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'artist')
  });

  it('should display the correct artist name', () => {
    expect(contents[0].textContent).toMatch(/Artist name: Run the Jewels/);
  });
});