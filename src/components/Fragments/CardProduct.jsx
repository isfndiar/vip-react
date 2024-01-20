import { Link } from "react-router-dom";
import Button from "../Elements/Button";

export default function CardProduct({ children }) {
  return (
    <div className=" w-full  max-w-xs bg-gray-800 m-3 border  border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
}

function Header({ src, id }) {
  return (
    <Link to={`/product/${id}`}>
      <img
        src={src}
        alt="sepatu baru"
        className="p-8 rounded-t-lg object-cover w-full h-60"
      />
    </Link>
  );
}

function Body({ name, children }) {
  return (
    <div className="px-5 pb-5    h-full">
      <a href="">
        <h5 className="text-xl text-white tracking-tight font-semibold ">
          {name.substring(0, 20)}...
        </h5>
        <p className="text-white  text-s">{children}</p>
      </a>
    </div>
  );
}

function Footer({ item, addToCart }) {
  return (
    <div className="flex items-center justify-between px-5 pb-5 ">
      <span className="text-xl font-bold text-white">
        ${" "}
        {item.price.toLocaleString("id-ID", {
          styles: "currency",
          currency: "IDR",
        })}
      </span>
      <Button classname="bg-blue-600" onClick={() => addToCart(item.id)}>
        Add to Cart
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
