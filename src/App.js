import { useEffect, useState } from 'react';
import './App.css';
import Table from './table';

function App() {
  const[data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Table data={data}></Table>
      </header>
    </div>
  );
}

export default App;
