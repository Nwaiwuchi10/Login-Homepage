import { BrowserRouter, Route } from 'react-router-dom';
import Head from './components/Nchrys/Head';
import Login from './components/Nchrys/Login';




function App() {
  const addForm = (task) => {
    console.log (task) 
}






  return (

    <BrowserRouter>

    <div className="App">
      <switch>

    <Route path = '/' component={() => < Login onAdd ={addForm} />}  exact/>
    
    <Route path = '/Head'  component={Head}  exact/>
    
    </switch>   

    
   

    </div>
    </BrowserRouter>
  );
}

export default App;
