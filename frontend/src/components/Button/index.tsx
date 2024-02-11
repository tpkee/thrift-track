import { useTranslations } from "next-intl";

import IconSpinner from "/assets/icons/spinner.svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary";
}

export default function Button(props: Props) {
  const {
    variant = "primary",
    loading = false,
    disabled = false,
    children,
    ...attributes
  } = props;

  const className = `
  relative
  py-2.5 px-6
  shadow-custom-primary 
  transition duration-200 ease-in-out
  bg-hedonist-600 text-white
  shadow-gray-900
  hover:bg-hedonist-500
  active:shadow-custom-secondary
  disabled:pointer-events-none
  ${loading || "disabled:opacity-60"}
  text-center
`;

  const t = useTranslations("common");

  return (
    <button
      {...attributes}
      className={className}
      aria-disabled={disabled || loading}
      disabled={disabled || loading}
    >
      {!loading || (
        <>
          <IconSpinner className="motion-reduce:hidden absolute mx-auto text-center left-0 top-auto align-middle w-full h-6 fill-gray-900 animate-spin" />
          <span className="capitalize sr-only motion-reduce:not-sr-only">
            {t("loading")}...
          </span>
        </>
      )}
      <span className={loading ? "opacity-0" : "opacity-100"}>{children}</span>
    </button>
  );
}
