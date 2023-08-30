import React from 'react';
import { Route, Routes } from 'react-router-dom';
import pages from './utils/pages';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Bookings from './components/pages/Bookings';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
import NotFound from './components/pages/NotFound';
import UnderConstruction from './components/pages/UnderConstruction';

const routesConfig = [
  { path: pages.get('home').path, element: <Home /> },
  { path: pages.get('about').path, element: <UnderConstruction /> },
  { path: pages.get('menu').path, element: <UnderConstruction /> },
  { path: pages.get('bookings').path, element: <Bookings /> },
  { path: pages.get('confirmedBooking').path, element: <ConfirmedBooking /> },
  { path: pages.get('orderOnline').path, element: <UnderConstruction /> },
  { path: pages.get('login').path, element: <UnderConstruction /> },
  { path: '*', element: <NotFound /> },
];

const App = () => {
  return (
    <Layout>
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Layout>
  );
};

export default App;
