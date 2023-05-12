"use client";

import Image from "next/image";
import Button from "../app/components/Button";
import { forwardRef, useImperativeHandle, useState } from "react";

import { NotiType } from "@/app/types/types";

interface props {
  idx: number;
  isSuccessful: NotiType;
  removeNotification: (idx: number) => void;
}

const Notification = ({ idx, isSuccessful, removeNotification }: props) => {
  function isSuccess() {
    if (isSuccessful === NotiType.SUCCESS) return true;
    return false;
  }
  return (
    <div className="overflow-hidden fixed right-0 h-10 w-36 md:w-52 rounded-lg [&>*]:rounded-lg ">
      <div
        className={`flex items-center justify-between h-[91%] bg-green-100 px-3 text-green-600 font-mono z-10`}
      >
        <p className="">Email Sent</p>
        <Button
          href=""
          onClick={(e: any) => {
            e.preventDefault();
          }}
        >
          <Image
            src="/x_nocircle.svg"
            alt="close toast"
            width={16}
            height={16}
            onClick={() => removeNotification(idx)}
          />
        </Button>
      </div>
      <div className="animate-toast relative bg-green-600 h-[100%] -translate-y-[70%] -z-10"></div>
    </div>
  );
};

const NotificationWrapper = forwardRef((ref) => {
  const [notifications, setNotifications] = useState(
    new Array<NotiType>(NotiType.SUCCESS)
  );

  useImperativeHandle(ref, () => ({ addNotification }));

  function addNotification(notiType: NotiType): void {
    let newState = [...notifications];
    newState.push(notiType);
    setNotifications(newState);
  }

  function removeNotification(idx: number): void {
    let newState = [...notifications];
    newState.splice(idx);
    setNotifications(newState);
  }

  return (
    <div className="fixed border border-black right-0 flex flex-col space-y-2">
      {notifications.map((el, i) => (
        <Notification
          idx={i}
          isSuccessful={el}
          removeNotification={removeNotification}
        />
      ))}
    </div>
  );
});

export default NotificationWrapper;
