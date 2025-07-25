import './styles/index.css'
import {useRoutes} from "react-router-dom";
import {routers} from "~/app/routers";

export function App() {
  return useRoutes(routers)
}
