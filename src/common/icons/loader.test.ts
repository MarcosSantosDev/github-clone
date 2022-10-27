import { loader } from './loader';

describe('Loader icons', () => {
  it('load existing icon', () => {
    const icon = loader('githubinverted');

    expect(icon).toBeTruthy();
  });
});
