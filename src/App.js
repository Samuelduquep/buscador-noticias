import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import { useState, useEffect } from "react";
function App() {

  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
   const consultarAPI = async () => {
    const url = `https://newsapi.org/v2/top-headlines?language=es&category=${categoria}&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    setNoticias(resultado.articles)
   }
   consultarAPI()
  }, [categoria])
  
  return (
  <>
    <Header
    titulo = 'Buscador'
    />
    <div className="container white">
        <Formulario
          setCategoria={setCategoria}
          />
          <ListadoNoticias
          noticias = {noticias}
          />
     
    </div>

  </>
  );
}

export default App;
