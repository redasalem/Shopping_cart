import { useSelector ,useDispatch } from 'react-redux'
import CartItem from './CartItem';
import { toggleStausTap } from '../../store/cart';


const CartTab = () => {
  const carts=useSelector(store=>store.cart.items)
  const stateTab = useSelector(store=>store.cart.stateTab);
  const dispatch = useDispatch();
   const handleOpenTabCart = () =>{
      dispatch(toggleStausTap());
    }
  return (
   <div
  className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]
    transform transition-transform duration-500 ${stateTab === false ? "translate-x-full" : ""}`}>
      <h2 className='p-5 text-white text-2xl '>Shopping Cart</h2>
      <div className='py-5'>
        {carts.map((item,key)=>
        <CartItem key={key} data={item}/>
        )}

      </div>
      <div className='grid grid-cols-2'>
        <button className='bg-black text-white cursor-pointer' onClick={handleOpenTabCart}>Close</button>
        <button className='bg-amber-600 text-white'>ChecK Out</button>

      </div>

    </div>
  )
}

export default CartTab