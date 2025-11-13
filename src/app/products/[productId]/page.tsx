import { ProductService } from '@/app/services/products-services';
import Link from 'next/link';
import AddToCartClient from './AddToCartClient';

export async function generateMetadata(props: any) {
  const productId = props.params.productId;
  if (productId) {
    const product = await ProductService.getProductById(productId);
    return { title: product?.title || "Product Details Page" };
  }
  return { title: "Product Details Page" };
}

export default async function ProductDetail({ params }: any) {
  const { productId } = params;
  const product = await ProductService.getProductById(productId);

  if (!product) {
    return <div className="text-center text-gray-500 mt-10">Product not found</div>;
  }

  return (
    <section className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-lg rounded-xl grid md:grid-cols-2 gap-8 items-center text-center">
      <div className="flex flex-col items-center">
        <div className="w-full h-80 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            height={320}
            className="object-contain h-80 w-full rounded"
          />
        </div>
        <div className="text-sm text-gray-400 mt-2">
          Category:{" "}
          <Link href={`/categories/${product.category}/${productId}`} className="text-blue-600 hover:underline">
            {product.category}
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500 text-xl">&#9733;</span>
            <span>
              {product.rating?.rate} ({product.rating?.count} reviews)
            </span>
          </div>
          <div className="text-2xl text-blue-600 font-semibold mb-3">
            ${product.price}
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>
        </div>

        {/* ✅ Interactive Add to Cart Button */}
        <AddToCartClient product={product} />
      </div>
    </section>
  );
}
