import { useEffect, useId, useMemo, useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  error?: string | boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  variant?: "primary";
}

export default function Input(props: Props) {
  const uid = useId();
  const [isPressed, setIsPressed] = useState(false);

  const {
    variant = "primary",
    onKeyDown,
    error = false,
    label = "",
    left,
    right,
    ...attributes
  } = props;

  useEffect(() => {
    if (isPressed) {
      setTimeout(() => {
        setIsPressed(false);
      }, 200);
    }
  }, [isPressed]);

  const getClassName = useMemo(() => {
    return `
      relative
      w-full
      py-3
      transition duration-200 ease-in-out
      bg-white
      text-gray-900
      text-sm
      ${isPressed ? "shadow-custom-secondary" : "shadow-custom-primary"}
      ${Boolean(left) ? "pl-9" : "pl-4"}
      ${Boolean(right) ? "pr-9" : "pr-4"}
      shadow-gray-900
      focus:outline-none
      invalid:shadow-red-500
      aria-[invalid]:shadow-red-500
      aria-[invalid]:placeholder:text-red-500
      placeholder:font-semibold
      placeholder:capitalize
      placeholder:italic
      placeholder:text-gray-400
      disabled:pointer-events-none
      disabled:opacity-60
    `;
  }, [isPressed, left, right]);

  const toggleEnterAnimation = (
    event: React.KeyboardEvent<HTMLInputElement>,
    fun?: Function
  ) => {
    if (event.key === "Enter") {
      setIsPressed(true);
      event.preventDefault();
    }

    if (fun) {
      fun(event);
    }
  };

  return (
    <label htmlFor={uid} className="relative text-sm first-letter:uppercase">
      <p className="first-letter:uppercase text-xs font-medium mb-0.5">
        {label}
      </p>

      {!left || (
        <div className="absolute top-0 z-10 left-0 flex items-center pl-2 w-5 h-5">
          {left}
        </div>
      )}

      <input
        {...attributes}
        id={uid}
        aria-invalid={Boolean(error) || attributes["aria-invalid"]}
        className={getClassName}
        onKeyDown={(e) => toggleEnterAnimation(e, onKeyDown)}
      />

      {!(error && typeof error === "string") || (
        <small className="text-red-500 first-letter:uppercase text-xs mt-0.5 block">
          {error}
        </small>
      )}

      {!right || (
        <div className="absolute top-0 z-10 right-0 flex items-center pr-2 w-5 h-5">
          {right}
        </div>
      )}
    </label>
  );
}
