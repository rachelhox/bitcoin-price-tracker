/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-curly-brace-presence */
import renderer from 'react-test-renderer';
import { MockTheme, wait } from '@tests/utils';
import Nav from '.';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
jest.mock('./components', () => ({
  DesktopNavMenu: (props: { link: string }) => (
    <div id="desktopNavMenu" {...props} />
  ),
  MobileNavMenu: (props: { link: string }) => (
    <div id="mobileNavMenu" {...props} />
  ),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Nav/Mobile Nav Menu', () => {
  beforeEach(async () => {
    component = renderer.create(
      <MockTheme>
        <Nav navLink="/" />
      </MockTheme>
    );
    await wait();
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
