import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
<<<<<<< HEAD
import product from "../data/product.js";
=======
import product from "../data/Product.js";
>>>>>>> c0dba9e (main)

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    try {
      fetch(process.env.REACT_APP_API_URL + "/products")
        .then((res) => res.json())
        .then((res) => setProducts(res.products));
  
    } catch (error) {
      console.error(error.message);
    }
  }, [searchParams]);

  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
          {products.length > 0
<<<<<<< HEAD
            ? products.map((product,index) => <ProductCard  key={index} product={product} />)
=======
            ? products.map((product,index) => <ProductCard key={index} product={product} />)
>>>>>>> c0dba9e (main)
            : product.map((product,index) => <ProductCard key={index}  product={product} />)}
        </div>
      </section>
    </Fragment>
  );
}
