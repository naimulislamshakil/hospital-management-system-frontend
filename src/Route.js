import { lazy } from 'react';

const HomePage = lazy(() => import('./Pages/HomePage.jsx'));
const LoginPage = lazy(() => import('./Pages/LoginPage.jsx'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage.jsx'));
const PatientsPage = lazy(() => import('./Pages/PatientsPage.jsx'));

export { HomePage, RegisterPage, LoginPage, PatientsPage };
