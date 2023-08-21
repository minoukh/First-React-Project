import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });
  const url = `https://64dce38be64a8525a0f75025.mockapi.io/products?page=1&limit=10`;

  let content = null;

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false,
    });
    // Fetch data using axios
    axios
      .get(url)
      .then((response) =>
        setProducts({ loading: false, data: response.data, error: false })
      )
      .catch((error) =>
        setProducts({ loading: false, data: null, error: true })
      );
  }, [url]);

  if (products.error) {
    content = <p>The product was not found. Please try again later</p>;
  }

  if (products.loading) {
    content = <Loader></Loader>;
  }

  if (products.data) {
    content = products.data.map((product, key) => (
      <div>
        <ProductCard product={product} />
      </div>
    ));
  }
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
      {content}
    </div>
  );
}

export default Home;
