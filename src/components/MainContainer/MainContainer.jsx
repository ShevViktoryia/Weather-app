import WeatherDescription from "../WeatherDescription/WeatherDescription";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import styles from "./MainContainer.module.css";

const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>Wather App</h1>
      <div className={styles.wetherDataContainer}>
        <WeatherForecast />
        <WeatherDescription />
      </div>
    </div>
  );
};

export default MainContainer;
