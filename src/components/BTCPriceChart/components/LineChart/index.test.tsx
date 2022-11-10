import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import LineChart from '.';

// ==================================
// mocks
// ==================================
const mockLineChartData = [
  { x: new Date(1660291413194), y: 137359.8917588185 },
];

jest.mock('@components', () => ({
  NoSSR: (props: any) => <div id="NoSSR" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('component: LineChart', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <LineChart lineChartData={mockLineChartData} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
