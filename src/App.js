import './App.css';
import { Col } from 'antd';
import Searched from './components/Searcher';
import CardsList from './components/CardsList';

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searched />
      </Col>
      <CardsList />    
    </div>
  );
}

export default App;
