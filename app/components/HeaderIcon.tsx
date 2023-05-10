import Image from "next/image";

type privateProps = {
  imgSrc: string;
  url: string;
  alt: string;
  height?: number;
  width?: number;
};

export default function HeaderIcon({
  imgSrc,
  url,
  alt,
  height = 50,
  width = 50,
}: privateProps) {
  return (
    <a
      className="flex justify-center items-center w-7 h-7 md:w-7 md:h-7 rounded-lg border-black radius"
      href={url}
      target="_blank"
    >
      <Image src={imgSrc} alt={alt} width={width} height={height} />
    </a>
  );
}
