
import './App.css';

import { useEffect } from 'react';
import useApi from './hooks/useApi';
import List from './components/List';
import Formulario from './components/Formulario';
function App() {
  const { data, isLoading, error } = useApi("http://localhost:8080/clientController/clientes");

  useEffect(() => {
    // Realiza acciones con los datos recibidos
    if (data) {
      // console.log(data);
    } else if (isLoading) {
      console.log("Cargando...");
    }
    else if (error) {
      console.log(error);
    }

  }, [data]);
  return (
    <>
      <Formulario>

      </Formulario>

      <List data={data}>
      </List>
    </>


  );
}

export default App;
