import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

// Mock framer-motion to avoid animation issues during testing
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  return {
    ...actual,
    motion: {
      ...actual.motion,
      div: ({ children, layoutId, style, ...props }) => (
        <div data-testid={`motion-div-${layoutId}`} style={style} {...props}>
          {children}
        </div>
      ),
    },
  };
});

describe('Header Component', () => {
  it('renders standard navigation links', () => {
    render(<Header />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Gallery')).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders the initial state with #hero as active (does not show motion dot on #hero initially)', () => {
    render(<Header />);
    // Verify that no motion dot is rendered initially since #hero is not in navItems
    const activeDot = screen.queryByTestId('motion-div-activeNavDot');
    expect(activeDot).not.toBeInTheDocument();
  });

  it('updates the active state and shows motion dot when a navigation link is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);

    const aboutLink = screen.getByText('About');
    await user.click(aboutLink);

    // Now the active item is '#about', so the motion dot should be rendered inside the 'About' link.
    const activeDot = screen.getByTestId('motion-div-activeNavDot');
    expect(activeDot).toBeInTheDocument();
    expect(aboutLink).toContainElement(activeDot);
  });

  it('updates the active state back to #hero when the brand logo is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);

    // First, click a nav item to change active state from #hero
    const galleryLink = screen.getByText('Gallery');
    await user.click(galleryLink);

    // Verify dot is on Gallery
    expect(screen.getByTestId('motion-div-activeNavDot')).toBeInTheDocument();
    expect(galleryLink).toContainElement(screen.getByTestId('motion-div-activeNavDot'));

    // Now click the brand logo
    const brandLogo = screen.getByLabelText('WASIF AFNAN MUKTO home');
    await user.click(brandLogo);

    // Verify dot is gone since active is back to #hero
    expect(screen.queryByTestId('motion-div-activeNavDot')).not.toBeInTheDocument();
  });

  it('renders the "Hire Me" CTA button correctly', () => {
    render(<Header />);
    const ctaButton = screen.getByText('Hire Me');
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton.closest('a')).toHaveAttribute('href', '#contact');
  });
});
