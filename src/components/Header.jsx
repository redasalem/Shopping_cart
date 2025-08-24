import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cartLog from '../assets/images/iconCart.png';
import { useSelector , useDispatch } from 'react-redux';
import { toggleStausTap } from '../../store/cart';


const Header = () => {
  const [totalQuantity,setotalQuantity]=useState(0);
  const carts = useSelector(store=>store.cart.items);
  const dispatch = useDispatch();
  useEffect(()=>{
    let total =0;
    carts.forEach(item => total += item.quantity);
    setotalQuantity(total);
  },[carts])

  const handleOpenTabCart = () =>{
    dispatch(toggleStausTap());
  }
  return (
    <header className='flex justify-between items-center mb-5'>
      <Link to='/' className='text-xl font-semibold'>Home.</Link>
      <div className='w-10 h-10 bg-gray-100 rounded-full flex 
      justify-center items-center relative cursor-pointer' onClick={handleOpenTabCart}>
        <img src={cartLog} alt="cartLog" className='w-6'/>
        <span className=' absolute bottom-2/3 right-1/2 bg-red-500 text-white text-sm 
        w-5 h-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
      </div>

    </header>
  )
}

export default Header