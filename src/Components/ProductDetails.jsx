import { useNavigate, useParams, useLocation } from "react-router-dom";

const ProductDetails = () => {
  //   const { productid } = useParams();
  const location = useLocation();
  const { product } = location.state;

  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product.image}
                    className="img-fluid rounded-start m-2"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-primary w-100 mb-1"
                onClick={() => navigate(`/`)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
