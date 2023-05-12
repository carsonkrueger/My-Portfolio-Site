"use client";

import Image from "next/image";
import Button from "../app/components/Button";
import { useState } from "react";
import { ensure } from "@/utils/ensure";

enum NotiType {
  SUCCESS,
  FAILURE,
}

interface props {
  idx: number;
  isSuccessful: boolean;
  removeNotification: (idx: number) => void;
}

function Notification({ idx, isSuccessful, removeNotification }: props) {
  return (
    <div className="overflow-hidden fixed right-0 h-10 w-36 md:w-52 rounded-lg [&>*]:rounded-lg ">
      <div
        className={`flex relative items-center justify-between h-[91%] bg-green-100 px-3 text-green-600 font-mono z-10`}
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
}

export default function NotificationWrapper() {
  const [notifications, setNotifications] = useState(
    new Array<NotiType>(NotiType.SUCCESS)
  );

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
    <div className="fixed right-0 flex flex-col space-y-2">
      {notifications.map((el, i) => {
        <Notification
          idx={i}
          isSuccessful={el}
          removeNotification={removeNotification}
        />;
      })}
    </div>
  );
}
