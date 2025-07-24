import { initializeTimes, updateTimes } from '../Reservations';
import { fetchAPI } from '../../api/api';

jest.mock('../../api/api', () => ({
  fetchAPI: jest.fn(),
}));

beforeEach(() => {
  fetchAPI.mockClear();
});

test('initializeTimes returns expected available times for today', () => {
  fetchAPI.mockReturnValue(['18:00', '18:30']);
  const times = initializeTimes();
  expect(fetchAPI).toHaveBeenCalledTimes(1);
  expect(times).toEqual(['18:00', '18:30']);
});

test('updateTimes returns available times for a given date', () => {
  const mockDate = '2025-07-30';
  fetchAPI.mockReturnValue(['18:00', '18:30']);

  const times = updateTimes([], mockDate);
  expect(fetchAPI).toHaveBeenCalledWith(new Date(mockDate));
  expect(times).toEqual(['18:00', '18:30']);
});
