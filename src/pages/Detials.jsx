import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { products } from '../product';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCard } from '../../store/cart';

const Detials = () => {
  const {slug} = useParams();
  const [details,setdetails]=useState([]);
  const [quantity,setquantity]=useState(1);
  const dispatch = useDispatch();
  useEffect(()=>{
    const findDetail = products.filter(product=>product.slug === slug);
    if(findDetail.length > 0){
      setdetails(findDetail[0])
    }else{
      window.location.href= '/';
    }
  },[slug]);

  const handlerToCart =()=>{
dispatch(addToCard({
  productId:details.id,
  quantity:quantity
}))
  }


  return (
    <div>
      <h1 className='text-3xl text-center'>Product Details</h1>
      <div className='grid grid-cols-2 gap-5 mt-5'>
        <div>
          <img src={details.image} alt={details.name} className='w-full'/>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-4xl uppercase font-bold'>{details.name}</h1>
          <p className='font-bold text-3xl'>
            $ {details.price}
          </p>
          <div className='flex gap-5'>
           <div className='flex gap-2 justify-center items-center'>
  <button
    className='bg-white w-10 h-full font-bold text-xl flex items-center justify-center'
    onClick={() => setquantity(prev => (prev > 1 ? prev - 1 : 1))}
  >
    -
  </button>

  <span className='bg-white w-10 h-full font-bold text-xl flex items-center justify-center text-red-700'>
    {quantity}
  </span>

  <button
    className='bg-white w-10 h-full font-bold text-xl flex items-center justify-center'
    onClick={() => setquantity(prev => prev + 1)}
  >
    +
  </button>
</div>

             <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors" onClick={handlerToCart}>
                <FaShoppingCart className="w-5 h-5" />
                 </button>

          </div>
          <p>{details.description}</p>

        </div>

      </div>
    </div>
  )
}

export default Detials