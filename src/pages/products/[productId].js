import { useRouter } from "next/router";
import React from "react";

const Product = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is dynamic page {router.query.productId} </h1>
    </div>
  );
};

export default Product;
