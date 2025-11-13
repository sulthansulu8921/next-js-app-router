import { Suspense } from "react";
import GotoCartButton from "../components/buttons/GotoCartButton";
import ProductList from "../components/productList/ProductList";
import { ProductService } from "../services/products-services";
import { Metadata } from "next";
import { cookies, headers } from "next/headers";

async function getProducts() {
  const productResp = await ProductService.getProducts();
  return productResp;
}

export const metadata: Metadata = {
  title: 'Product List Page'
}

export default async function products() {
  const products = await getProducts();

  const cookieList = cookies();
  const token = (await cookieList).get('authToken');
  console.log("Token cookie",token, token?.value);

  const headerList = headers();
  const referer = (await headerList).get('referer');
  console.log("referer: ", referer);
  console.log("browser :", (await headerList).get('user-Agent'));
  
  
  return (
    <div >
      <div className="row">
        {/* <div className="col-md-3 border-end p-3">
          <h5 className="mb-3">Filters</h5>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="below500"
            />
            <label className="form-check-label" htmlFor="below500">
              Price below ₹500
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="above500"
            />
            <label className="form-check-label" htmlFor="above500">
              Price above ₹500
            </label>
          </div>

          <h5 className="mt-4 mb-2">Sort By</h5>
          <select className="form-select">
            <option value="default">Default</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
          <h5 className="mt-4 mb-2">By Category</h5>
          <select className="form-select">
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="mensClothing">Men's clothing</option>
          </select>
        </div> */}
        <div className="col-md-9 p- product">
          <div className="row ">
            <GotoCartButton />

            <h3 className="text-2xl font-bold mb-6 text-center">
              Product List
            </h3>
            <Suspense fallback={<span>Loading...</span>} >
              <ProductList />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}