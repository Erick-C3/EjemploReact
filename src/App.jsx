import './App.css'
import Tarjeta from './componentes/Tarjeta.jsx'

function App(/* {nombrePokemon} */) {

  /* const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("def nombre");
  const [linkImagen, setLinkImagen] = useState("def img");
 
  useEffect(()=>{
    async function fetchApi() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/"+nombrePokemon);
      let info = "def info";
      console.log("fetch");
      if(res.ok){
        info = await res.json();
        setNombre(info.name);
        setLinkImagen(info.sprites.front_default);
      }
    }

    fetchApi();
  }); */

  return (
    <>
      {/* <h1>{nombre}</h1>
      <button onClick={()=>{
        setContador(contador+1);
        setNombre("otro nombre");
      }}>Aumentar</button>
      <img src={linkImagen} alt={linkImagen} />
      <h2>{contador}</h2> */}
      <Tarjeta
        nombrePokemon="ditto"
      />
      <Tarjeta
        nombrePokemon="onix"
      />
      <Tarjeta
        nombrePokemon="pikachu"
      />
    </>
  )
}

export default App
