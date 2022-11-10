import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Layout from '.';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Nav: (props: any) => <div id="Nav" {...props} />,
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
  }),
}));

// ==================================
// unit tests
// ==================================
describe('component: Layout', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <Layout navLink="/">
          <div>hello world</div>
        </Layout>
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
