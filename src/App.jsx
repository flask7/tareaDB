import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Farm from './components/Farm';
import Pools from './components/Pools';
import Lottery from './components/Lottery';
import Nft from './components/Nft';
import Invite from './components/Invite';
import Ifo from './components/Ifo';
import Trad from './components/Trad';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/marketplace",
    element: <Nft />,
  },
  {
    path: "/money",
    element: <Farm />,
  }
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
