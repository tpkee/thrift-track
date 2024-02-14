import ItemDropdown from "@/components/ItemDropdown";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<typeof ItemDropdown>;
  open?: boolean;
}

export default function Dropdown(props: Props) {
  const { children, open, ...attributes } = props;

  const className = `
    absolute top-0 right-0
    w-full
    border-2
    transition duration-200 ease-in-out
    text-gray-900
    border-gray-900
    ${open ? "block" : "hidden"}
    shadow-md
`;

  return (
    <div {...attributes}>
      <div className={className}>{children}</div>
    </div>
  );
}
