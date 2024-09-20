import WarmCareUI from './components/WarmCareUI'
import ChildAppUI from './components/ChildAppUI'
import App from './App.tsx'
import {
  createHashRouter,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
    {
    path: "/child",
    element: <ChildAppUI />,
  },
    {
    path: "/parent",
    element: <WarmCareUI />,
  },
]);

export default router