import Image from "next/image";
import Button from "./Button";

type privateProps = {
  name: string;
  body: string;
  href: string | undefined;
};

export default function Project({ name, body, href }: privateProps) {
  return (
    <div className="flex flex-col [&>*]:flex [&>*]:py-3 text-md">
      <div className="text-xl">
        <Button
          disabled={href ? false : true}
          className="transition-transform hover:-translate-y-1 flex bg-primary rounded-md py-1 px-2 self-center text-white"
          href={href}
          target="_blank"
        >
          <>
            {name}
            {href && (
              <Image
                className="pl-1"
                width={23}
                height={23}
                src="/externalLink.svg"
                alt={`Link to ${name} project`}
              />
            )}
          </>
        </Button>
      </div>
      {body}
    </div>
  );
}
