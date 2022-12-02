import { render, screen } from '@testing-library/react';

import { Container } from './Container';

describe('<Container />', () => {
  it('should be in the document', () => {
    render(<Container data-testid="container" />);

    const element = screen.getByTestId('container');

    expect(element).toBeInTheDocument();
  });
});
