import { CSSProperties, FunctionComponent } from "react";
import styles from "./Chevron.module.css";
interface ChevronProps {
  style?: CSSProperties;
  pointDirection: "up" | "down" | "left" | "right";
}

const Chevron: FunctionComponent<ChevronProps> = ({
  style,
  pointDirection = "up",
}) => {
  const defaultStyle = {
    borderTop: "solid 3px white",
    borderRight: "solid 3px white",
    borderRadius: "5px",
    width: "30px",
    height: "30px",
  };

  const getStyle = () => {
    switch (pointDirection) {
      case "up":
        return styles.chevronUp;
      case "down":
        return styles.chevronDown;
      case "left":
        return styles.chevronLeft;
      case "right":
        return styles.chevronRight;
    }
  };

  return <div style={style || defaultStyle} className={getStyle()}></div>;
};

export default Chevron;
