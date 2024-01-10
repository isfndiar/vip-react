import { useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";
const products = [
  {
    id: 1,
    src: "/shoes.jpg",
    name: "kuma",
    price: 1000000,
    description:
      "lorem sdfikjl kontsdfksadjflksdlkafsiad isdafjlksdflka sdfla lsdfjsadflk ksdfsdlkfjaslkf.",
  },
  {
    id: 2,
    src: "/shoes.jpg",
    name: "Naiki",
    price: 2500000,
    description:
      "lorem sdfikjl kontsdfksad sdfasdf sdfasdsdf sdf s adfsadfasd fsdfsdf asff sd sdfsdaf asdfsadf as dfasdfjflksdlkafsiad isdafjlksdflka sdfla lsdfjsadflk ksdfsdlkfjaslkf.",
  },
  {
    id: 3,
    src: "/shoes.jpg",
    name: "Abibas",
    price: 3000000,
    description: "lorem sdfikjl kontsdfksadjfl.",
  },
  {
    id: 4,
    src: "/shoes.jpg",
    name: "Supra",
    price: 4000000,
    description: "Supre lorem ipsum set amet",
  },
];

export default function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const email = localStorage.getItem("email");

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id == item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("fullname");
    localStorage.removeItem("text");
    localStorage.removeItem("confirm-password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };

  // use ref
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);
  console.log(totalPriceRef);
  return (
    <>
      <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10 py-7">
        {email}
        <Button classname="bg-black ms-5" onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6  flex flex-wrap ">
          {products.map((item) => (
            <CardProduct key={item.id}>
              <CardProduct.Header src={item.src}></CardProduct.Header>
              <CardProduct.Body name={item.name}>
                {item.description}
              </CardProduct.Body>
              <CardProduct.Footer
                // price={item.price}
                // id={item.id}
                item={item}
                addToCart={handleAddToCart}
              ></CardProduct.Footer>
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="font-semibold text-blue-500 text-2xl ml-5 mb-2">
            {" "}
            Cart
          </h1>
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
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id == item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      RP{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
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
                    RP{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5 flex justify-center ">
        <Counter />
      </div>
    </>
  );
}
