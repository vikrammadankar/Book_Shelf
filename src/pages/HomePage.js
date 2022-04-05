import React, { useState, useEffect } from "react";
import {
  Layout,
  Product,
} from "../components/components-provider/components-provider";
import { getProducts } from "./pages-provider/pages-functions";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <Layout loading={loading}>
      <div className="container">
        <div className="d-flex w-50 mb-4">
          <input
            type="text"
            placeholder="seach items"
            className="form-control"
            value={searchKey}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
          />
          <select
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
            }}
            className="form-control mx-2"
          >
            <option value="">All</option>
            <option value="microsoft">Microsoft</option>
            <option value="software">Software engineering</option>
            <option value="coffee">coffee house</option>
            <option value="java">Java </option>
            <option value="webdev">web development</option>
          </select>
        </div>
        <div className="row">
          {products
             .filter((obj) => obj.title.toLowerCase().includes(searchKey))
             .filter((obj) => obj.categories.toLowerCase().includes(filterType))
            .map((product) => (
              <Product product={product} key={product.id} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
