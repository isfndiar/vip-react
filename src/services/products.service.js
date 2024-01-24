import axios from "axios";

export const productApi = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getProductDetail = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// product data before apply api
// data produk sebelum menggunakan api
const dataUserBeforeApi = () => {
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
};
