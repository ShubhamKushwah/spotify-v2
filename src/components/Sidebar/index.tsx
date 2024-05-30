import classNames from "classnames";

// Assets
import Logo from "../../assets/icons/logo.svg";
import TrophyIcon from "../../assets/icons/trophy.svg";
import ChatIcon from "../../assets/icons/chat.svg";
import GraphIcon from "../../assets/icons/graph.svg";
import PersonIcon from "../../assets/icons/person.svg";

// Styles
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
          <TrophyIcon />
        </div>
        <div className={styles.item}>
          <ChatIcon />
        </div>
        <div className={styles.item}>
          <GraphIcon />
        </div>
      </div>
      <div>
        <PersonIcon />
      </div>
    </div>
  );
}
