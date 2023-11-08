import './App.css';
import { Col } from 'antd';
import Searched from './components/Searcher';
import CardsList from './components/CardsList';
import { useEffect } from 'react';
import { getElements } from './api';
import { setElements } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  //Permite extraer la data del estado
  // será llamado cada vez que se haga dispatch de una acción
  const elements = useSelector(state => state.elements);
  //Dispara acciones
  const dispatch = useDispatch();
 
  useEffect(() => {
    const fecthElements = async() => {
      const elementsRes = await getElements();
      dispatch(setElements(elementsRes))
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