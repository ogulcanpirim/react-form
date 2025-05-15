import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const DefaultLayout = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <Header />
      <div className="max-w-screen-lg mx-auto px-4 lg:px-6 py-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
