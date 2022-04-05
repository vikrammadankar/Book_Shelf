import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import DB from "../firebase";
import { FaTrash, FaEdit } from "react-icons/fa";
// import EditModal from "../components/edit-product/EditModal";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [product, setProduct] = useState({
    title: "",
    pageCount: "",
    categories: "",
    thumbnailUrl: "",
  });

  const [add, setAdd] = useState();

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  const editHandler = (item) => {
    setProduct(item);
    setShow(true);
  };

  const updateProduct = async () => {
    try {
      setLoading(true);
      await setDoc(doc(DB, "products", product.id), product);
      getProducts();
      handleClose();
      toast.success("Product Updated Successfully");
    } catch (error) {
      setLoading(false);
      toast.error("Product Updation Failed");
      console.log(error);
    }
  };

  const getProducts = async (setFunction) => {
    try {
      setLoading(true);
      const productsFromFB = await getDocs(collection(DB, "products"));
      let productsContainer = [];
      productsFromFB.forEach((doc) => {
        const productWithID = {
          id: doc.id,
          ...doc.data(),
        };
        productsContainer.push(productWithID);
        setLoading(false);
      });
      setFunction(productsContainer);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const addProduct = async () => {
    try {
      setLoading(true);
      await addDoc(collection(DB, "products"), product);
      setLoading(false);
      handleClose();
      toast.success("Product Added Successfully");
    } catch (error) {
      setLoading(false);
      toast.error("Product's Adding Failed");
      console.log(error);
    }
  };

  const addHandler = () => {
    setAdd(true);
    handleShow();
  };

  return (
    <Layout loading={loading}>
      <div className="d-flex justify-content-between">
        <h3>Product list</h3>
        <button onClick={addHandler}>Add product</button>
      </div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.thumbnailUrl} alt={item.title} width="80" />
              </td>
              <td>{item.title}</td>
              <td> {item.pageCount}</td>
              <td>{item.categories}</td>
              <td>
                <FaTrash color="red" size={20} />
                <FaEdit onClick={editHandler} color="blue" size={20} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal section */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {add === true ? "Add product" : "Edit Product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <input
              type="text"
              className="form-control"
              placeholder="Edit Title..."
              value={product.title}
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
            />

            <input
              type="number"
              className="form-control"
              placeholder="Edit price..."
              value={product.pageCount}
              onChange={(e) =>
                setProduct({ ...product, pageCount: e.target.value })
              }
            />

            <input
              className="form-control"
              type="text"
              placeholder="Edit categories..."
              value={product.categories}
              onChange={(e) =>
                setProduct({ ...product, categories: e.target.value })
              }
            />

            <input
              type="text"
              className="form-control"
              placeholder="paste Image URL..."
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>Close</button>
          {add ? (
            <button onClick={addProduct}>SAVE</button>
          ) : (
            <button onClick={updateProduct}>SAVE</button>
          )}
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default AdminPage;
