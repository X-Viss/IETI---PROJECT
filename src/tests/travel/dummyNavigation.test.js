import { render, screen } from '@testing-library/react';
import DummyNavigation from '../../travel/dummyNavigation';

test('renders learn react link', () => {
    render(<DummyNavigation />);
    const linkElement = screen.getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
  });