import { ShopItem } from "./components/ShopItem";
import styles from "./App.module.css";

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

  return (
    <>
      <div className={styles['background-blue']}></div>
      <div className={styles['background-white']}></div>
      <div className={styles['content']}>
        <div className={styles['item-image']}></div>
        <div className={styles['window']}>
          <ShopItem item={item} />
        </div>
      </div>
    </>
  );
}

export default App;
