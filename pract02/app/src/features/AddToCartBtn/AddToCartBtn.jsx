import { useState } from "react";

export const AddToCartBtn = () => {
  const [isInCart, setIsInCart] = useState('');
  
  const handleClick = () => {
    setIsInCart(true);
  };
  
  return (
    <button
      onClick={handleClick}
      disabled={isInCart}
      className={`w-full font-semibold py-2.5 px-4 rounded=lg transition-colors duration-200 ${
        isInCart
        ? 'bg-gray-700 text-white cursor-not-allowded'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {isInCart ? 'В корзине' : 'В корзину'}
    </button>
  );
};