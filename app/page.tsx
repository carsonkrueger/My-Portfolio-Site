"use client";

import { useState, useRef } from "react";

import HeaderIcon from "./components/HeaderIcon";
import Button from "./components/Button";
import ButtonClient from "./components/ButtonClient";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Notification from "../components/Notification";

import { NotiType } from "./types/types";

export default function Home() {
  const [show, setShow] = useState<boolean>(false);
  const noti = useRef<NotiType>(NotiType.FAILURE);
  const contactRef = useRef<HTMLDivElement>(null!);

  function addNotification(notiType: NotiType): void {
    noti.current = notiType;
    setShow(true);
  }

  function removeNotification(): void {
    setShow(false);
  }

  function scrollTo(e: any, ref: Element) {
    e.preventDefault();
    if (ref) ref.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex min-h-screen flex-col items-center ">
      <header className="fixed z-10 px-5 py-5 flex flex-row bg-mediumdark min-w-full items-center justify-end xs:justify-between">
        <h1 className="hidden xs:flex sm:justify-end font-mono text-white text-2xl md:text-2xl">
          Welcome
          <p className="text-lightdark">.tsx</p>
        </h1>

        <div className="flex flex-row justify-between items-center space-x-2 md:space-x-3">
          <HeaderIcon
            imgSrc="/gmail.svg"
            url="mailto:crkruege@gmail.com"
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
            className="transition-transform hover:-translate-y-1 flex items-center justify-center shadow-xl px-3 py-1 text-white bg-primary rounded-md font-mono text-[.9rem]"
            text="Resume"
            href="/Resume.pdf"
            target="_blank"
            disabled={false}
          />
        </div>
      </header>

      <div className="fixed right-0 mt-24 flex flex-col space-y-3 mr-5">
        <Notification
          show={show}
          isSuccessful={noti.current}
          removeNotification={removeNotification}
        />
      </div>

      <div className="flex px-5 py-5 justify-center min-h-screen items-center text-lightdark font-mono text-md ">
        <div className="flex flex-col space-y-3 max-w-screen-xs lg:max-w-screen-sm">
          <div>Hi my names is...</div>
          <div className="flex text-primary text-4xl sm:text-5xl pl-3">
            Carson Krueger
          </div>
          <p>
            I&apos;m an aspiring full stack developer with a lot of passion for
            Computer Science! I&apos;m currently enrolled in the CS program at
            Utah Valley University, expected to graduate Spring of 2024.
          </p>
          <ButtonClient
            onClick={(e: any) => scrollTo(e, contactRef.current)}
            className="transition-transform hover:-translate-y-1 flex items-center justify-center bg-primary self-start px-3 py-1 sm:mt-7 ml-3 shadow-xl text-white rounded-md text-[1rem]"
            text="Contact"
          />
        </div>
      </div>

      <div className="px-5 bg-invis min-h-[80vh] min-w-full flex flex-col mb-32 space-y-28 py-28 lg:flex-row lg:space-x-32 lg:space-y-0 items-center lg:items-start justify-center font-mono text-mediumdark">
        <div className="max-w-screen-xs space-y-3">
          <div className="flex justify-center text-4xl">Projects</div>
          <Project
            name="Repr"
            body="An android mobile app on the Google Play Store used for recording workout weights and reps. Built using React Native & Expo."
            href="https://play.google.com/store/apps/details?id=com.crkruege00.REPR"
          />
          <Project
            name="Compiler"
            body="Compiles KXI source code to an assembly language. Uses the Assembler & Virtual Machine I built to create and run byte code! (link available upon request)"
            href={undefined}
          />
          <Project
            name="DuckTyper"
            body={
              "Used to determine your typing speeds, on a minimalistic designed website. Built with Next JS, and Tailwind, hosted on Vercel!"
            }
            href={"https://duck-typer.vercel.app/"}
          />
          <Project
            name="Snake Game"
            body="A snake game built using React JS, Tailwind, and Vite, hosted using Vercel."
            href="https://snake-shake.vercel.app/"
          />
          <Project
            name="CPU Scheduler"
            body="A program written in C++ that simulates the algorithms that the CPU uses to prioritizes tasks. FCFS, SJF, STRF, and RR algorithms."
            href="https://github.com/carsonkrueger/School-Projects/tree/main/3060/P4"
          />
          {/* <Project
            name="This Site"
            body="Built using Next JS, and Tailwind, hosted on Vercel!"
            href="#"
          /> */}
        </div>

        <div className="flex flex-col space-y-5">
          <p className="flex justify-center text-4xl">Skills</p>
          <div className="flex flex-row flex-wrap max-w-screen-xs min-w-[18rem] justify-between">
            <Skill name={"TypeScript"} dashOffset={25} />
            <Skill name={"JavaScript"} dashOffset={19} />
            <Skill name={"Rust"} dashOffset={17} />
            <Skill name={"Tailwind"} dashOffset={13} />
            <Skill name={"React JS"} dashOffset={21} />
            <Skill name={"React Nat."} dashOffset={35} />
            <Skill name={"Next JS"} dashOffset={37} />
            <Skill name={"Git"} dashOffset={25} />
            <Skill name={"CSS"} dashOffset={25} />
            <Skill name={"C++"} dashOffset={40} />
            <Skill name={"Java"} dashOffset={45} />
            <Skill name={"Python"} dashOffset={30} />
            {/* <Skill name={"ML"} dashOffset={40} /> */}
          </div>
        </div>
      </div>

      <div ref={contactRef}></div>
      <Contact show={show} addNotification={addNotification} />
    </div>
  );
}
