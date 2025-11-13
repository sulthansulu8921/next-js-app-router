import ProductCard from "@/app/components/product-card/ProductCard";
import { ProductService } from "@/app/services/products-services";

export default async function CategoryProduct(props: any) {
  console.log("params", props);

  const myParams = props.searchParams;
  const categoryName = decodeURIComponent(props.params.categoryName);
  const productId = props.params.productId;
  var productList;

  if (categoryName) {
    productList = await ProductService.getProductsByCategory(categoryName);
  }

  return (
    <div>
      category : {categoryName} <br />
      productId : {productId} <br/>
      <br />
      <h3>{categoryName} Products</h3>
      <div className="d-flex flex-wrap gap-3 ">
        {productList.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
