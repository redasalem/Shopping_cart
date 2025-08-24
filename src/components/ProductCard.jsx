import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCard } from '../../store/cart';


const ProductCard = ({ product }) => {
    const carts = useSelector(store=>store.cart.items);
    console.log(carts);
  const {id, name, price, description, image, slug } = product;
  const dispatch = useDispatch();
  const HandleAddToCard = () =>{
dispatch(addToCard({
    productId:id,
    quantity:1
}))
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col shadow-lg">
      <img src={image} alt={name} className="w-full object-cover rounded-t-lg" />
      <div className="mt-4 flex flex-col flex-grow">
        <h1 className="text-lg font-semibold text-gray-800">{name}</h1>
        <p className="text-gray-500 mt-2 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">${price}</span>
          <div className="flex gap-2">
            {/* زر إضافة للسلة */}
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            onClick={()=>{HandleAddToCard()}}>
              <FaShoppingCart className="w-5 h-5" />
            </button>

            {/* أيقونة التفاصيل بنفس تنسيق زر السلة */}
            <Link
              to={slug}
              className="flex items-center justify-center bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
            >
              <FiInfo className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
