import React from 'react';

import Routes from './routes/routes';
import GlobalStyle from './styles/global';

import Topbar from './components/Topbar/index';

function App() {
  return (
    <>
      <Topbar />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
