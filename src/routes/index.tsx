import { Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
};

export { AllRoutes };
