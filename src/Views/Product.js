import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });
  const url = `https://64dce38be64a8525a0f75025.mockapi.io/products/${id}`;

  let content = null;

  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false,
    });
    // Fetch data using axios
    axios
      .get(url)
      .then((response) =>
        setProduct({ loading: false, data: response.data, error: false })
      )
      .catch((error) =>
        setProduct({ loading: false, data: null, error: true })
      );
  }, [url]);

  if (product.error) {
    content = <p>The product was not found. Please try again later</p>;
  }

  if (product.loading) {
    content = <Loader></Loader>;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.image} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }
  return <div>{content}</div>;
}

export default Product;
