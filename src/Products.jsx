import React from 'react'

function Products(props) {

    function handleClick(id) {
       let filterProduct = props.productsArr.filter((myProduct) => {
            return myProduct.id == id;
        })
        console.log(filterProduct)
        props.setSingleProductDetail(filterProduct);
        props.setOpen(true)
    }

  return (
    <div>

        <div className='grid md:grid-cols-4 grid-col-1 gap-[10px]'>

        {
            props.productsArr.map((info) =>(
                <div className='w-full border border-2 border-gray-400 rounded-2xl p-3 hover:bg-rose-100' onClick={()=>handleClick(info.id)}>
            <img src= {info.images[0]} className='h-[100px] m-auto ' />
            <p className='opacity-60 text-xl mt-1'>{info.title}</p>
            <p className='font-bold text-3xl'>${info.price}</p>
            <p className='opacity-60 mb-4 mt-3'>{info.category}</p>
            <button className='rounded-3xl w-[100px] h-[40px] bg-green-400 text-white font-bold text-2xl '>4.{}{info.rating.rate}*</button> <span>{info.rating.count} Reviews </span>
          </div>
            ))
        }

    </div>
      
    </div>
  )
}

export default Products
