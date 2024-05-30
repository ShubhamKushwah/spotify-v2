import classNames from "classnames";

// Components
import BentoCard from "./BentoCard";

// Styles
import styles from "./index.module.scss";

export default function Bento() {
  return (
    <div
      className={classNames(
        "bg-cream px-3 py-5 h-full overflow-auto",
        styles.bento
      )}
    >
      <div className={styles.imageTile}>
        <p className={styles.title}>Introduction</p>
        <div className={styles.fade} />
      </div>
      <BentoCard className="mt-3" icon="💾" title="Challenge Dataset" />
      <div className="flex mt-3">
        <BentoCard className="mr-3" icon="🎵" title="Background" size="small" />
        <BentoCard icon="💾" title="Dataset" size="small" />
      </div>
      <BentoCard
        className="mt-3"
        icon="🚀"
        title="Submission Format"
        size="small"
      />
      <div className="flex mt-3">
        <BentoCard className="mr-3" icon="🎧" title="Task" size="small" />
        <BentoCard icon="🖊" title="Evaluation" size="small" />
      </div>
      <BentoCard className="mt-3" icon="📜" title="Rules" />
    </div>
  );
}
