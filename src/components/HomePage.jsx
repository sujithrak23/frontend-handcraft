import React from 'react'

const products = [
    {
        url:"https://i.pinimg.com/564x/6d/6c/9d/6d6c9d72733656f823233caec2aee34d.jpg",
        title:"Flower Vase",
        category:"Pottery",
        amount:"Rs.350./",
        company:"Make Pots",
    },
    {
        url:"https://i.pinimg.com/564x/ec/26/68/ec266846544079b610e841c36f7a508d.jpg",
        title:"Wooden Ladles",
        category:"Wooden Crafts",
        amount:"Rs.290./",
        company:"Woods Wonder",
    },
    {
        url:"https://i.pinimg.com/564x/e0/c3/4e/e0c34ed668971b31fae96def6e28d027.jpg",
        title:"Thread Bangles",
        category:"Jewellary",
        amount:"Rs.150./",
        company:"Riyas Jewels",
    },
    {
        url:"https://i.pinimg.com/564x/6d/6c/9d/6d6c9d72733656f823233caec2aee34d.jpg",
        title:"Flower Vase",
        category:"Pottery",
        amount:"Rs.350./",
        company:"Make Pots",
    },
    {
        url:"https://i.pinimg.com/564x/ec/26/68/ec266846544079b610e841c36f7a508d.jpg",
        title:"Wooden Ladles",
        category:"Wooden Crafts",
        amount:"Rs.290./",
        company:"Woods Wonder",
    },
    {
        url:"https://i.pinimg.com/564x/6d/6c/9d/6d6c9d72733656f823233caec2aee34d.jpg",
        title:"Flower Vase",
        category:"Pottery",
        amount:"Rs.350./",
        company:"Make Pots",
    },
    {
        url:"https://i.pinimg.com/564x/ec/26/68/ec266846544079b610e841c36f7a508d.jpg",
        title:"Wooden Ladles",
        category:"Wooden Crafts",
        amount:"Rs.290./",
        company:"Woods Wonder",
    },
]

export default function HomePage() {

  return (
    <>
      <div className='container'>
        {products.map((item,index) => (
            <div className='box' style={{border:"3px"}} key={index}>
            <img className='box-img' src={item.url} />
            <p>{item.title}</p>
            <div>Category : {item.category} </div>
            <p>{item.amount} only</p>
            <button>Add to cart</button>
            <hr/>
            <p><span>{item.company}</span></p>
            </div>
        ))}
        </div>
    </>
  )
}
