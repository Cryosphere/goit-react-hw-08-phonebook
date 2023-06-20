import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import style from './App.module.css';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';

import { GlobalStyle } from './GlobalStyle';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { refreshUser } from '../redux/operations'; // для обновления токена
import { PrivateRoute } from './PrivateRoute'; // для захисту роутів
import { RestrictedRoute } from './RestrictedRoute'; // для захисту роутів
import { ToastContainer } from 'react-toastify'; // для вспливаючих повідомлень
import { Spiner } from 'pages/ContactList/ContactList.styled';

const Register = lazy(() => import('../pages/Register/Register'));
const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contactlist = lazy(() => import('../pages/ContactList/ContactList'));

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1 className={style.header}>Phonebook</h1>
//       <ContactForm />
//       <Filter />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <ContactList />
//     </div>
//   );
// };

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser()); // для обновления токена
  }, [dispatch]);

  const { isRefreshing } = useSelector(state => state.auth);

  // якщо не обновляється токен, то рендеримо компоненти
  return !isRefreshing ? (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contactlist />} redirectTo="/login" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

      {/* для вспливаючих повідомлень */}
      <ToastContainer />

      {/* для глобальних стилів */}
      <GlobalStyle />
    </>
  ) : (
    <Spiner />
  );
};
