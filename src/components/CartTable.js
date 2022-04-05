import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { addDoc, collection } from "firebase/firestore";
import { deleteFromCart } from "../pages/pages-provider/pages-functions";
import DB from "../firebase";
import { toast } from "react-toastify";
import { Loader } from "../components/components-provider/components-provider";

const CartTable = ({ cartItems }) => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [loading, setloading] = useState(false);

/*   useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]); */

  useEffect(() => {
    let tempTotal = 0;
    cartItems.forEach((cartItem) => {
      tempTotal += cartItem.pageCount;
    });
    setTotal(tempTotal);
  }, [cartItems]);

  const placeOrder = async () => {
    const orderInfo = {
      cartItems,
      email: JSON.parse(localStorage.getItem("currentUser")).user.email,
      userid: JSON.parse(localStorage.getItem("currentUser")).user.uid,
    };

    try {
      setloading(true);
      const result = await addDoc(collection(DB, "Orders"), orderInfo);
      console.log(result);
      setloading(false);
      toast.success("Order placed successfuly");
    } catch (error) {
      setloading(false);
      toast.error("Order Failed");
    }
  };

  return (
    <div>
      {loading && <Loader />}
      {cartItems.length > 0 ? (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem) => (
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
                  <td className="delete-icon">
                    <FaTrash
                      onClick={() => deleteFromCart(cartItem, dispatch)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <h2 className="total-amount">Total: {total.toFixed(2)} RS/-</h2>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button onClick={placeOrder}>Place Order</button>
          </div>
        </>
      ) : (
        <h1>No Items in the cart</h1>
      )}
    </div>
  );
};

export default CartTable;
