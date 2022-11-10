import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import IndividualBTCChart from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  TimePeriodButton: (props: any) => <div id="TimePeriodButton" {...props} />,
}));

jest.mock('./components', () => ({
  CandleStickChart: (props: any) => <div id="CandleStickChart" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('component: IndividualBTCChart', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <IndividualBTCChart />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
