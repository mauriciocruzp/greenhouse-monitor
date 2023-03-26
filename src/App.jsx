import { ref, onValue } from "firebase/database";
import { useEffect, useState } from 'react';
import database from "./api/firebase";
import HumidityScreen from "./containers/HumidityScreen/HumidityScreen";
import PressureScreen from "./containers/PressureScreen/PressureScreen";
import TemperatureScreen from "./containers/TemperatureScreen/TemperatureScreen";

function App() {
  const [data, setData] = useState([]);

  const espDataRef = ref(database, 'test');
  useEffect(() => {
    onValue(espDataRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  }, []);
  console.log(data);
  return (
    <div className="container mx-auto">
      <div className="w-auto grid lg:grid-cols-12 sm:grid-cols-4 gap-x-4">
        <div className="w-auto h-full lg:col-span-4 lg:col-start-5 sm:col-span-4 ">
          <div className="w-auto h-full grid grid-cols-4 gap-4">
            <div className="col-span-4">
              <TemperatureScreen temperature={data.temperature} />
            </div>
            <div className="col-span-2">
              <HumidityScreen humidity={data.humidity} />
            </div>
            <div className="col-span-2">
              <PressureScreen pressure={data.pressure} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
