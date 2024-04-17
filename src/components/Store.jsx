import { useState, useEffect } from 'react';
import { FaRegHeart } from "react-icons/fa6";

const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json'); // Assuming products.json is in public folder
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="bg-white py-8">
      <h2 className='pl-6 pt-5 text-2xl font-semibold'>Our Video Production Services</h2>
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        {products.map((product) => (
          <div key={product.id} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <a href="#">
              <img
                className="hover:grow hover:shadow-lg"
                src={product.image}
                alt={product.name}
              />
              <div className="pt-3 flex items-center justify-between">
                <p className="">{product.name}</p>
                <FaRegHeart className="h-6 w-6 fill-current text-gray-500 hover:text-black"/>
              </div>
              <p className="pt-1 text-gray-900">{product.price}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Store;
