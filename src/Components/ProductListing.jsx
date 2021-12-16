import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../Redux/Actions/ProductActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  const getProducts = async () => {
    const products = await axios
      .get("https://fakestoreapi.com/products")
      .catch(error => console.log(error));

    dispatch(setProducts(products.data));
  };

  useEffect(() => getProducts(), []);
  return (
    <div>
      <div className="container-lg">
        <div className="row">
          {products.map(product => (
            <ProductComponent key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
