import React from "react";
import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    // Check if product has an ID
    if (product?._id) {
      // For real products from the database
      navigate(`/product/${product._id}`);
    } else {
      // For static data without real IDs, use a dummy ID based on the product title
      const dummyId =
        product?.title?.replace(/\s+/g, "-").toLowerCase() || "unknown-product";

      // Store the product in localStorage with a key that includes the ID
      // This makes it easier to retrieve the specific product
      localStorage.setItem(`product_${dummyId}`, JSON.stringify(product));

      navigate(`/product/${dummyId}`);
    }
  };

  return (
    <div
      onClick={handleProductClick}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={
            product?.imageUrl ||
            product?.image ||
            "https://via.placeholder.com/300x400?text=No+Image"
          }
          alt={product?.title || "Product Image"}
          onError={(e) => {
            console.error("Image failed to load:", e.target.src);
            e.target.src =
              "https://via.placeholder.com/300x400?text=Image+Error";
          }}
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;
