import classNames from "classnames";

// Styles
import styles from "./index.module.scss";

interface IPropTypes {
  className?: string;
  size?: "default" | "small";
  icon: string;
  title: string;
  highlight: boolean;
  image: string;
  onClick: () => void;
}

export default function BentoCard({
  className,
  highlight,
  onClick,
  size = "default",
  icon,
  image,
  title,
}: IPropTypes) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        `flex flex-1 flex-col justify-between bg-cream-dark rounded-2xl`,
        styles.bentoCard,
        styles[size],
        { [styles.highlight]: highlight },
        className
      )}
    >
      <p className={classNames("text-heading", styles.icon)}>{icon}</p>
      <p className={classNames("text-body", styles.title)}>{title}</p>
      <div className={styles.fade} />
      <div
        className={styles.image}
        style={{ backgroundImage: `url('${image}')` }}
      />
    </button>
  );
}
