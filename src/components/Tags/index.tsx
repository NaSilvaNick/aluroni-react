import styles from "./Tags.module.scss";
import classNames from "classnames";
import IPrato from "types/IPrato";

export default function Tags({
  category,
  size,
  serving,
  price
}: IPrato) {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags__tipo]: true,
          [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__porcao}>
        {size}g
      </div>
      <div className={styles.tags__qtdpessoas}>
        {serving} pessoa{serving > 1 ? "s" : ""}
      </div>
      <div className={styles.tags__valor}>
        R$ {price.toFixed(2)}
      </div>
    </div>
  );
}