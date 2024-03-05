import { useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";
import { productApi } from "../services/products.service";
import useLogin from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";
export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { isDarkMode } = useContext(DarkMode);

  useLogin(); // Login or not
  // get local storage cart

  // get Products APi
  useEffect(() => {
    productApi((data) => setProducts(data));
    // productApi();
  }, []);

  return (
    <>
      <Navbar />
      <div
        className={`flex justify-center py-5 ${
          isDarkMode ? "bg-slate-700 text-white" : "bg-white"
        } `}
      >
        <div className="w-4/6  flex flex-wrap ">
          {products.length > 0 &&
            products.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header src={item.image} id={item.id} />
                <CardProduct.Body name={item.title}>
                  {item.description.substring(0, 100)}...
                </CardProduct.Body>
                <CardProduct.Footer
                  // price={item.price}
                  // id={item.id}
                  item={item}
                ></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="font-semibold text-blue-500 text-2xl ml-5 mb-2">
            {" "}
            Cart
          </h1>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
}
