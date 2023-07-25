import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import database from "./api/firebase";
import HumidityScreen from "./containers/HumidityScreen/HumidityScreen";
import PressureScreen from "./containers/PressureScreen/PressureScreen";
import TemperatureScreen from "./containers/TemperatureScreen/TemperatureScreen";
import Logo from "./assets/logo.svg";
import AltitudeScreen from "./containers/AltitudeScreen/AltitudeScreen";

function App() {
  const [data, setData] = useState([]);

  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleClick = () => {
    setIsHighlighted(true);
    setTimeout(() => setIsHighlighted(false), 500);
  };

  const highlightClass = isHighlighted
    ? "border border-primary-purple transition duration-600 ease-in-out"
    : "border border-primary-dark";

  const espDataRef = ref(database, "test");
  useEffect(() => {
    onValue(espDataRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
      handleClick();
    });
  }, []);
  console.log(data);
  return (
    <div className="container mx-auto">
      <div className="w-auto grid lg:grid-cols-12 sm:grid-cols-4 gap-x-4">
        <div className="w-auto h-full lg:col-span-4 lg:col-start-5 sm:col-span-4">
          <div className="w-auto h-full grid grid-cols-4 gap-4">
            <div className="col-span-4 mb-5">
              <img className="mx-auto" src={Logo} alt="" />
            </div>
            <div className={`col-span-4 ${highlightClass} rounded-3xl`}>
              <TemperatureScreen temperature={data.temperature} />
            </div>
            <div className={`col-span-2 ${highlightClass} rounded-3xl`}>
              <HumidityScreen humidity={data.humidity} />
            </div>
            <div className={`col-span-2 ${highlightClass} rounded-3xl`}>
              <PressureScreen pressure={data.pressure} />
            </div>
            <div className={`col-span-4 ${highlightClass} rounded-3xl`}>
              <AltitudeScreen altitude={data.altitude} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
