"use client";

import { ChallengeLayout } from "../ChallengeLayout";
import { DrawOnClick } from "./DrawOnClick";

const DrawClickPage = () => {
  return (
    <div>
      <ChallengeLayout title="Draw On click Challenge">
        <DrawOnClick />
      </ChallengeLayout>
    </div>
  );
};

export default DrawClickPage;
