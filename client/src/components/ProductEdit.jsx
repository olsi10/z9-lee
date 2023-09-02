import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductEdit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    price: 0,
    inventory: 0,
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`http://localhost:3001/product/${id}`);
        setProduct(response.data);
        setUpdatedProduct(response.data); // 수정할 상품 정보 초기화
      } catch (error) {
        console.error(error);
      }
    }

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3001/product/${id}`, updatedProduct);
      console.log("상품 수정 완료");
      // 수정 후 처리 (예: 상품 상세 페이지로 이동)
    } catch (error) {
      console.error("상품 수정 에러:", error);
    }
  };

  return (
    <div>
      <h2>상품 수정</h2>
      <form onSubmit={handleSubmit}>
        <label>
          제품명:
          <input
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={handleChange}
          />
        </label>
        <button type="submit">수정 완료</button>
      </form>
    </div>
  );
};

export default ProductEdit;
