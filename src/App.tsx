import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import FormikForm from "./screens/FormikForm";
import HookContext from "./screens/HookContext";
import HookForm from "./screens/HookForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/formikform" element={<FormikForm />} />
          <Route path="/hookform" element={<HookForm />} />
          <Route path="/context" element={<HookContext />} />
          <Route path="/*" element={<Navigate to={"/formikform"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
