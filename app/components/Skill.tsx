import Image from "next/image";

type privateProps = {
  name: String;
  dashOffset: number;
};

export default function Skill({ name, dashOffset }: privateProps) {
  return (
    <div className="min-w-[50%] max-w-[50%] flex items-center space-x-2 py-2">
      <div className="relative flex justify-center items-center">
        <div className="flex justify-center items-center w-12 h-12  rounded-[50%] shadow-lg">
          <div className="w-8 h-8 bg-invis rounded-[inherit] shadow-gray-400 shadow-inner" />
        </div>
        <svg
          className="absolute left-0 top-0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="48px"
          height="48px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#DA22FF" />
              <stop offset="100%" stop-color="#9733EE" />
            </linearGradient>
          </defs>
          <circle
            className="fill-none stroke-[8px] stroke-orange-600"
            style={{ strokeDasharray: 125, strokeDashoffset: dashOffset }}
            cx="24"
            cy="24"
            r="20"
            stroke-linecap="round"
          />
        </svg>
        <p className="absolute text-sm">
          {(((125 - dashOffset) / 125) * 100).toPrecision(2)}%
        </p>
      </div>

      <p>{name}</p>
    </div>
  );
}
