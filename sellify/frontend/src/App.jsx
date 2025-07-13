import React from "react";
import "../src/output.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import router from './routes/Router.jsx';  
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={3000}  hideProgressBar="true"/>
    </>
  );
};

export default App;
