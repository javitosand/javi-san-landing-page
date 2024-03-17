"use client";

import { GroceryQueueChallenge } from "./GroceryQueueChallenge";
import { ChallengeLayout } from "../ChallengeLayout";

const Queue = () => {
  return (
    <div>
      <ChallengeLayout title="Grocery Queue Challenge">
        <GroceryQueueChallenge />
      </ChallengeLayout>
    </div>
  );
};

export default Queue;
