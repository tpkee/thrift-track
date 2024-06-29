interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label: React.ReactNode;
  selected?: boolean;
}

const className = `
  relative
  text-gray-900
  bg-white
  transition-all duration-75 ease-in-out
  hover:bg-hedonist-500/90
  active:bg-hedonist-600/90
  focus:outline-none
  focus-visible:bg-hedonist-500/90
  disabled:bg-opacity-50
  disabled:pointer-events-none
  hover:text-white
  focus-visible:text-white
  active:text-white
  text-sm
  min-w-52
  w-full 
  px-4 py-2.5 text-left flex items-center
`;

export default function ItemDropdown(props: Props) {
  const { icon, label, selected, ...attributes } = props;

  return (
    <button className={className} {...attributes} tabIndex={0}>
      {!icon || <span className="w-5 h-5 mr-2">{icon}</span>}
      <span>{label}</span>
      {!selected || <span className="ml-auto">✔</span>}
      {/* TODO: change the selected tik icon */}
    </button>
  );
}
