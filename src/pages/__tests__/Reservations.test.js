import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Reservations from '../Reservations';

beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation((msg) => {
    if (
      msg.includes('React Router Future Flag Warning')
    ) return;
    console.warn(msg);
  });
});

describe('Reserve a Table Form Validation', () => {
  const setup = () => {
    render(
      <BrowserRouter>
        <Reservations />
      </BrowserRouter>
    );
  };

  test('renders Reserve a Table heading', () => {
    setup();
    expect(screen.getByText('Reserve a Table')).toBeInTheDocument();
  });

  test('form has required input attributes', () => {
    setup();
    expect(screen.getByLabelText('Name')).toHaveAttribute('required');
    expect(screen.getByLabelText('Date')).toHaveAttribute('required');
    expect(screen.getByLabelText('Time')).toHaveAttribute('required');
    expect(screen.getByLabelText('Number of Guests')).toHaveAttribute('min', '1');
  });

  test('shows error on submitting empty form', async () => {
    setup();
    fireEvent.click(screen.getByRole('button', { name: 'Book Now' }));
    await waitFor(() => {
      expect(screen.getAllByText(/required/i)).toHaveLength(3);
    });
  });

  test('rejects past date', async () => {
    setup();
    const nameInput = screen.getByLabelText('Name');
    const dateInput = screen.getByLabelText('Date');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(dateInput, { target: { value: '2020-01-01' } });
    fireEvent.click(screen.getByRole('button', { name: 'Book Now' }));
    expect(await screen.findByText('Please select a future date')).toBeInTheDocument();
  });
});
