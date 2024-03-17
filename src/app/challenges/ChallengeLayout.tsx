import React from "react";

type ChallengeLayoutProps = {
  title: string;
  children?: React.ReactNode;
};
export const ChallengeLayout: React.FC<ChallengeLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <div className="layout">
      <div className="title-wrapper">
        <div className="title">{title}</div>
        <div className="underline" style={{ opacity: 0.7, width: "70%" }} />
        <div className="underline" style={{ opacity: 0.5, width: "60%" }} />
        <div className="underline" style={{ opacity: 0.3, width: "40%" }} />
      </div>
      {children}
      <style jsx>
        {`
          .layout {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            flex: 1;
          }

          .title {
            font-size: 50px;
            font-family: Verdana, sans-serif;
          }
          .underline {
            display: flex;
            justify-content: center;
            height: 10px;
            background-color: blue;
            border-radius: 25px;
          }

          .title-wrapper {
            display: flex;
            padding: 20px;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 15px;
          }
        `}
      </style>
    </div>
  );
};
