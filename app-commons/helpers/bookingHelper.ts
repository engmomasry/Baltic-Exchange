export async function createBooking(request: any): Promise<number> {
  const response = await request.post('https://restful-booker.herokuapp.com/booking', {
    data: {
      firstname: 'Helper',
      lastname: 'User',
      totalprice: 222,
      depositpaid: true,
      bookingdates: {
        checkin: '2024-06-01',
        checkout: '2024-06-05'
      },
      additionalneeds: 'None'
    }
  });

  const body = await response.json();
  return body.bookingid;
}