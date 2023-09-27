import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WeatherForecasting from './pages/weatherForecasting/WeatherForecasting';
import Dashboard from './pages/dashboard/Dashboard';
import CityAnalytics from './pages/cityAnalytics/CityAnalytics';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/previsao-florianopolis",
    element: <WeatherForecasting />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/city-analytics",
    element: <CityAnalytics />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
