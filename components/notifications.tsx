"use client";

import { useReducer, useState } from "react";

interface props {
  show: boolean;
}

enum NotiType {
  SUCCESS,
  FAILURE,
}

export function NotificationWrapper() {
  const [notifications, dispatch] = useReducer(reducer, Array<NotiType>());
  function reducer(notiType: NotiType) {
    switch (notiType) {
      case NotiType.SUCCESS:
        break;
      case NotiType.FAILURE:
        break;
    }
  }

  return <div className="absolute right-0"></div>;
}

export function NotifySuccess({ show }: props) {
  return (
    <div
      className={`fixed ${
        show ? "flex" : "hidden"
      } items-center justify-between h-10 w-36 md:w-48 bg-green-600 mt-5 mr-5 px-3 rounded-md right-0 text-white font-mono`}
    >
      <p className="">Email Sent</p>
      <p>x</p>
    </div>
  );
}

export function NotifyFailure({ show }: props) {
  return (
    <div
      className={`fixed ${
        show ? "flex" : "hidden"
      } items-center justify-between h-10 w-36 md:w-48 bg-red-600 mt-5 mr-5 px-3 rounded-md right-0 text-white font-mono`}
    >
      <p className="">Error</p>
      <p>x</p>
    </div>
  );
}
