/* eslint-disable react/jsx-curly-brace-presence */
import renderer from 'react-test-renderer';
import { MockTheme, wait } from '@tests/utils';
import CurrencyMenuButton from '.';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// unit tests
// ==================================
describe('screen: Nav/Desktop Nav Menu', () => {
  beforeEach(async () => {
    component = renderer.create(
      <MockTheme>
        <CurrencyMenuButton />
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
