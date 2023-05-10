"use client";

type privateProps = {
  text?: string;
  children?: JSX.Element;
  className?: string;
  href?: string;
  target?: string;
  onClick?: (e?: any) => void;
};

const ButtonClient = ({
  text = "",
  children = <></>,
  className,
  href = "#",
  target,
  onClick,
}: privateProps) => {
  return (
    <a className={className} onClick={onClick} href={href} target={target}>
      {text}
      {children}
    </a>
  );
};

export default ButtonClient;
