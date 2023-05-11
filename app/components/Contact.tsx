"use client";

import { useRef, createRef, FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";

import { ensure } from "../../utils/ensure";

const Contact = () => {
  const form = createRef<HTMLFormElement>();
  const sent = useRef(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    // do not let user send multiple emails
    if (sent.current) return;

    emailjs
      .sendForm(
        ensure(process.env.NEXT_PUBLIC_EMAILJS_SERVICE),
        ensure(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE),
        ensure(form.current)
      )
      .then(() => {
        console.log("SUCCESS");
        sent.current = true;
      })
      .catch((err) => {
        console.log("Email send FAILED:\n", err);
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
      className="min-h-[30rem] px-5 max-w-lg w-[100%] flex justify-start flex-col text-white font-mono [&>*]:rounded-md space-y-1 [&>label]:pt-1 [&>input]:px-1"
      onSubmit={(e) => sendEmail(e)}
    >
      <p className="text-2xl pb-5 self-center">Contact</p>
      <div className="flex flex-row [&>*]:w-[47%] flex-wrap justify-between [&>*]:rounded-[inherit] [&>label]:pb-1 [&>input]:px-1">
        <label htmlFor="first_name">First Name</label>
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          className="text-black"
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
        className="text-black min-h-[7rem] px-1"
        required
      />
      <div className="[&>*]:rounded-[inherit] [&>input]:px-1">
        <input
          type="submit"
          value="Send"
          className="border  border-white w-16 h-7 mt-5"
        />
      </div>

      {/* <ButtonClient
        text="Send"
        className="border border-white self-start py-0.5 px-2 "
        onClick={sendEmail}
      /> */}
    </form>
  );
};

export default Contact;
