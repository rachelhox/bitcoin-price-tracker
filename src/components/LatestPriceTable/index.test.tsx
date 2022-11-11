import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import LatestPriceTable from '.';

// ==================================
// mocks
// ==================================

jest.mock('./components', () => ({
  PriceRow: (props: any) => <div id="PriceRow" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('component: LatestPriceTable', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <LatestPriceTable />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
