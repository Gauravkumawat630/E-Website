// // components/ProtectedRoute.js
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ element: Element, isAuthenticated, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       element={props =>
//         isAuthenticated ? (
//           <Element {...props} />
//         ) : (
//           <Navigate to="/login" replace />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;

// ProtectedRoute.js
import React from 'react';
import {  Route, useNavigate } from 'react-router-dom'

const isAuthenticated = () => {
  // Implement your authentication check logic here
  return localStorage.getItem('authToken') !== null;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      element={isAuthenticated() ? <Component /> : navigate('/login')}
    />
  );
};

export default ProtectedRoute;
