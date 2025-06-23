import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import FormikForm from "./screens/FormikForm";
import HookContext from "./screens/HookContext";
import HookForm from "./screens/HookForm";
import FinalForm from "./screens/FinalForm";
import TanStackForm from "./screens/TanStackForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/formikform" element={<FormikForm />} />
          <Route path="/hookform" element={<HookForm />} />
          <Route path="/context" element={<HookContext />} />
          <Route path="/finalform" element={<FinalForm />} />
          <Route path="/tanstackform" element={<TanStackForm />} />
          <Route path="/*" element={<Navigate to={"/formikform"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
