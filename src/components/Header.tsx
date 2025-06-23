import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-4 dark:bg-gray-800 shadow-lg">
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
          <div className="flex items-center lg:order-2"></div>
          <div className="justify-between items-center flex w-auto order-1">
            <ul className="flex font-medium lg:flex-row lg:space-x-8">
              <li>
                <a
                  href="/formikform"
                  className={`block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                    location.pathname === "/formikform" &&
                    "text-primary-700 dark:text-white"
                  }`}
                  aria-current="page"
                >
                  Formik
                </a>
              </li>
              <li>
                <a
                  href="/hookform"
                  className={`block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                    location.pathname === "/hookform" &&
                    "text-primary-700 dark:text-white"
                  }`}
                >
                  React Hook Form
                </a>
              </li>
              <li>
                <a
                  href="/context"
                  className={`block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                    location.pathname === "/context" &&
                    "text-primary-700 dark:text-white"
                  }`}
                >
                  Hook Context
                </a>
              </li>
              <li>
                <a
                  href="/finalform"
                  className={`block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                    location.pathname === "/finalform" &&
                    "text-primary-700 dark:text-white"
                  }`}
                >
                  Final Form
                </a>
              </li>
              <li>
                <a
                  href="/tanstackform"
                  className={`block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                    location.pathname === "/tanstackform" &&
                    "text-primary-700 dark:text-white"
                  }`}
                >
                  TanStack Form
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
