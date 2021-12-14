import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductManagement from './page/ProductManagement/ProductManagement';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={ProductManagement} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
