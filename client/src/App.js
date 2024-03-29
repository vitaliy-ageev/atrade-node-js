import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter';
import Header from "./components/Header";

const App = () => {
  return (
      <BrowserRouter>
          <Header />
        <AppRouter />
      </BrowserRouter>
  );
};

export default App;