import { AddToCartBtn } from "../../features/AddToCartBtn/AddToCartBtn";

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
);

export const ProdCard = ({product}) => {
  return (
    <article className='group flex flex-col'>
      <div className='relative'>
        <img
          className='w-full h-auto aspect-square object-cover bg-gray-100'
          src={product.image}
          alt={product.name}
        />
        <button className='absolute top-3 right-3 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity'>
          <HeartIcon />
        </button>
      </div>
      
      <div className="flex flex-col flex-grow pt-3">
        <div className="mb-2">
          <span className="font-bold text-lg">{product.price} ₽</span>
          {product.oldPrice && (
            <span className="line-through text-gray-500 ml-2">{product.oldPrice} ₽</span>
          )}
        </div>
        
        <h2 className="text-base text-gray-700 mb-4">{product.name}</h2>
        
        <div className='mt-auto'>
          <AddToCartBtn />
        </div>
     </div>
      
    </article>
  )
}