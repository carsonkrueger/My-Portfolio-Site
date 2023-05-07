import Image from "next/image";
import Button from "./Button";

type privateProps = {
  name: string;
  body: string;
  href: string;
};

export default function Project({ name, body, href }: privateProps) {
  return (
    <div className="flex flex-col [&>*]:flex [&>*]:p-3 text-md">
      <div className="text-xl">
        <Button
          className="flex rounded-md border p-1 border-white text-white self-center"
          href={href}
          target="_blank"
        >
          <>
            {name}
            <Image
              className="pl-1"
              width={23}
              height={23}
              src="/externalLink.svg"
              alt={`Link to ${name} project`}
            />
          </>
        </Button>
      </div>
      {body}
    </div>
  );
}
