import { loader, IconName } from './';

describe('Icons', () => {
  it('load mapped icon', () => {
    const icon = loader('library');

    expect(icon).toBeTruthy();
  });

  it('load unmapped icon', () => {
    const icon = loader('test' as IconName);

    expect(icon).toBeFalsy();
  });
});
