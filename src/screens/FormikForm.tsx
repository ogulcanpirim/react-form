import { useCallback, useState } from "react";
import Input from "../components/Input";
import { initialValues } from "../models/InitialForm";
import { useFormik } from "formik";
import { FormModel } from "../models/FormModel";
import { FormValidationSchema } from "../validations/FormValidationSchema";

const FormikForm = () => {
  const onSubmit = useCallback((values: FormModel) => {
    console.log(values);
  }, []);

  const [showRenderCount, setShowRenderCount] = useState(false);

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: FormValidationSchema,
    validateOnChange: false,
  });

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between items-start gap-2 pb-4">
        <h1 className="text-black text-2xl font-bold">Formik Form</h1>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={(val) => setShowRenderCount(val.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Show render count
          </span>
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <Input
              type="text"
              id="first_name"
              placeholder="John"
              value={values.name}
              onChange={handleChange("name")}
              invalid={!!errors.name}
              errorText={errors.name}
              showRenderCount={showRenderCount}
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <Input
              type="text"
              id="last_name"
              placeholder="Doe"
              value={values.surname}
              onChange={handleChange("surname")}
              invalid={!!errors.surname}
              errorText={errors.surname}
              showRenderCount={showRenderCount}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <Input
            id="email"
            placeholder="johndoe@gmail.com"
            value={values.email}
            onChange={handleChange("email")}
            invalid={!!errors.email}
            errorText={errors.email}
            showRenderCount={showRenderCount}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            placeholder="•••••••••"
            value={values.password}
            onChange={handleChange("password")}
            invalid={!!errors.password}
            errorText={errors.password}
            showRenderCount={showRenderCount}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <Input
            type="password"
            id="confirm_password"
            placeholder="•••••••••"
            value={values.confirmPassword}
            onChange={handleChange("confirmPassword")}
            invalid={!!errors.confirmPassword}
            errorText={errors.confirmPassword}
            showRenderCount={showRenderCount}
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value={""} />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormikForm;
