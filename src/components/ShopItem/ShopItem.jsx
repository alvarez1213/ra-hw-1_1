import styles from "./shopItem.module.css";

export const ShopItem = (props) => {
  const {
    brand,
    title,
    description,
    descriptionFull,
    price,
    currency
  } = props.item;

  return (
    <div className={styles["main-content"]}>
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className={styles["description"]}>{descriptionFull}</div>
      <div className={styles["highlight-window"]}>
        <div className={styles["highlight-window"]}></div>
      </div>
      <div className={styles["divider"]}></div>
      <div className={styles["purchase-info"]}>
        <div className={styles["price"]}>{currency}{price}</div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};
