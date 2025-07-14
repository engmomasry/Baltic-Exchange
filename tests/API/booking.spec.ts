import { test, expect } from '@playwright/test';
import { createBooking } from '../../app-commons/helpers/bookingHelper';


test('RF-03: GetBookingIds - should return a list of booking IDs @smoke-api', async ({ request }) => {
  const response = await request.get('https://restful-booker.herokuapp.com/booking');
  expect(response.ok()).toBeTruthy();
  const bookings = await response.json();
  expect(Array.isArray(bookings)).toBeTruthy();
});


test('RF-04: GetBooking - should retrieve booking details for valid ID @smoke-api', async ({ request }) => {
  const bookingId = await createBooking(request);

  const response = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`);
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data).toHaveProperty('firstname');
  expect(data).toHaveProperty('lastname');
});


test('RF-06: CreateBooking - should create a booking with valid data @smoke-api', async ({ request }) => {
  const response = await request.post('https://restful-booker.herokuapp.com/booking', {
    data: {
      firstname: 'Jim',
      lastname: 'Brown',
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: '2024-01-01',
        checkout: '2024-12-01'
      },
      additionalneeds: 'Breakfast'
    }
  });

  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body).toHaveProperty('bookingid');
});