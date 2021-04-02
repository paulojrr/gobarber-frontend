import React from 'react';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';
import ToastContainer from './components/ToastContainer';

import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />
    <GlobalStyle />
  </>
);
export default App;
