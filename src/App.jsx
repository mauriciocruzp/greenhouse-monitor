import { ref, onValue } from "firebase/database";
import { useEffect, useState } from 'react';
import database from "./api/firebase";

function App() {
  const [data, setData] = useState([]);

  const espDataRef = ref(database, 'test');
  useEffect(() => {
    onValue(espDataRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  },[]);
  console.log(data);
  
}

export default App;
