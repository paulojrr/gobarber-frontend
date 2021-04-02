import React from 'react';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import AppProvider from './context';

import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);
export default App;
