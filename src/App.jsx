import { ref, onValue } from "firebase/database";
import { useEffect, useState } from 'react';
import database from "./api/firebase";
import TemperatureScreen from "./containers/TemperatureScreen/TemperatureScreen";

function App() {
  const [data, setData] = useState([]);

  const espDataRef = ref(database, 'test');
  useEffect(() => {
    onValue(espDataRef, (snapshot) => {
      const data = snapshot.val();
      setData(data.temperature);
    });
  }, []);
  console.log(data);
  return (
    <div className="h-full">
      <div className="mx-8 h-full flex items-center">
        <TemperatureScreen temperature={data} />
      </div>
    </div>
  )
}

export default App;
