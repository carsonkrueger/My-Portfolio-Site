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
      className="transition-transform hover:-translate-y-1 flex justify-center items-center w-8 h-8 rounded-xl shadow-md radius"
      href={url}
      target="_blank"
    >
      <Image src={imgSrc} alt={alt} width={width} height={height} />
    </a>
  );
}
