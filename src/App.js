import './App.css';
import Mensaje from './Mensaje';


function App() {
  return (
    <div className="App">
      <Mensaje color='green' message='Estamos trabajando'/>
      <Mensaje color='blue' message='En un curso'/>
      <Mensaje color='yellow' message='de react'/>
    </div>
  );
}

export default App;
