import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'utils/hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Loader } from './Loader/Loader';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
  const Register = lazy(() => import('../pages/Register/Register'));
  const Login = lazy(() => import('../pages/Login/Login'));
  const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
  const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
