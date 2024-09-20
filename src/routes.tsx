import WarmCareUI from './components/WarmCareUI'
import ChildAppUI from './components/ChildAppUI'
import App from './App.tsx'
import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/bond-dev/",
    element: <App />,
  },
    {
    path: "/bond-dev/parent/",
    element: <ChildAppUI />,
  },
    {
    path: "/bond-dev/child/",
    element: <WarmCareUI />,
  },
]);

export default router