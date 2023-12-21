import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { LoginProvider } from './store/contexts/loginContext';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={
        <LoginProvider>
          <Login />
        </LoginProvider>
      } />
      <Route path="/sign-up" element={<SignUp />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
