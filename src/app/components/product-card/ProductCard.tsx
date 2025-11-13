"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProductCard({ product }: any) {
  const [selectedProduct, setSelectedProduct] = useState({});

  const selectProd = () => {
    console.log("Selected Product:", product);
    setSelectedProduct(product);
  };

  return (
    <div
      onClick={selectProd}
      className="card h-10 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      style={{ width: "15rem " }}
    >
      <Link href={`/products/${product.id}`} className="text-decoration-none text-dark">
        <div className="text-center">
          <img
            src={product.image}
            className="card-img-top mx-auto d-block m-3"
            alt={product.title}
            style={{
              width: "100px",
              height: "120px",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <p className="card-title text-truncate" title={product.title}>
            {product.title}
          </p>
          <p className="fw-bold mb-0 text-success">₹{(product.price * 8.5).toFixed(2)}</p>
        </div>
      </Link>

      {/* Optional — can remove if Link is enough */}
      <div className="p-2">
        <Link href={`/products/${product.id}`} className="btn btn btn-danger w-100">
          Details
        </Link>
        
      </div>
    </div>
  );
}