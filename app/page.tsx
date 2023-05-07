import HeaderIcon from "./(components)/HeaderIcon";
import Button from "./(components)/Button";
import Project from "./(components)/Project";

export default function Home() {
  return (
    <div className=" flex min-h-screen flex-col items-center px-5 py-5 sm:py-8 sm:px-8 bg-wavesTop bg-no-repeat bg-cover">
      <header className="absolute px-5 sm:px-8 flex flex-row min-w-full items-center justify-end xs:justify-between">
        <h1 className="hidden xs:flex sm:justify-end font-mono text-orange-600 text-2xl md:text-3xl">
          Welcome
          <div className="text-invis">.tsx</div>
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

      <div className="flex justify-center min-h-screen items-center text-white font-mono text-lg ">
        <div className="flex flex-col space-y-3 md:max-w-screen-sm lg:max-w-screen-md">
          <div>Hi my names is...</div>
          <div className="flex text-orange-600 text-4xl sm:text-6xl pl-3">
            Carson Krueger
          </div>
          <div className="">
            I&apos;m an aspiring front-end developer with a lot of passion for
            Computer Science! I&apos;m currently enrolled in the CS program at
            Utah Valley University, expected to graduate Spring of 2024.
          </div>
          <Button
            className="flex items-center justify-center h-10 w-24 sm:mt-7 ml-3 border border-orange-600 text-orange-600 rounded-md text-[1rem]"
            text="Contact"
          />
        </div>
      </div>

      <div className=" max-w-screen-xs space-y-5 font-mono text-white">
        <div className="flex justify-center text-4xl">Projects</div>
        <Project
          name="Repr"
          body="An android mobile app on the Google Play Store used for recording workout weights and reps. Built using React Native & Expo."
          href="https://play.google.com/store/apps/details?id=com.crkruege00.REPR"
        />
        <Project
          name="Snake Shake"
          body="A snake game built using React JS, and vite, hosted using Vercel."
          href="https://snake-shake.vercel.app/"
        />
      </div>
    </div>
  );
}
