import React from 'react'

function Products() {
  const products = ["Learning React","Pro React","Beginning React"]
  const pipe = ["ronny","tom","ethan","ethan","sibu","cadee"]
  const rural= ["MY NAME IS RONNY MPUTLA"]
  const love = true
  const listProducts = products.map((product) => 
      <li key={product.toString()}>{product}</li>
  )

  return (
    <div style={{textAlign:"center" , color:"yellow"}}>
      <ul>{listProducts}{love ? console.log(pipe) :"wrong" } </ul>
      <p>{love ?console.log(rural) :"try again u got these"}</p>
    </div>
  )
}

export default Products