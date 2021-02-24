import React from 'react';

import Routes from './routes/routes';
import GlobalStyle from './styles/global';
import Topbar from './components/Topbar/index';
import Navbar from './components/Navbar/index';

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
