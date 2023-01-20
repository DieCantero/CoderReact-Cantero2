import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../Cards/Data'
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';

const ItemDetailContainer = () => {

    const {titulo} = useParams ()
    const detalleFiltrado = data.filter ((a) => a.titulo === titulo)


  return (
    
    detalleFiltrado.map(({img, titulo, artista, precio, info}, index ) => (
        <Link to={`/item/detail/${titulo}`}>
          <Cards
          key={index}
          img={img}
          titulo={titulo}
          artista={artista}
          precio={precio}
          info={info}
          />
          </Link>  
          
          ))
          
  )
}

export default ItemDetailContainer