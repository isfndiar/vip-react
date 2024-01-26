import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../redux/cartSlice/cartSlice";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  // product price * product qty
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id == item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  const handleDeleteAll = (e) => {
    e.preventDefault();
    dispatch(deleteItem([]));
    localStorage.removeItem("cart");
  };

  const handleDeleteRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      handleDeleteRef.current.style.display = "inline-block";
    } else {
      handleDeleteRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <>
      <table className="text-left table-auto border-separate border-spacing-x-5 ">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            cart.map((item) => {
              const product = products.find((product) => product.id == item.id);
              return (
                <tr key={item.id}>
                  <td>{product.title.substring(0, 10)}...</td>
                  <td>
                    ${" "}
                    {product.price.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </td>
                  <td>{item.qty}</td>
                  <td>
                    ${" "}
                    {(item.qty * product.price).toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </td>
                </tr>
              );
            })}
          <tr ref={totalPriceRef}>
            <td colSpan={3}>
              <b>Total Price</b>
            </td>
            <td>
              <b>
                ${" "}
                {totalPrice.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}
              </b>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        ref={handleDeleteRef}
        className="py-3 px-3 bg-black font-semibold text-white rounded-md mt-10 "
        onClick={(e) => handleDeleteAll(e)}
      >
        Delete
      </button>
    </>
  );
};

export default TableCart;
