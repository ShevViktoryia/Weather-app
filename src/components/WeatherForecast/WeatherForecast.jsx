import styles from "./WeatherForecast.module.css";
const WeatherForecast = () => {
  return (
    <div className={styles.WeatherForecast}>
      <p className={styles.degree}>20</p>
      <p className={styles.city}>Minsk</p>
      <p className={styles.forecast}>Rainy</p>
    </div>
  );
};

export default WeatherForecast;
