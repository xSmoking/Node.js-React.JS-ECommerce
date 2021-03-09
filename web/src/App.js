import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes/routes';
import GlobalStyle from './styles/global';

import store from './store';
import Topbar from './components/Topbar/index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Topbar />
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
