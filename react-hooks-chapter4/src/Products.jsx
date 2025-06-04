import React from 'react'
import Product from './Product'

const getProducts = () => {
  return [
    {
      imageUrl: "http://loremflickr.com/150/150?random=1",
      productName: "Product 1",
      releasedDate: "May 31, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
      rating: 4,
      numOfReviews: 2
    },
    {
      imageUrl: "http://loremflickr.com/150/150?random=2",
      productName: "Product 2",
      releasedDate: "October 31, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
      rating: 2,
      numOfReviews: 12
    },
    {
      imageUrl: "http://loremflickr.com/150/150?random=3",
      productName: "Product 3",
      releasedDate: "July 30, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
      rating: 5,
      numOfReviews: 2
    },
    {
  imageUrl: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
  productName: "iPhone 14 Pro Max",
  releasedDate: "September 16, 2024",
  description: "The iPhone 14 Pro Max features a 6.7‑inch Super Retina XDR display, A16 Bionic chip, Dynamic Island, and Pro camera system.",
  rating: 5,
  numOfReviews: 1284
},
{
  imageUrl: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p60-pro-1.jpg",
  productName: "Huawei P60 Pro",
  releasedDate: "March 31, 2025",
  description: "The Huawei P60 Pro offers a powerful camera system with a 48MP main sensor, Snapdragon 8+ Gen 1, and a beautiful OLED display, all packed in a sleek design.",
  rating: 4.6,
  numOfReviews: 742
}




  ]
}

function Products() {
  const products = getProducts()

  const listProducts = products.map((product) =>
    <Product key={product.productName} data={product} />
  )

  return (
    <div>
      <ul>{listProducts}</ul>
    </div>
  )
}

export default Products