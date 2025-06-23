import { useCallback, useState } from "react";
import { useForm } from "@tanstack/react-form";
import Input from "../components/Input";
import { initialValues } from "../models/InitialForm";
import { FormModel } from "../models/FormModel";
import { FormValidationSchema } from "../validations/FormValidationSchema";

const TanStackForm = () => {
  const onSubmit = useCallback((values: FormModel) => {
    console.log(values);
  }, []);

  const [showRenderCount, setShowRenderCount] = useState(false);

  const form = useForm({
    defaultValues: initialValues,
    onSubmit: async ({ value }) => {
      onSubmit(value);
    },
  });

  const validateField = (name: keyof FormModel, value: string) => {
    try {
      FormValidationSchema.validateSyncAt(name, { [name]: value });
      return undefined;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'message' in err) {
        return err.message as string;
      }
      return 'Validation error';
    }
  };

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between items-start gap-2 pb-4">
        <h1 className="text-black text-2xl font-bold">TanStack React Form</h1>
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <form.Field
              name="name"
              validators={{
                onChange: ({ value }) => validateField("name", value),
              }}
            >
              {(field) => (
                <Input
                  type="text"
                  id="first_name"
                  placeholder="John"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  invalid={!!field.state.meta.errors}
                  errorText={field.state.meta.errors?.[0]}
                  showRenderCount={showRenderCount}
                />
              )}
            </form.Field>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <form.Field
              name="surname"
              validators={{
                onChange: ({ value }) => validateField("surname", value),
              }}
            >
              {(field) => (
                <Input
                  type="text"
                  id="last_name"
                  placeholder="Doe"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  invalid={!!field.state.meta.errors}
                  errorText={field.state.meta.errors?.[0]}
                  showRenderCount={showRenderCount}
                />
              )}
            </form.Field>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => validateField("email", value),
            }}
          >
            {(field) => (
              <Input
                id="email"
                placeholder="johndoe@gmail.com"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                invalid={!!field.state.meta.errors}
                errorText={field.state.meta.errors?.[0]}
                showRenderCount={showRenderCount}
              />
            )}
          </form.Field>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) => validateField("password", value),
            }}
          >
            {(field) => (
              <Input
                type="password"
                id="password"
                placeholder="•••••••••"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                invalid={!!field.state.meta.errors}
                errorText={field.state.meta.errors?.[0]}
                showRenderCount={showRenderCount}
              />
            )}
          </form.Field>
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <form.Field
            name="confirmPassword"
            validators={{
              onChange: ({ value }) => validateField("confirmPassword", value),
            }}
          >
            {(field) => (
              <Input
                type="password"
                id="confirm_password"
                placeholder="•••••••••"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                invalid={!!field.state.meta.errors}
                errorText={field.state.meta.errors?.[0]}
                showRenderCount={showRenderCount}
              />
            )}
          </form.Field>
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
          disabled={form.state.isSubmitting}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TanStackForm; 