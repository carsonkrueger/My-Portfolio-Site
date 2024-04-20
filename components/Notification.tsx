"use client";

import Image from "next/image";
import Button from "../app/components/Button";

import { NotiType } from "@/app/types/types";
import { useEffect, useState } from "react";

interface props {
  show: boolean;
  isSuccessful: NotiType;
  removeNotification: () => void;
}

const Notification = ({ show, isSuccessful, removeNotification }: props) => {
  useEffect(() => {
    const timeout = setTimeout(removeNotification, 8000);

    return () => clearTimeout(timeout);
  }, [show, isSuccessful]);

  function isSuccess() {
    if (isSuccessful === NotiType.SUCCESS) return true;
    return false;
  }

  return (
    <div
      className={`${
        show ? "" : "hidden"
      } overflow-hidden right-0 h-10 w-36 md:w-52 rounded-lg [&>*]:rounded-lg `}
    >
      <div
        className={`flex items-center justify-between h-[91%] ${
          isSuccess()
            ? "bg-green-100 px-3 text-green-600"
            : "bg-red-100 px-3 text-red-600"
        } font-mono z-10`}
      >
        <p>{isSuccess() ? "Email Sent" : "Error"}</p>
        <Button
          disabled={false}
          className="bg-white rounded-[50%]"
          href=""
          onClick={(e: any) => {
            e.preventDefault();
          }}
        >
          <Image
            className="[svg>path]:fill-primary"
            src="/x_nocircle.svg"
            alt="close toast"
            width={16}
            height={16}
            onClick={removeNotification}
          />
        </Button>
      </div>
      <div
        className={`animate-toast relative ${
          isSuccess() ? "bg-green-600" : "bg-red-600"
        }  h-[100%] bottom-3 -z-10`}
      ></div>
    </div>
  );
};

export default Notification;
