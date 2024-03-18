"use client";

import React, { useState } from "react";

type NodeType = {
  name: string;
  elements?: NodeType[];
};

const files: NodeType = {
  name: "files",
  elements: [
    {
      name: "src",
      elements: [
        {
          name: "challenges",
          elements: [
            {
              name: "FileTreeChallenge.tsx",
            },
            {
              name: "queue",
              elements: [{ name: "GroceryQueueChallenge.tsx" }],
            },
          ],
        },
      ],
    },
    {
      name: "components",
      elements: [{ name: "Bubble.tsx" }, { name: "Loading.tsx" }],
    },
    { name: "page.tsx" },
  ],
};

export const FileTreeChallenge = () => {
  const Node = ({ name, elements, depth }: NodeType & { depth: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div
        style={{
          marginLeft: `${20 * depth}px`,
        }}
      >
        <button
          className={elements ? "" : "without-children"}
          onClick={() => setIsExpanded((expand) => !expand)}
        >{`${elements ? (!isExpanded ? " + " : " - ") : ""}${name}`}</button>
        {isExpanded
          ? elements?.map((node) => (
              <Node
                key={`node-${node.name}`}
                name={node.name}
                elements={node.elements}
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
          {files.elements?.map((file) => (
            <Node
              key={`file-${file.name}`}
              name={file.name}
              elements={file.elements}
              depth={0}
            />
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
