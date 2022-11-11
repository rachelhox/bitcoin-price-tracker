import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import PriceRow from '.';

// ==================================
// mocks
// ==================================

const mockPriceTableData = [
  {
    key: 'aed',
    name: 'United Arab Emirates Dirham',
    type: 'fiat',
    unit: 'DH',
    value: 63890.518,
  },
  {
    key: 'usd',
    name: 'US Dollar',
    type: 'fiat',
    unit: '$',
    value: 17394.665,
  },
];

// ==================================
// unit tests
// ==================================

describe('component: PriceRow', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <PriceRow priceTableData={mockPriceTableData} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
