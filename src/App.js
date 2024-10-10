import './App.css';
import { RouterProvider } from 'react-router-dom';
import { root } from './rootRouter/Root';

function App() {
  return <RouterProvider router={root} />;
}

export default App;
