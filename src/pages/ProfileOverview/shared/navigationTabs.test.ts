import { getTabActive, tabOptions } from './navigationTabs';

describe('navigation tabs', () => {
  it('should return the default tab when passing the parameter with "null"', () => {
    const defaultTab = tabOptions[0];

    const tabActive = getTabActive(null);

    expect(tabActive).toEqual(defaultTab.tabIdentifier);
  });

  it('must return the active tab when passing the valid parameter', () => {
    const tabActive = getTabActive(tabOptions[0].tabIdentifier);

    expect(tabActive).toBeTruthy();
  });
});
