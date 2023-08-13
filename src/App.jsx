/* eslint-disable react/jsx-key */
import {useState} from 'react'
import './App.css'
import PropTypes from 'prop-types';
function App() {
  const [librosDisponibles,setLibrosDisponibles] = useState(0)
  const [librosFavoritos,setLibrosFavoritos] = useState(0)
  /**
   
    # TO DO

    - Lista de libros disponibles
    - Lista de favoritos
        ·(un corazon gris para mostrar que no y otro rosa para mostrar que si)
        ·(lista a la derecha para mostrar los que estan en la lista con boton para quitar)
    - Filtro de libros segun Género (un contador para indicar los libros que hay en la lista)
    - En el state de el navegador se guardaran todos los ISBN que estan en favoritos
    - Filtrado por numero de paginas 
   
   */

  const libros = [
    {titulo:"titulo1",img:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg"},
    {titulo:"titulo2",img:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg"},
    {titulo:"titulo3",img:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg"},
    {titulo:"titulo4",img:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg"},
    {titulo:"titulo5",img:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422626176i/24762432.jpg"},
    {titulo:"titulo6",img:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg"},
    {titulo:"titulo7",img:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653311117i/6691227.jpg"}
  ]

  const LibroComponente = ({ libro }) => {
    //317x475
    return <div style={{height:"240px",width:"160px",backgroundImage:"url("+libro.img+")",backgroundSize:"cover",backgroundPosition:"center",margin:"5px"}} key={libro.titulo}>

    </div>;
  };

  LibroComponente.propTypes = {
    libro: PropTypes.object.isRequired, // Adjust the prop type as per your data structure
  };

  return (<>
    <header>
      <h1>
        {librosDisponibles} Libros disponibles
      </h1>
      <h4>
        {librosFavoritos} Libros en la lista de favoritos
      </h4>
    </header>
    <main>
      <section style={{height:"100%",width:"65%"}}>
        <div style={{backgroundColor:"rgb(100,100,100)",margin:"5px", height:"calc(100% - 10px)",width:"calc(100% - 10px)",borderRadius:"25px",padding:"5px",boxSizing:"border-box",display:"flex",flexDirection:"column", justifyContent:"space-between"}}>
          <div style={{backgroundColor:"rgb(110,110,110)",borderRadius:"25px",padding:"15px",boxSizing:"border-box",height:"50px"}}>
            Filtros
          </div>
          <div style={{ backgroundColor: "rgb(110,110,110)", borderRadius: "25px", padding: "15px", boxSizing: "border-box", height: "calc(100% - 75px)", overflow: "hidden", position: "relative" }}>
            <div className="listadoLibros" style={{ width: "95%", height: "95%", boxSizing: "border-box", overflowY: "auto", position: "absolute" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                {libros.map((libro) => (
                  <LibroComponente libro={libro} key={libro.titulo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <aside style={{height:"100%",width:"35%"}}>
        <div style={{backgroundColor:"rgb(100,100,100)",margin:"5px", height:"calc(100% - 10px)",width:"calc(100% - 10px)",borderRadius:"25px",padding:"5px",boxSizing:"border-box"}}>
          <h1 style={{width:"100%",textAlign:"center"}}>Lista favoritos</h1>
        </div>
      </aside>
    </main>
  </>)
}

export default App
