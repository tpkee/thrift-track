import { useTranslations } from "next-intl";

import IconSpinner from "/assets/icons/spinner.svg";
import Input from "@/components/Input";
import { useState } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary";
}

export default function Button(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownButton = <button onClick={toggleDropdown}>giù</button>;

  const t = useTranslations("common");

  return (
    <div>
      {/* FIXME: add IconSpinner when the weird storybook svg bug is fixed */}
      <Input right={dropdownButton} />
    </div>
  );
}
