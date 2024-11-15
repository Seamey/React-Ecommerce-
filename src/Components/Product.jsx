import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const rating = Math.round(product.rating.rate); 
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-100">
      
        <img onClick={()=>(handleCardClick)} className="rounded-t-lg h-56 mx-auto pt-4 px-2" src={product.image} alt={product.title} />
      <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {product.title}
          </h5>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-green-600 dark:text-white ">
          ${product.price}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {product.description}
        </p>
        
        {/* Star Rating */}
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`h-5 w-5 ${
                index < rating ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-2 text-gray-600 dark:text-gray-400">{product.rating.rate}</span>
        </div>

        <button  
          onClick={() => dispatch({ type: "Add", product: product })} 
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-600 rounded-lg hover:bg-pink-400 focus:ring-4 focus:outline-none " 
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
