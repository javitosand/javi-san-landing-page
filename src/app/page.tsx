"use client";

import { useEffect, useState } from "react";
import { Bubble } from "./components/Bubble";
import { Loading } from "./components/Loading";

const Home = () => {
  const messages = [
    { text: "Hi 👋!!!", loadingTime: 500 },
    { text: "I'm Javi.", loadingTime: 500 },
    {
      text: "I've been in the software industry for 7+ years,",
      loadingTime: 1000,
    },
    {
      text: "Despite not having my own website, I'm actively seeking my next challenge.",
      loadingTime: 1500,
    },
    {
      text: (
        <div>
          <div>
            I'm currently working as a Freelancer, but looking for a more stable
            opportunity
          </div>
        </div>
      ),
      loadingTime: 1500,
    },
    {
      text: (
        <div>
          <div>
            If you want to know more about me...
            <br />
            Simply reach out to my LinkedIn
          </div>
          <a href="https://www.linkedin.com/in/javisandmann/">
            Javier Sandmann
          </a>
        </div>
      ),
      loadingTime: 1500,
    },
    {
      text: " Nice to meet you 🙂.",
      loadingTime: 500,
    },
    {
      text: "J.S.",
      loadingTime: 500,
    },
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isRendering, setIsRendering] = useState(false);

  useEffect(() => {
    setIsRendering(true);
    const timeoutId = setTimeout(() => {
      if (currentMessageIndex < messages.length - 1) {
        setCurrentMessageIndex(currentMessageIndex + 1);
      }
    }, messages[currentMessageIndex].loadingTime + 1000);

    return () => clearTimeout(timeoutId);
  }, [currentMessageIndex, messages]);

  return (
    <div className="bubble-container">
      {isRendering
        ? messages.map((message, index) => (
            <Bubble
              key={`a-${index}`}
              dummyId={`${index}`}
              message={message.text}
              show={index <= currentMessageIndex}
              loadingTime={message.loadingTime}
            />
          ))
        : null}
      <style jsx>
        {`
          .bubble-container {
            display: flex;
            flex-direction: column;
            padding: 20px;
            gap: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
