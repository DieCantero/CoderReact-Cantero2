import React, {useState} from 'react'


const CartWidget = () => {

  const [counter, setCounter] = useState(0)
  
  const sumar = () => setCounter(counter + 1)
  const restar = () => {if(counter > 0){setCounter(counter - 1)}}

  return (

    <div>
        <i className="bi bi-cart3 d-inline-block"></i>
        <span> {counter}</span>
    </div>
    
  )
}

export default CartWidget