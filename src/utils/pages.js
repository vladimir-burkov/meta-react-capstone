const pages = [
  { id: 'home', name: 'Home', path: '/', anchorable: true },
  { id: 'about', name: 'About', path: '/about', anchorable: true },
  { id: 'menu', name: 'Menu', path: '/menu', anchorable: true },
  { id: 'bookings', name: 'Reservations', path: '/bookings', anchorable: true },
  { id: 'confirmedBooking', name: 'Confirmed Booking', path: '/confirmed-booking', anchorable: false },
  { id: 'orderOnline', name: 'Order Online', path: '/order-online', anchorable: true },
  { id: 'login', name: 'Login', path: '/login', anchorable: true }
];

const pagesConfig = new Map(pages.map(page => [page.id, page]));

export default pagesConfig;
