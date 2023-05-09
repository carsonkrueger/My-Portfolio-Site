"use client";

type privateProps = {
  text?: string;
  children?: JSX.Element;
  className?: string;
  href?: string;
  target?: string;
};

const ButtonClient = ({
  text = "",
  children = <></>,
  className,
  href = "#",
  target,
}: privateProps) => {
  return (
    <a
      className={className}
      onClick={() => console.log("Contact")}
      href={href}
      target={target}
    >
      {text}
      {children}
    </a>
  );
};

export default ButtonClient;
