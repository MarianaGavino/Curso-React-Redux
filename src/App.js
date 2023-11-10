import './App.css';
import { Col, Spin } from 'antd';
import Searched from './components/Searcher';
import CardsList from './components/CardsList';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchElementsWithDetails } from './slices/dataSlice';

function App() {

  //Permite extraer la data del estado. Será llamado cada vez que se haga dispatch de una acción
  const elements = useSelector((state) => 
    state.data.elements, shallowEqual  //Evita re-renders inecesarios, cuando solo obtenemos un valor.
  );
  const loading = useSelector((state) => state.ui.loading);
  //Dispara acciones
  const dispatch = useDispatch();
 
    useEffect(() => {
      dispatch(fetchElementsWithDetails());
    }, [dispatch]);

  return (
    <div className="App">

      <Col span={8} offset={8}>
        <Searched />
      </Col>
      {loading ? <Col offset={12}>
        <Spin spinning size='large' />
      </Col> : <CardsList elements={elements}/>}
          
    </div>
  );
}



export default App;