"use client";

import React, { useEffect, useState } from "react";
import cx from "classnames";
import { Loading } from "./Loading";

export const Bubble = ({
  dummyId,
  message,
  show,
  loadingTime,
}: {
  dummyId: string;
  message: React.ReactNode;
  loadingTime: number;
  show: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dummiDivElement, setDummiDivElement] = useState({
    width: "50px",
    height: "20px",
  });

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setIsLoading(false);
      }, loadingTime);
    }

    const dummyDiv = document?.getElementById(`Dummy-${dummyId}`);
    const dummyDivWidth = `${dummyDiv?.offsetWidth}px`;
    const dummyDivHeight = `${dummyDiv?.offsetHeight}px`;
    setDummiDivElement({ height: dummyDivHeight, width: dummyDivWidth });

    return () => {};
  }, [show]);

  return (
    <div
      className={cx("message", isLoading ? "message-loading" : "", "showas")}
    >
      <div id={`Dummy-${dummyId}`}>{message}</div>
      {isLoading ? <Loading /> : message}

      <style jsx>
        {`
          .message {
            background: rgba(206, 206, 206, 0.5);
            font-size: 32px;
            align-items: center;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            overflow: hidden;
            display: inline-block;
            padding: 8px 0 8px 14px;
            border-radius: 20px;
            vertical-align: middle;
            width: ${dummiDivElement.width};
            height: ${dummiDivElement.height};
            white-space: nowrap;
            color: black;
            transition: width 0.5s, color 1.5s, height 0.2s;
          }
          .message-loading {
            width: 60px;
            height: 40px;
            border-radius: 20px 20px 20px 8px;
            color: transparent;
          }

          #Dummy-${dummyId} {
            position: absolute;
            padding: 8px 0 8px 14px;
            visibility: hidden;
            height: auto;
            width: auto;
            white-space: nowrap;
          }

          .showas {
            display: ${show ? "flex" : "none"};
          }
        `}
      </style>
    </div>
  );
};
