/* eslint-disable react/jsx-curly-brace-presence */
import renderer from 'react-test-renderer';
import { MockTheme, wait } from '@tests/utils';
import DesktopNavMenu from '.';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
jest.mock('..', () => ({
  CurrencyMenuButton: (props: any) => (
    <div id="currencyMenuButton" {...props} />
  ),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Nav/Desktop Nav Menu', () => {
  beforeEach(async () => {
    component = renderer.create(
      <MockTheme>
        <DesktopNavMenu link="/" />
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
