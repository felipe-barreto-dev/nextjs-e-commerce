import { Product } from "@/models/product";
import data from "../data.json";
import { z } from "zod";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const slug = z.string().parse(params.slug);

  const products: Product[] = data.products;
  const product = products.find((product) => product.slug === slug);

  if (!product) {
    return Response.json({ message: "Product not found" }, { status: 400 });
  }

  return Response.json(product);
}
