import classNames from "classnames";
import { useState } from "react";

// Components
import BentoCard from "./BentoCard";

// Assets
import IntroductionImage from "@/assets/images/introduction.png";
import BackgroundImage from "@/assets/images/background.png";
import ChallengeImage from "@/assets/images/challenge_dataset.png";
import DatasetImage from "@/assets/images/dataset.png";
import EvaluationImage from "@/assets/images/evaluation.png";
import SubmissionImage from "@/assets/images/submission.png";
import TaskImage from "@/assets/images/task.png";

// Styles
import styles from "./index.module.scss";

export default function Bento({ selected, setSelected }: any) {
  return (
    <div
      className={classNames(
        "bg-cream px-3 py-5 h-full overflow-auto",
        styles.bento
      )}
    >
      <BentoCard
        image={IntroductionImage.src}
        size="small"
        onClick={() => setSelected(0)}
        highlight={selected === 0}
        className="mt-3"
        icon="🕵️"
        title="Introduction"
      />
      <BentoCard
        image={ChallengeImage.src}
        onClick={() => setSelected(1)}
        highlight={selected === 1}
        className="mt-3"
        icon="💾"
        title="Challenge Dataset"
      />
      <div className="flex mt-3">
        <BentoCard
          image={BackgroundImage.src}
          onClick={() => setSelected(2)}
          highlight={selected === 2}
          className="mr-3"
          icon="🎵"
          title="Background"
          size="small"
        />
        <BentoCard
          image={DatasetImage.src}
          onClick={() => setSelected(3)}
          highlight={selected === 3}
          icon="💾"
          title="Dataset"
          size="small"
        />
      </div>
      <BentoCard
        image={SubmissionImage.src}
        onClick={() => setSelected(4)}
        highlight={selected === 4}
        className="mt-3"
        icon="🚀"
        title="Submission Format"
        size="small"
      />
      <div className="flex mt-3">
        <BentoCard
          image={TaskImage.src}
          onClick={() => setSelected(5)}
          highlight={selected === 5}
          className="mr-3"
          icon="🎧"
          title="Task"
          size="small"
        />
        <BentoCard
          image={EvaluationImage.src}
          onClick={() => setSelected(6)}
          highlight={selected === 6}
          icon="🖊"
          title="Evaluation"
          size="small"
        />
      </div>
      <BentoCard
        image={TaskImage.src}
        onClick={() => setSelected(7)}
        highlight={selected === 7}
        className="mt-3"
        icon="📜"
        title="Rules"
      />
      <div className="flex mt-3">
        <BentoCard
          image={ChallengeImage.src}
          onClick={() => setSelected(8)}
          highlight={selected === 8}
          className="mr-3"
          icon="📄"
          title="Citation"
          size="small"
        />
        <BentoCard
          image={IntroductionImage.src}
          onClick={() => setSelected(9)}
          highlight={selected === 9}
          icon="🤙"
          title="Contact"
          size="small"
        />
      </div>
    </div>
  );
}
