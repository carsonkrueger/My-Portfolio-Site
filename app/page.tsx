import HeaderIcon from "./(components)/HeaderIcon";
import Button from "./(components)/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center px-5 py-5 sm:py-8 sm:px-8 bg-mediumdark">
      <header className="flex flex-row min-w-full items-center justify-end xs:justify-between">
        <h1 className="hidden xs:flex sm:justify-end font-mono text-orange-600 text-2xl md:text-3xl">
          Welco<div className="text-white">me.</div>
          <div className="text-teal-500">tsx</div>
        </h1>

        <div className="flex flex-row justify-between items-center space-x-2 md:space-x-3">
          <HeaderIcon
            imgSrc="/gmail.svg"
            url="https://www.linkedin.com/in/carson-krueger-pog/"
            alt="Carson's gmail"
          />
          <HeaderIcon
            imgSrc="/linkedin.svg"
            url="https://www.linkedin.com/in/carson-krueger-pog/"
            alt="Carson's linked in"
          />
          <HeaderIcon
            imgSrc="/githubWhite.svg"
            url="https://github.com/carsonkrueger"
            alt="Carson's github"
          />

          <Button
            className="flex items-center justify-center h-9 w-20 text-teal-500 border border-teal-500 rounded-md font-mono text-[1rem]"
            text="Resume"
          />
        </div>
      </header>

      <div className=" border-white flex flex-col pt-[8rem] font-mono text-white text-lg space-y-5">
        Hi my names is...
        <div className="flex text-teal-500 text-4xl sm:text-6xl">
          Carso
          <div className="text-orange-600">n Kreu</div>
          <div>ger</div>
        </div>
        <div className="">
          I'm an aspiring front-end developer with a lot of passion for Computer
          Science! I'm
        </div>
        <Button
          className="flex items-center justify-center h-10 w-24 mt-5 ml-3 sm:mt-7 border border-orange-600 text-orange-600 rounded-md text-[1rem]"
          text="Contact"
        />
      </div>
    </div>
  );
}
