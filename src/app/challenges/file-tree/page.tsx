"use client";

import { ChallengeLayout } from "../ChallengeLayout";
import { FileTreeChallenge } from "./FileTreeChallenge";

const FileTree = () => {
  return (
    <div>
      <ChallengeLayout title="File Recursive Tree Display Challenge">
        <FileTreeChallenge />
      </ChallengeLayout>
    </div>
  );
};

export default FileTree;
