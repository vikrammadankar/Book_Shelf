import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
// import { getProducts } from "./pages-provider/pages-functions";
import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import DB from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getOrders(setOrders);
  }, []);

  const getOrders = async () => {
    try {
      setLoading(true);
      const ordersFromFB = await getDocs(collection(DB, "Orders"));
      let orderssContainer = [];
      ordersFromFB.forEach((doc) => {
        orderssContainer.push(doc.data());
        setLoading(false);
      });
      console.log(orderssContainer);
      setOrders(orderssContainer);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout loading={loading}>
      <h2 className="heading">Order History</h2>
      <div className="p-2">
        {orders.map((order) => {
          return (
            <table className="table mt-3 order">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {order.cartItems.map((cartItem) => (
                  <tr key={cartItem.id}>
                    <td>
                      <img
                        src={cartItem.thumbnailUrl}
                        alt={cartItem.title}
                        width="80"
                      />
                    </td>
                    <td>{cartItem.title}</td>
                    <td> {cartItem.pageCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
        })}
      </div>
    </Layout>
  );
};

export default OrdersPage;
