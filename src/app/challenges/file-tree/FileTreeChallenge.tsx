"use client";

import React, { useState } from "react";

type NodeType = {
  name: string;
  children?: NodeType[];
};

const files: NodeType = {
  name: "files",
  children: [
    {
      name: "src",
      children: [
        {
          name: "challenges",
          children: [
            {
              name: "FileTreeChallenge.tsx",
            },
            {
              name: "queue",
              children: [{ name: "GroceryQueueChallenge.tsx" }],
            },
          ],
        },
      ],
    },
    {
      name: "components",
      children: [{ name: "Bubble.tsx" }, { name: "Loading.tsx" }],
    },
    { name: "page.tsx" },
  ],
};

export const FileTreeChallenge = () => {
  const Node = ({ name, children, depth }: NodeType & { depth: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div
        style={{
          marginLeft: `${20 * depth}px`,
        }}
      >
        <button
          className={children ? "" : "without-children"}
          onClick={() => setIsExpanded((expand) => !expand)}
        >{`${children ? (!isExpanded ? " + " : " - ") : ""}${name}`}</button>
        {isExpanded
          ? children?.map((node) => (
              <Node
                name={node.name}
                children={node.children}
                depth={depth + 1}
              />
            ))
          : null}
        <style jsx>
          {`
            button {
              color: none;
            }
            .without-children {
              background: transparent;
              border: none;
            }
          `}
        </style>
      </div>
    );
  };

  return (
    <div className="file-tree-layout">
      <div className="file-tree-container">
        <div className="file-wrapper">
          {files.children?.map((file) => (
            <Node name={file.name} children={file.children} depth={0} />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .file-tree-layout {
            display: flex;
            justify-content: center;
          }
          .file-tree-container {
            width: 50%;
          }
          .file-wrapper {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};
