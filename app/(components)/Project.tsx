import Image from "next/image";
import Button from "./Button";

type privateProps = {
  name: string;
  body: string;
  href: string;
};

export default function Project({ name, body, href }: privateProps) {
  return (
    <div className="flex flex-col [&>*]:flex [&>*]:items-center [&>*]:p-3 text-sm">
      <div className="text-xl text-teal-500">
        <Button className=" rounded-md pr-2" href={href} target="_blank">
          <Image
            width={23}
            height={23}
            src="/externalLink.svg"
            alt={`Link to ${name} project`}
          ></Image>
        </Button>
        {name}
      </div>
      {body}
    </div>
  );
}
