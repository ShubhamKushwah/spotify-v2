import classNames from "classnames";
// import Image from "../../assets/images/listening_music.png";

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
        {/* <div className="rounded-2xl border border-white h-32 overflow-hidden">
          <div
            className="bg-cover h-full w-full"
            style={{ backgroundImage: `url(${Image.src})` }}
          />
        </div> */}
        <div className={styles.fade} />
      </div>
      <div className="mt-3 flex flex-col justify-between bg-cream-dark rounded-2xl p-4 h-52">
        <p>💾</p>
        <p>Challenge Dataset</p>
      </div>
      <div className="flex mt-3">
        <div className="flex-1 flex flex-col justify-between bg-cream-dark rounded-2xl p-4 h-32 mr-3">
          <p>🎵</p>
          <p>Background</p>
        </div>
        <div className="flex-1 flex flex-col justify-between bg-cream-dark rounded-2xl p-4 h-32">
          <p>💾</p>
          <p>Dataset</p>
        </div>
      </div>
      <div className="mt-3 flex flex-col justify-between bg-cream-dark rounded-2xl p-4 h-32">
        <p>🚀</p>
        <p>Submission Format</p>
      </div>
      <div className="flex mt-3">
        <div className="flex-1 flex flex-col justify-between bg-cream-dark rounded-2xl p-4 h-32 mr-3">
          <p>🎧</p>
          <p>Task</p>
        </div>
        <div className="flex-1 flex flex-col justify-between bg-cream-dark rounded-2xl p-4 h-32">
          <p>🖊</p>
          <p>Evaluation</p>
        </div>
      </div>
      <div className="mt-3 flex flex-col justify-between bg-cream-dark rounded-2xl p-4 h-52">
        <p>📜</p>
        <p>Challenge Dataset</p>
      </div>
    </div>
  );
}
