import { useNavigate } from "react-router-dom";
const ProductComponent = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 my-3 ">
      <div
        className="card border border-1 border-warning"
        style={{ width: "18rem", height: "460px" }}
        onClick={() =>
          navigate(`/product/${product.id}`, {
            state: {
              product,
            },
          })
        }
      >
        <img
          src={product.image}
          className="card-img-center mx-auto my-2"
          alt={product.title}
          style={{ width: "250px", height: "250px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            <small className="text-muted">{product.price}</small>
          </p>
          <p className="card-text">{product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
