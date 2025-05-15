import React, { forwardRef } from "react";
import useRenderCount from "../hooks/useRenderCount";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showRenderCount?: boolean;
  invalid?: boolean;
  errorText?: string;
}

const Input = forwardRef(
  (props: InputProps, ref: React.LegacyRef<HTMLInputElement>) => {
    const count = useRenderCount();
    return (
      <div className="relative">
        <input
          ref={ref}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
            props.invalid &&
            "bg-red-50 border border-red-500 text-red-900 placeholder-red-700"
          }`}
          {...props}
        />
        {props.showRenderCount && (
          <span className="absolute right-0 pt-1 text-black text-sm font-bold text-end">{`Render: ${count}`}</span>
        )}
        <p className="absolute left-0 text-sm text-red-600 dark:text-red-500 font-semibold">
          {props.errorText}
        </p>
      </div>
    );
  }
);

export default Input;
