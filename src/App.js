// import { Routes, Route } from 'react-router-dom';
// import { Suspense, lazy } from 'react';

// import Layout from 'Layout/Layout';

// export const App = () => {
//   const Home = lazy(() => import('pages/home/Home'));
//   const Login = lazy(() => import('pages/login/Login'));
//   const Register = lazy(() => import('pages/register/Register'));
//   const Contacts = lazy(() => import('pages/contacts/Contacts'));
//   return (
//     <Suspense fullback={''}>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/contacts" element={<Contacts />} />
//         </Route>
//       </Routes>
//     </Suspense>
//   );
// };

import { AuthProvider } from './contexts/AuthProvider';
import Routes from './routes/Routes';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
      <ToastContainer autoClose={1000} />
    </AuthProvider>
  );
};
export default App;
