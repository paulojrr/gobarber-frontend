import React from 'react';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Paulo' }}>
      <SignIn />
    </AuthContext.Provider>

    <GlobalStyle />
  </>
);
export default App;
