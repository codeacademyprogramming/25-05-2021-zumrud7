import ProductCard from "./ProductCard";
import Basket from "./Basket";

export default function ProductList() {

  return (
    <div id="product-list">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Popular dishes</h1>
          <Basket />
        </div>
        <div className="row list-wrapper">
         <ProductCard />
        </div>
      </div>
    </div>
  );
}
