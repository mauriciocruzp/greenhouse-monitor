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
    <div className="w-96">
      <div className="h-full w-full">
        <div className="mx-8 h-full flex items-center justify-center flex-col">
          <TemperatureScreen temperature={data.temperature} />
          <div className="mt-4 w-full flex flex-row space-x-2">
            <HumidityScreen humidity={data.humidity} />
            <PressureScreen pressure={data.pressure} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
