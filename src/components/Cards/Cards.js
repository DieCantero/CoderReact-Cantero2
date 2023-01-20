import "./Cards.css"

const Cards = (props) => {
    const {artista, titulo, precio, img} = props

    
  return (
   
    <div className='d-inline-flex'>
        <div className="card cardStyle">
        <img src={img} className="card-img-top arteDeTapa" alt={"Arte de tapa "+titulo}/>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><h5>{titulo}</h5></li>
            <li className="list-group-item"><p>{artista}</p></li>
            <li className="list-group-item">$ {precio}</li>
        </ul>
        <div className="card-body">
            <a href="#" className="card-link"><button type="button" className="btn btn-outline-secondary btn-sm">Agregar</button></a>
        </div>
        </div>
    </div>
  
    
    )
}

export default Cards
