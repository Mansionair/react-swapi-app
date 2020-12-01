import { useEffect, useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/1/');
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading || !data) return <div>Loading...</div>;

  return (
    <div className='App'>
      <Counter />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
