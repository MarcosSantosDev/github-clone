import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('<Home />', () => {
  it('should contains in the document', () => {
    render(<Home />);
    const element = screen.getByText(/Welcome to home!/i);
    expect(element).toBeInTheDocument();
  });
});
