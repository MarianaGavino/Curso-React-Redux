import './App.css';
import { Col, Spin } from 'antd';
import Searched from './components/Searcher';
import CardsList from './components/CardsList';
import { useEffect } from 'react';
import { getElements } from './api';
import { getElementsWithDetails, setLoading } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  //Permite extraer la data del estado
  // será llamado cada vez que se haga dispatch de una acción
  const elements = useSelector((state) => state.get('elements')).toJS();
  const loading = useSelector((state) => state.get('loading'));
  //Dispara acciones
  const dispatch = useDispatch();
 
  useEffect(() => {
    const fecthElements = async() => {
      dispatch(setLoading(true));
      const elementsRes = await getElements(); 
        dispatch(getElementsWithDetails(elementsRes));
        dispatch(setLoading(false));
    };

    fecthElements();
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