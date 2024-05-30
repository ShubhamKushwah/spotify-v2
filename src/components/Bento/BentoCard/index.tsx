import classNames from "classnames";

// Styles
import styles from "./index.module.scss";

interface IPropTypes {
  className?: string;
  size?: "default" | "small";
  icon: string;
  title: string;
}

export default function BentoCard({
  className,
  size = "default",
  icon,
  title,
}: IPropTypes) {
  return (
    <div
      className={classNames(
        `flex flex-1 flex-col justify-between bg-cream-dark rounded-2xl`,
        styles.bentoCard,
        styles[size],
        className
      )}
    >
      <p className="text-heading">{icon}</p>
      <p className="text-body">{title}</p>
    </div>
  );
}
