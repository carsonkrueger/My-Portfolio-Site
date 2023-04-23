// import { Inter } from "next/font/google";
import Image from "next/image";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-5 py-5">
      <header className="flex flex-row min-w-full justify-between text-4xl">
        <h1>Carson Krueger</h1>

        <div className="flex flex-row space-x-1">
          <a
            href="https://www.linkedin.com/in/carson-krueger-pog/"
            target="_blank"
          >
            <Image src="/gmail.png" alt="gmail icon" width={50} height={50} />
          </a>
          <a
            className="fill-blue"
            href="https://github.com/carsonkrueger"
            target="_blank"
          >
            <Image src="/github.svg" alt="github icon" width={50} height={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/carson-krueger-pog/"
            target="_blank"
          >
            <Image
              src="/linkedin.png"
              alt="linkedin icon"
              width={50}
              height={50}
            />
          </a>
        </div>
      </header>

      <h1>Hello world!</h1>
    </main>
  );
}
