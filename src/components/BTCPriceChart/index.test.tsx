import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import BTCPriceChart from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  TimePeriodButton: (props: any) => <div id="TimePeriodButton" {...props} />,
}));

jest.mock('./components', () => ({
  LineChart: (props: any) => <div id="LineChart" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('component: BTCPriceChart', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <BTCPriceChart />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
