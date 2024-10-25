import { createBrowserRouter } from 'react-router-dom';
import { Home } from './page/Home';
import { Details } from './page/Details';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/character/:id',
        element: <Details />,
      },
    ],
  },
]);

export default router;
