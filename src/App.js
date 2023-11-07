import './App.css';
import { Col } from 'antd';
import Searched from './components/Searcher';
import CardsList from './components/CardsList';
import { useEffect, useState } from 'react';
import { getElements } from './api';

function App() {

  const [elements, setElemets] = useState([]);

  useEffect(() => {
    const fecthElements = async() => {
      const elementsRes = await getElements();
      setElemets(elementsRes)
    };

    fecthElements();
  }, []);
  return (
    <div className="App">

      <Col span={8} offset={8}>
        <Searched />
      </Col>
      <CardsList elements={elements}/>    
    </div>
  );
}

export default App;
