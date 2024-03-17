"use client";

import { useEffect, useState } from "react";

const itemsInQueueTemp: number[][] = [
  [1, 2, 3],
  [10, 4, 3],
  [5, 6],
  [6, 1, 5],
  [6, 1, 2],
];

export const GroceryQueueChallenge = () => {
  const [inputItem, setInputItem] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputItem(e.target.value as unknown as number);
  };
  const [itemsInQueue, setItemsInQueue] = useState(itemsInQueueTemp);

  useEffect(() => {
    const interval = setInterval(() => {
      setItemsInQueue((items) => {
        const newArray = items.map((itemArray) => {
          const [first, ...rest] = itemArray;

          return first <= 1 || isNaN(first) ? [...rest] : [first - 1, ...rest];
        });
        return newArray;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleCheckout = () => {
    let smallestLine: number[] = [];
    let smallQueueSum = 0;
    let firstRun = true;
    // check smallest queue
    for (const itemQueue of itemsInQueue) {
      const queueSum = itemQueue.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

      if (firstRun || queueSum < smallQueueSum) {
        firstRun = false;
        smallQueueSum = queueSum;
        smallestLine = itemQueue;
      }
    }

    setItemsInQueue((prevQueue) =>
      prevQueue.map((line) =>
        line === smallestLine ? [...line, Number(inputItem)] : line
      )
    );
  };

  const renderQueueLine = (items: number[], indexLine: number) => {
    return (
      <div key={`queueline-${indexLine}`} className="queue-line">
        <div className="cashier" />
        {items.map((item, index) => (
          <div key={`client-${indexLine}-${index}`} className="client">
            {item}
          </div>
        ))}

        <style jsx>
          {`
            .cashier {
              border: 2px solid black;
              border-radius: 15px;
              width: 100px;
              height: 100px;
            }
            .client {
              border: 2px solid black;
              border-radius: 50%;
              width: 100px;
              height: 100px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .queue-line {
              display: flex;
              flex-direction: column;
              gap: 20px;
            }
          `}
        </style>
      </div>
    );
  };

  return (
    <div className="queue-container">
      <div className="input-wrapper">
        <input
          type="number"
          name="inputItem"
          min={0}
          value={inputItem}
          className="item-input"
          onChange={handleInputChange}
        />
        <button onClick={handleCheckout}> Checkout</button>
      </div>
      <div className="cashier-container">
        {itemsInQueue.map((items, index) => renderQueueLine(items, index))}
      </div>

      <style jsx>
        {`
          .cashier-container {
            display: flex;
            justify-content: center;
            width: 100%;
            gap: 40px;
          }
          .queue-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 20px;
          }
          .input-wrapper {
            display: flex;
            gap: 20px;
          }
          .item-input {
            width: 200px;
            height: 20px;
            border: 2px solid black;
            border-radius: 5px;
          }
        `}
      </style>
    </div>
  );
};
