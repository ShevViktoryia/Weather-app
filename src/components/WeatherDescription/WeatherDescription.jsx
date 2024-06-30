import styles from "./WeatherDescription.module.css";

const WeatherDescription = () => {
  return (
    <div className={styles.WeatherDescription}>
      <input type="search" />
      <ul className="cities">
        <li className="city">London</li>
        <li className="city">Gomel</li>
        <li className="city">Grodno</li>
        <li className="city">Brest</li>
      </ul>
      <div className="WetaherDetails">
        <p className="cloudy">
          Cloudy: <span>16%</span>
        </p>
        <p className="cloudy">
          Humidty: <span>16%</span>
        </p>
        <p className="cloudy">
          Wind: <span>8m/h</span>
        </p>
        <p className="cloudy">
          Rain: <span>0mm</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherDescription;
