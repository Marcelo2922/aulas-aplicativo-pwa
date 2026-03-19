import "./App.css";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
import ListaProdutos from "./paginas/ListaProdutos/ListaProdutos";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const roteador = createBrowserRouter([
 {
   path: '',
   element: <PaginaInicial />,
 },

 {
   path: 'lista-produtos',
   element: <ListaProdutos />,
 },

 {
  path: "*",
  element: <h3>Página não encontrada</h3>
 }
]);


function App() {
  return (
    <>
      <Cabecalho />
       <RouterProvider router={roteador} />
      <Rodape /> 
    </>
  );
}

export default App;