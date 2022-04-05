import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Layout,
  SingleProduct,
  Loader,
} from "../components/components-provider/components-provider";
// import {getProduct} from './pages-provider/pages-functions'
import { getDoc, doc } from "firebase/firestore";
import DB from "../firebase";

const ProductInfo = () => {
  const [product, setProduct] = useState();
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const productTemp = await getDoc(doc(DB, "products", params.productid));
      console.log(productTemp.data());
      setProduct(productTemp.data());
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout>
      {product ? (
        <div className="container text-center myContainer">
          <SingleProduct product={product} />
        </div>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default ProductInfo;
