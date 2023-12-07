import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      {/* <Route path="admin/vehicles/create" element={<VehicleCreate />} /> */}
      {/* <Route path="admin/vehicles/edit/:id" element={<VehicleEdit />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
