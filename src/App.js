
import Home from './components/Home';
import NotFound from './components/NotFound';
import TodoFeature from './features/Todos';
import { Routes, Route, NavLink } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      Header
      <p><NavLink to="/todos">Todos</NavLink></p>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/todos/*' element={<TodoFeature />}></Route>

      </Routes>
      Footer
    </div>
  );
}

export default App;
