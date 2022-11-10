import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import CandleStickChart from '.';

// ==================================
// mocks
// ==================================
const mockCandleChartData = [
  {
    close: 19198.11,
    high: 19383.94,
    low: 19058.63,
    open: 19058.63,
    x: new Date(1667966400000),
  },
];

jest.mock('@components', () => ({
  NoSSR: (props: any) => <div id="NoSSR" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('component: IndividualBTCChart', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <CandleStickChart candleChartData={mockCandleChartData} period={90} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
