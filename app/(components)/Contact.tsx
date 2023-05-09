"use client";

const Contact = () => {
  return (
    <form className="flex flex-col text-white font-mono ">
      <label htmlFor="name">Name</label>
      <input type="text" />
      <label htmlFor="email">Email</label>
      <input type="text" />
      <label htmlFor="message">Message</label>
      <input type="text" />
      <input type="submit" />
    </form>
  );
};

export default Contact;
