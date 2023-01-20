import React from 'react'
import { useParams } from 'react-router-dom';
import Cards from '../Cards/Cards';
import { data } from '../Cards/Data'
import { Link } from 'react-router-dom';

const ItemListContainer = () => {

  
  /*const {titulo} = useParams ()*/
  const {categoria} = useParams ()
  
  const dataFiltrada =  categoria ? data.filter ((a) => a.categoria === categoria) : data
  

  return (
    
    dataFiltrada.map(({img, titulo, artista, precio}, index ) => (
      <Link to={`/item/detail/${titulo}`}>
        <Cards
        key={index}
        img={img}
        titulo={titulo}
        artista={artista}
        precio={precio}
        
        />
        </Link>  
        ))
      
  )
}

export default ItemListContainer