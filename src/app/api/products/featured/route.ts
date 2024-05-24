import { Product } from "@/models/product";
import data from "../data.json";

export async function GET() {
  const products: Product[] = data.products;
  const featuredProducts = products.filter((product) => product.featured);
  return Response.json(featuredProducts);
}
