import Image from "next/image";
import Button from "./Button";

type privateProps = {
  name: string;
  body: string;
  href: string;
};

export default function Project({ name, body, href }: privateProps) {
  return (
    <div className="flex flex-col [&>*]:flex [&>*]:py-3 text-md">
      <div className="text-xl">
        <Button
          className="flex border py-0.5 rounded-md p-1 text-white shadow-xl self-center"
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
