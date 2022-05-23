import '../styles/globals.css'
import NavBar from '../components/NavBar'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("Useeffect is running")
  }, [])

  const [cart, setCart] = useState([])
  const [reloadKey, setReloadKey] = useState(1)
  const addToCart = (item, qty, price)=>{
    let newCart = cart
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price])
    }
    setCart(newCart)
    setReloadKey(Math.random())
    console.log(cart)
  }
  const removeFromCart = (item, qty)=>{
    let newCart = cart
    let index = newCart.indexOf(item)
    newCart.splice(index)
    setCart(newCart)
    setReloadKey(Math.random())
  }
  const clearCart = (item)=>{
    setCart([])
    setReloadKey(Math.random())
  }
  return <>
    <NavBar key={reloadKey} cart={cart}/>
    <Component cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart} {...pageProps} />
  </> 
}

export default MyApp
