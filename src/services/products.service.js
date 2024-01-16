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

// export const productApi = async (callback) => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const data = await res.json();
//   callback(data);
// };
