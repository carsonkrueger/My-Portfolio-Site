type privateProps = {
  text?: string;
  children?: JSX.Element;
  className?: string;
  onClick?: (e: any) => void;
  href?: string;
  target?: string;
  disabled: boolean;
};

export default function Button({
  text = "",
  children = <></>,
  className,
  onClick,
  href = "",
  target,
  disabled,
}: privateProps) {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      <a className="flex" href={href} target={target}>
        {text}
        {children}
      </a>
    </button>
  );
}
