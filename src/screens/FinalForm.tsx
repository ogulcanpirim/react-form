import { useCallback, useState } from "react";
import { Form, Field } from "react-final-form";
import Input from "../components/Input";
import { initialValues } from "../models/InitialForm";
import { FormModel } from "../models/FormModel";
import { FormValidationSchema } from "../validations/FormValidationSchema";

const FinalForm = () => {
  const onSubmit = useCallback((values: FormModel) => {
    console.log(values);
  }, []);

  const [showRenderCount, setShowRenderCount] = useState(false);

  const validate = (values: FormModel) => {
    try {
      FormValidationSchema.validateSync(values, { abortEarly: false });
      return {};
    } catch (err: unknown) {
      const errors: Record<string, string> = {};
      if (err && typeof err === 'object' && 'inner' in err && Array.isArray(err.inner)) {
        err.inner.forEach((error: { path: string; message: string }) => {
          errors[error.path] = error.message;
        });
      }
      return errors;
    }
  };

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between items-start gap-2 pb-4">
        <h1 className="text-black text-2xl font-bold">React Final Form</h1>
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
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        validate={validate}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <Field name="name">
                  {({ input, meta }) => (
                    <Input
                      type="text"
                      id="first_name"
                      placeholder="John"
                      {...input}
                      invalid={meta.touched && meta.error}
                      errorText={meta.touched && meta.error}
                      showRenderCount={showRenderCount}
                    />
                  )}
                </Field>
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <Field name="surname">
                  {({ input, meta }) => (
                    <Input
                      type="text"
                      id="last_name"
                      placeholder="Doe"
                      {...input}
                      invalid={meta.touched && meta.error}
                      errorText={meta.touched && meta.error}
                      showRenderCount={showRenderCount}
                    />
                  )}
                </Field>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <Field name="email">
                {({ input, meta }) => (
                  <Input
                    id="email"
                    placeholder="johndoe@gmail.com"
                    {...input}
                    invalid={meta.touched && meta.error}
                    errorText={meta.touched && meta.error}
                    showRenderCount={showRenderCount}
                  />
                )}
              </Field>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <Field name="password">
                {({ input, meta }) => (
                  <Input
                    type="password"
                    id="password"
                    placeholder="•••••••••"
                    {...input}
                    invalid={meta.touched && meta.error}
                    errorText={meta.touched && meta.error}
                    showRenderCount={showRenderCount}
                  />
                )}
              </Field>
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <Field name="confirmPassword">
                {({ input, meta }) => (
                  <Input
                    type="password"
                    id="confirm_password"
                    placeholder="•••••••••"
                    {...input}
                    invalid={meta.touched && meta.error}
                    errorText={meta.touched && meta.error}
                    showRenderCount={showRenderCount}
                  />
                )}
              </Field>
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" />
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
              disabled={submitting || pristine}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default FinalForm; 