import Logo from "../../assets/icons/logo.svg";
import Trophy from "../../assets/icons/trophy.svg";
import Chat from "../../assets/icons/chat.svg";
import Graph from "../../assets/icons/graph.svg";
import Person from "../../assets/icons/person.svg";
import classNames from "classnames";

import styles from "./index.module.scss";

export default function Sidebar() {
  return (
    <div
      className={classNames(
        "h-full bg-black flex flex-col items-center pt-6 pb-7",
        styles.sidebar
      )}
    >
      <div className="flex-1">
        <div className={styles.item}>
          <Logo />
        </div>
        <div className={styles.item}>
          <Trophy />
        </div>
        <div className={styles.item}>
          <Chat />
        </div>
        <div className={styles.item}>
          <Graph />
        </div>
      </div>
      <div>
        <Person />
      </div>
    </div>
  );
}
