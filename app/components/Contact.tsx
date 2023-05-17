"use client";

import { useRef, FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";

import { ensure } from "../../utils/ensure";
import { NotiType } from "../types/types";

interface props {
  addNotification: (arg: NotiType) => void;
  show: boolean;
}

const Contact = ({ addNotification, show }: props) => {
  const form = useRef<HTMLFormElement>(null);
  const sent = useRef(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    // do not let user send multiple emails
    if (show || sent.current) return;
    sent.current = true;

    emailjs
      .sendForm(
        ensure(process.env.NEXT_PUBLIC_EMAILJS_SERVICE),
        ensure(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE),
        ensure(form.current)
      )
      .then(() => {
        addNotification(NotiType.SUCCESS);
        sent.current = false;
      })
      .catch((err) => {
        addNotification(NotiType.FAILURE);
        sent.current = false;
      });
  };

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    else console.log("NO ENV VAR");
  }, []);

  return (
    <form
      ref={form}
      className="min-h-[30rem] px-5 max-w-lg w-[100%] flex justify-start flex-col text-primary font-mono [&>*]:rounded-md space-y-1 [&>label]:pt-1 [&>input]:px-1 [&>input]:border [&>input]:border-lightdark"
      onSubmit={(e) => sendEmail(e)}
    >
      <p className="text-2xl pb-5 self-center text-mediumdark">Contact</p>
      <div className="flex flex-row [&>*]:w-[47%] flex-wrap justify-between [&>*]:rounded-[inherit] [&>label]:pb-1 [&>input]:px-1 [&>input]:border [&>input]:border-lightdark">
        <label htmlFor="first_name">First Name</label>
        <label htmlFor="last_name">Last Name</label>
        <input
          className="text-black"
          type="text"
          id="first_name"
          name="first_name"
          required
        />
        <input
          type="text"
          id="last_name"
          name="last_name"
          className="text-black"
        />
      </div>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="text-black"
        required
      />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        className="text-black min-h-[7rem] px-1 border border-lightdark"
        required
      />
      <div className="bg-primary text-white  w-16 h-7 mt-5 [&>*]:rounded-[inherit] [&>input]:px-1">
        <input
          type="submit"
          value="Send"
          className="w-[100%] h-[100%] hover:cursor-pointer"
        />
      </div>
    </form>
  );
};

export default Contact;
